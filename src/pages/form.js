import Swal from 'sweetalert2';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, isConfigured } from '../firebase';
import { logoutUser } from '../auth';
import { navigateTo } from '../router';

export async function renderForm(container, user, role) {
  let isSaving = false;
  let existingData = null;
  let status = 'nao_iniciado';
  let pendencias = '';

  // Carrega dados existentes
  try {
    if (isConfigured) {
      const docRef = doc(db, 'coletas', user.email.toLowerCase().trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        existingData = docSnap.data();
        status = existingData.status || 'editando';
        pendencias = existingData.pendencias || '';
      }
    } else {
      const saved = localStorage.getItem(`demo_coleta_${user.email}`);
      if (saved) {
        existingData = JSON.parse(saved);
        status = existingData.status || 'editando';
        pendencias = existingData.pendencias || '';
      }
    }
  } catch (error) {
    console.error('Erro ao carregar dados do usuário:', error);
  }

  const isLocked = status === 'em_analise' || status === 'deferido';

  // Define o banner de status no topo do form
  let bannerHTML = '';
  if (status === 'indeferido') {
    bannerHTML = `
      <div class="mb-8 p-6 bg-red-50 border border-red-200 rounded-3xl text-sm text-red-800 space-y-2">
        <span class="font-extrabold flex items-center gap-2 text-lg text-red-950">
          <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          Atenção: Necessita de Correções
        </span>
        <p class="whitespace-pre-line font-medium leading-relaxed bg-white p-4 rounded-xl border border-red-100 text-red-900">${pendencias || 'Por favor revise os campos apontados pelo administrador.'}</p>
      </div>
    `;
  } else if (status === 'em_analise') {
    bannerHTML = `
      <div class="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-3xl text-sm text-blue-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-blue-950">
          <svg class="w-6 h-6 text-blue-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
          </svg>
          Cadastro em Análise
        </span>
        <p class="mt-2 font-medium">Este formulário está em fase de análise pela administração e não pode ser editado no momento.</p>
      </div>
    `;
  } else if (status === 'deferido') {
    bannerHTML = `
      <div class="mb-8 p-6 bg-green-50 border border-green-200 rounded-3xl text-sm text-green-800">
        <span class="font-extrabold flex items-center gap-2 text-lg text-green-950">
          <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Cadastro Homologado (Deferido)
        </span>
        <p class="mt-2 font-medium">Seu cadastro foi revisado e aprovado. As informações estão salvas de forma definitiva.</p>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Top Nav Bar -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão ativa: <strong class="text-slate-800 font-bold">${user.email}</strong></span>
        <span class="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${role}</span>
      </div>
      <div class="flex items-center gap-3">
        <button id="btnVoltarInicio" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Início
        </button>
        ${role === 'admin' ? `
          <button id="btnIrAdmin" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Painel Admin
          </button>
        ` : ''}
        <button id="btnLogout" class="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sair
        </button>
      </div>
    </div>

    <!-- Main Container -->
    <div class="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
      
      <!-- Banner Informativo superior se aplicável -->
      ${bannerHTML}

      <header class="mb-12 pb-6 border-b border-slate-100 flex items-center gap-4">
        <div class="p-3 bg-blue-600 text-white rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Cadastro RH LAMES</h1>
          <p class="text-slate-600 mt-1">Por favor, preencha todos os campos com atenção para o registro no sistema Coleta.</p>
        </div>
      </header>

      <form id="coletaForm" class="space-y-12">
        <!-- 1. Identificação -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">1. Identificação</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="tipo_integrante" class="block text-sm font-semibold text-slate-700 mb-1.5">Tipo de Integrante</label>
              <select id="tipo_integrante" name="tipo_integrante" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="servidor">Servidor</option>
                <option value="aluno_interno">Aluno Interno</option>
                <option value="aluno_externo">Aluno Externo</option>
                <option value="bolsista">Bolsista</option>
                <option value="terceirizado">Terceirizado</option>
              </select>
            </div>
          </div>
        </section>

        <!-- 2. Dados Pessoais -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">2. Dados Pessoais</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div class="md:col-span-2">
              <label for="nome_completo" class="block text-sm font-semibold text-slate-700 mb-1.5">Nome Completo</label>
              <input type="text" id="nome_completo" name="nome_completo" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: Antônio da Silva">
            </div>
            <div>
              <label for="cpf" class="block text-sm font-semibold text-slate-700 mb-1.5">CPF</label>
              <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="rg" class="block text-sm font-semibold text-slate-700 mb-1.5">RG / Identidade</label>
              <input type="text" id="rg" name="rg" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: MG-12.345.678">
            </div>
            <div class="md:col-span-2">
              <label for="endereco" class="block text-sm font-semibold text-slate-700 mb-1.5">Endereço Residencial</label>
              <input type="text" id="endereco" name="endereco" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Rua, Número, Bairro, Cidade - Estado">
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
              <input type="email" id="email" name="email" value="${user.email}" readonly disabled
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-100 placeholder-slate-400 focus:outline-none transition duration-150 ease-in-out text-base text-slate-500 cursor-not-allowed">
            </div>
            <div>
              <label for="telefone" class="block text-sm font-semibold text-slate-700 mb-1.5">Telefone de Contato</label>
              <input type="text" id="telefone" name="telefone" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="(00) 00000-0000">
            </div>
          </div>
        </section>

        <!-- 3. Saúde e Emergência -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">3. Saúde e Emergência</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
            <div>
              <label for="grupo_sanguineo" class="block text-sm font-semibold text-slate-700 mb-1.5">Grupo Sanguíneo</label>
              <select id="grupo_sanguineo" name="grupo_sanguineo" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
                <option value="" disabled selected>Selecione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label for="alergias" class="block text-sm font-semibold text-slate-700 mb-1.5">Alergias</label>
              <input type="text" id="alergias" name="alergias" placeholder="Caso possua, especifique, caso contrário digite Nenhuma" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div class="md:col-span-3">
              <label for="contato_emergencia" class="block text-sm font-semibold text-slate-700 mb-1.5">Contato de Emergência (Nome e Tel)</label>
              <input type="text" id="contato_emergencia" name="contato_emergencia" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: Maria (Mãe) - (00) 99999-9999">
            </div>
          </div>
        </section>

        <!-- 4. Formação Acadêmica -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">4. Formação Acadêmica</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="titulacao" class="block text-sm font-semibold text-slate-700 mb-1.5">Titulação Máxima</label>
              <input type="text" id="titulacao" name="titulacao" required placeholder="Ex: Mestre, Doutor"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="local_formacao" class="block text-sm font-semibold text-slate-700 mb-1.5">Local de Formação</label>
              <input type="text" id="local_formacao" name="local_formacao" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Nome da Instituição">
            </div>
            <div>
              <label for="ano_conclusao" class="block text-sm font-semibold text-slate-700 mb-1.5">Ano de Conclusão</label>
              <input type="number" id="ano_conclusao" name="ano_conclusao" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
                placeholder="Ex: 2023">
            </div>
            <div>
              <label for="diploma" class="block text-sm font-semibold text-slate-700 mb-1.5">Anexar Diploma (PDF/JPG) ${existingData?.diplomaUrl ? '<span class="text-green-600 font-normal text-xs">(Já enviado)</span>' : ''}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-slate-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" id="diploma" name="diploma" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${existingData?.diplomaUrl ? `
                <a href="${existingData.diplomaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline mt-1.5 inline-block font-semibold">Visualizar arquivo atual</a>
              ` : ''}
            </div>
          </div>
        </section>

        <!-- 5. Informações do Coleta -->
        <section class="space-y-6 bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 class="text-2xl font-bold text-blue-900 tracking-tight">5. Informações do Coleta (Anual)</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label for="vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Vínculo</label>
              <input type="text" id="vinculo" name="vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="prazo_vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Prazo do Vínculo</label>
              <input type="text" id="prazo_vinculo" name="prazo_vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="origem_vinculo" class="block text-sm font-semibold text-blue-900 mb-1.5">Origem do Vínculo</label>
              <input type="text" id="origem_vinculo" name="origem_vinculo" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="cargo_nivel" class="block text-sm font-semibold text-blue-900 mb-1.5">Cargo / Nível</label>
              <input type="text" id="cargo_nivel" name="cargo_nivel" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div>
              <label for="situacao_atual" class="block text-sm font-semibold text-blue-900 mb-1.5">Situação Atual</label>
              <input type="text" id="situacao_atual" name="situacao_atual" required
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
            <div class="flex items-center gap-3 h-full pt-6">
              <input type="checkbox" id="e_docente" name="e_docente"
                class="w-5 h-5 rounded border-blue-300 text-blue-700 shadow-sm focus:ring-blue-500 focus:ring-offset-blue-50">
              <label for="e_docente" class="text-base font-semibold text-blue-950">É Docente?</label>
            </div>
            <div class="md:col-span-2">
              <label for="orientador" class="block text-sm font-semibold text-blue-900 mb-1.5">Orientador (se aplicável)</label>
              <input type="text" id="orientador" name="orientador" placeholder="Nome do Orientador se aplicável"
                class="w-full rounded-xl border border-blue-200 p-3 bg-white placeholder-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-150 ease-in-out text-base">
            </div>
          </div>
        </section>

        <!-- Footer Buttons -->
        <footer class="flex justify-end gap-4 pt-10 border-t border-slate-100 mt-12">
          ${isLocked ? `
            <button type="button" id="btnVoltarInicioFooter"
              class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-150 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
              Voltar ao Início
            </button>
          ` : `
            <button type="button" id="btnCancelar"
              class="bg-slate-100 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition duration-150 shadow-sm">
              Cancelar
            </button>
            <button type="button" id="btnSalvarRascunho"
              class="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition duration-150 shadow-lg shadow-amber-100 transform hover:-translate-y-0.5">
              Salvar Rascunho
            </button>
            <button type="submit" id="btnEnviar"
              class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition duration-150 shadow-lg shadow-blue-200 transform hover:-translate-y-0.5">
              Enviar para Análise
            </button>
          `}
        </footer>

      </form>
    </div>
  `;

  const form = document.getElementById('coletaForm');

  // Preenche dados existentes se houver
  if (existingData) {
    Object.keys(existingData).forEach(key => {
      const field = form.elements[key];
      if (field) {
        if (field.type === 'checkbox') {
          field.checked = !!existingData[key];
        } else if (field.type !== 'file') {
          field.value = existingData[key];
        }
      }
    });
  }

  // Se o formulário estiver bloqueado (em análise ou deferido), desabilita tudo
  if (isLocked) {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(el => {
      el.disabled = true;
      if (el.tagName === 'INPUT' && el.type !== 'checkbox') {
        el.classList.add('bg-slate-50', 'text-slate-500', 'cursor-not-allowed');
      }
    });
    // Oculta área de anexo de arquivo
    const fileWrapper = form.querySelector('input[type="file"]').closest('.w-full.rounded-xl.border');
    if (fileWrapper) {
      fileWrapper.style.display = 'none';
    }
  }

  // Evento Navegar para Início
  document.getElementById('btnVoltarInicio').addEventListener('click', () => navigateTo('inicio'));
  
  if (isLocked) {
    document.getElementById('btnVoltarInicioFooter').addEventListener('click', () => navigateTo('inicio'));
  }

  // Evento Logout
  const btnLogout = document.getElementById('btnLogout');
  btnLogout.addEventListener('click', async () => {
    const res = await Swal.fire({
      title: 'Deseja sair?',
      text: 'Você será desconectado do sistema.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sair',
      cancelButtonText: 'Permanecer',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#94a3b8'
    });
    if (res.isConfirmed) {
      if (!isConfigured) {
        localStorage.removeItem('demo_user');
        localStorage.removeItem('demo_role');
        window.location.reload();
      } else {
        await logoutUser();
      }
    }
  });

  // Evento Painel Admin
  const btnIrAdmin = document.getElementById('btnIrAdmin');
  if (btnIrAdmin) {
    btnIrAdmin.addEventListener('click', () => navigateTo('admin'));
  }

  // Validação de arquivo no upload do Diploma
  const diplomaInput = document.getElementById('diploma');
  if (diplomaInput) {
    diplomaInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg'];

        if (!allowedTypes.includes(file.type)) {
          Swal.fire({
            icon: 'error',
            title: 'Formato não permitido',
            text: 'Por favor, selecione apenas arquivos PDF ou imagens JPG/JPEG.',
            confirmButtonColor: '#ef4444'
          });
          this.value = '';
          return;
        }

        if (file.size > maxSize) {
          Swal.fire({
            icon: 'error',
            title: 'Arquivo muito pesado',
            text: 'O tamanho máximo permitido é de 5MB. O seu arquivo possui ' + (file.size / (1024 * 1024)).toFixed(2) + 'MB.',
            confirmButtonColor: '#ef4444'
          });
          this.value = '';
        }
      }
    });
  }

  // Evento Cancelar
  const btnCancelar = document.getElementById('btnCancelar');
  if (btnCancelar) {
    btnCancelar.addEventListener('click', () => {
      Swal.fire({
        title: 'Deseja cancelar?',
        text: 'As informações não salvas serão perdidas.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, cancelar',
        cancelButtonText: 'Continuar preenchendo'
      }).then((result) => {
        if (result.isConfirmed) {
          navigateTo('inicio');
        }
      });
    });
  }

  // Função auxiliar para capturar dados e fazer upload de diploma
  const processFormData = async () => {
    const formDataObj = {};
    const fields = new FormData(form);
    for (const [key, value] of fields.entries()) {
      if (key !== 'diploma') {
        formDataObj[key] = value;
      }
    }
    formDataObj.e_docente = form.elements['e_docente'].checked;
    formDataObj.email = user.email.toLowerCase().trim(); // Garante o email correto
    formDataObj.lastUpdated = new Date().toISOString();

    // Upload do arquivo de diploma se houver
    const diplomaFile = diplomaInput ? diplomaInput.files[0] : null;
    let diplomaUrl = existingData?.diplomaUrl || '';

    if (diplomaFile) {
      if (isConfigured) {
        const fileRef = ref(storage, `diplomas/${user.email.replace(/[@.]/g, '_')}_${Date.now()}_${diplomaFile.name}`);
        await uploadBytes(fileRef, diplomaFile);
        diplomaUrl = await getDownloadURL(fileRef);
      } else {
        // No modo demo, simula a conversão/upload
        diplomaUrl = 'https://example.com/mock-diploma.pdf';
      }
    }

    formDataObj.diplomaUrl = diplomaUrl;
    return formDataObj;
  };

  // Evento Salvar Rascunho
  const btnSalvarRascunho = document.getElementById('btnSalvarRascunho');
  if (btnSalvarRascunho) {
    btnSalvarRascunho.addEventListener('click', async () => {
      if (isSaving) return;
      isSaving = true;

      Swal.fire({
        title: 'Salvando Rascunho...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

      try {
        const formDataObj = await processFormData();
        formDataObj.status = 'editando'; // Define o status como editando (rascunho)
        formDataObj.pendencias = pendencias; // Preserva pendências se houver

        if (isConfigured) {
          await setDoc(doc(db, 'coletas', user.email.toLowerCase().trim()), formDataObj);
        } else {
          localStorage.setItem(`demo_coleta_${user.email}`, JSON.stringify(formDataObj));
          const allDemoColetas = JSON.parse(localStorage.getItem('all_demo_coletas') || '{}');
          allDemoColetas[user.email] = formDataObj;
          localStorage.setItem('all_demo_coletas', JSON.stringify(allDemoColetas));
        }

        await Swal.fire({
          icon: 'success',
          title: 'Rascunho Salvo!',
          text: 'Seus dados foram guardados como rascunho. Você poderá continuar quando quiser.',
          confirmButtonColor: '#f59e0b'
        });

        navigateTo('inicio');

      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Ops! Ocorreu um erro',
          text: error.message || 'Erro ao salvar rascunho.',
          confirmButtonColor: '#ef4444'
        });
      } finally {
        isSaving = false;
      }
    });
  }

  // Evento Enviar para Análise (Submit)
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSaving) return;
      
      // Validação do Diploma (Obrigatório para submissão final)
      const diplomaUploaded = existingData?.diplomaUrl || (diplomaInput && diplomaInput.files[0]);
      if (!diplomaUploaded) {
        Swal.fire({
          icon: 'error',
          title: 'Diploma Ausente',
          text: 'Você precisa anexar o seu diploma para enviar o cadastro para análise.',
          confirmButtonColor: '#ef4444'
        });
        return;
      }

      const confirmSubmit = await Swal.fire({
        title: 'Deseja enviar?',
        text: 'Ao enviar para análise, o formulário será bloqueado e não poderá ser editado até a aprovação da administração.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, enviar',
        cancelButtonText: 'Revisar dados',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#94a3b8'
      });

      if (!confirmSubmit.isConfirmed) return;
      isSaving = true;

      Swal.fire({
        title: 'Enviando Cadastro...',
        text: 'Submetendo dados e arquivos para homologação.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

      try {
        const formDataObj = await processFormData();
        formDataObj.status = 'em_analise'; // Define status para em_analise
        formDataObj.pendencias = ''; // Limpa pendências anteriores ao reenviar

        if (isConfigured) {
          await setDoc(doc(db, 'coletas', user.email.toLowerCase().trim()), formDataObj);
        } else {
          localStorage.setItem(`demo_coleta_${user.email}`, JSON.stringify(formDataObj));
          const allDemoColetas = JSON.parse(localStorage.getItem('all_demo_coletas') || '{}');
          allDemoColetas[user.email] = formDataObj;
          localStorage.setItem('all_demo_coletas', JSON.stringify(allDemoColetas));
        }

        await Swal.fire({
          icon: 'success',
          title: 'Enviado para Análise!',
          text: 'Seus dados foram submetidos com sucesso. O LAMES analisará seu cadastro em breve.',
          confirmButtonColor: '#2563eb'
        });

        navigateTo('inicio');

      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Ops! Ocorreu um erro',
          text: error.message || 'Erro ao enviar cadastro.',
          confirmButtonColor: '#ef4444'
        });
      } finally {
        isSaving = false;
      }
    });
  }

  return {
    destroy: () => {}
  };
}
