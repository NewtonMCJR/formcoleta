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
  let formacaoIndexCounter = 0;

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
      <div class="mb-8 p-6 bg-red-50 border border-red-200 rounded-3xl text-sm text-red-800 space-y-2 animate-pulse">
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

  // Gera o card de formação individual
  const createFormacaoCardHTML = (index, data = null) => {
    const isUndergrad = data?.e_graduacao || false;
    return `
      <div class="formacao-card bg-slate-50/50 p-6 rounded-2xl border border-slate-100 relative space-y-6" data-index="${index}">
        <!-- Botão Remover no canto superior direito -->
        ${!isLocked && index > 0 ? `
          <button type="button" class="btn-remover-formacao absolute top-4 right-4 text-red-500 hover:text-red-700 font-bold text-xs flex items-center gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remover
          </button>
        ` : ''}
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 pt-2">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Titulação / Nível</label>
            <input type="text" name="titulacao_${index}" required value="${data?.titulacao || ''}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Ex: Mestrado, Especialização, Graduação">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Local de Formação</label>
            <input type="text" name="local_formacao_${index}" required value="${data?.local_formacao || ''}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Nome da Instituição">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Ano de Conclusão / Previsão</label>
            <input type="number" name="ano_conclusao_${index}" required value="${data?.ano_conclusao || ''}"
              class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Ex: 2024">
          </div>
          
          <div class="flex items-center gap-3 pt-6">
            <input type="checkbox" id="e_graduacao_${index}" name="e_graduacao_${index}" class="chk-e-graduacao w-5 h-5 rounded border-slate-300 text-blue-700 focus:ring-blue-500" ${isUndergrad ? 'checked' : ''}>
            <label for="e_graduacao_${index}" class="text-base font-semibold text-slate-800">Graduação em Andamento?</label>
          </div>

          <!-- Inputs ocultos para carregar URLs de documentos salvos anteriormente -->
          <input type="hidden" name="diplomaUrl_${index}" value="${data?.diplomaUrl || ''}">
          <input type="hidden" name="historicoUrl_${index}" value="${data?.historicoUrl || ''}">
          <input type="hidden" name="matriculaUrl_${index}" value="${data?.matriculaUrl || ''}">

          <!-- Bloco de Diploma (exibido se não for graduação em andamento) -->
          <div class="block-diploma md:col-span-2 space-y-2 ${isUndergrad ? 'hidden' : ''}">
            <label class="block text-sm font-semibold text-slate-700">Anexar Diploma (PDF/JPG) ${data?.diplomaUrl ? '<span class="text-green-600 font-normal text-xs">(Já enviado)</span>' : ''}</label>
            <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
              <input type="file" name="diploma_${index}" accept=".pdf,.jpg,.jpeg"
                class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
            </div>
            ${data?.diplomaUrl ? `
              <a href="${data.diplomaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
            ` : ''}
          </div>

          <!-- Bloco de Graduação em Andamento (exibido se for graduação em andamento) -->
          <div class="block-graduacao md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 ${isUndergrad ? '' : 'hidden'}">
            <!-- Histórico Escolar -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Anexar Histórico Escolar (PDF/JPG) ${data?.historicoUrl ? '<span class="text-green-600 font-normal text-xs">(Já enviado)</span>' : ''}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" name="historico_${index}" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${data?.historicoUrl ? `
                <a href="${data.historicoUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
              ` : ''}
            </div>

            <!-- Comprovante de Matrícula -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Comprovante de Matrícula (PDF/JPG) ${data?.matriculaUrl ? '<span class="text-green-600 font-normal text-xs">(Já enviado)</span>' : ''}</label>
              <div class="w-full rounded-xl border border-slate-200 p-1.5 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                <input type="file" name="matricula_${index}" accept=".pdf,.jpg,.jpeg"
                  class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
              </div>
              ${data?.matriculaUrl ? `
                <a href="${data.matriculaUrl}" target="_blank" class="text-xs text-blue-600 hover:underline inline-block font-semibold">Visualizar arquivo atual</a>
              ` : ''}
            </div>
          </div>

        </div>
      </div>
    `;
  };

  container.innerHTML = `
    <!-- Top Nav Bar -->
    <div class="max-w-5xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão activa: <strong class="text-slate-800 font-bold">${user.email}</strong></span>
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
            
            <!-- CAMPO FOTO DE PERFIL -->
            <div class="md:col-span-2">
              <label for="foto" class="block text-sm font-semibold text-slate-700 mb-1.5">Foto de Perfil (PNG/JPG)</label>
              <div class="flex items-center gap-4">
                <div id="fotoPreviewContainer" class="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center flex-shrink-0 shadow-inner">
                  ${existingData?.fotoUrl ? `<img src="${existingData.fotoUrl}" class="w-full h-full object-cover">` : `
                    <svg class="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  `}
                </div>
                <div class="flex-1 rounded-xl border border-slate-200 p-1.5 bg-slate-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-150 ease-in-out">
                  <input type="file" id="foto" name="foto" accept=".png,.jpg,.jpeg"
                    class="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer">
                </div>
              </div>
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

        <!-- 4. Formação Acadêmica (Dinamizada) -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">4. Formação Acadêmica</h2>
          </div>
          
          <div id="formacoesContainer" class="space-y-6">
            <!-- Formações inseridas dinamicamente pelo JS -->
          </div>

          <button type="button" id="btnAdicionarFormacao" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-5 py-3 rounded-xl transition duration-150 flex items-center gap-1.5 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Adicionar Outra Formação
          </button>
        </section>

        <!-- 5. Cursos de Capacitação (Nova seção) -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 9a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">5. Cursos de Capacitação</h2>
          </div>

          <p class="text-sm text-slate-500">Selecione os cursos de capacitação que você possui concluídos ou em andamento:</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_biosseguranca" value="Biossegurança" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Biossegurança
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_bioprotecao" value="Bioproteção" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Bioproteção
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_brigadista" value="Brigadista" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Brigadista
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_microscopia" value="Microscopia" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Microscopia
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_solucoes" value="Preparo de soluções químicas" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Preparo de soluções químicas
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_processamento" value="Processamento histológico" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Processamento histológico
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_inclusao" value="Inclusão de tecidos em parafina" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Inclusão de tecidos em parafina
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_microtomia" value="Microtomia" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Microtomia
            </label>
            <label class="flex items-center gap-3 cursor-pointer text-sm font-semibold text-slate-700">
              <input type="checkbox" name="capacitacao_coloracoes" value="Colorações histológicas" class="chk-capacitacao w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500">
              Colorações histológicas
            </label>
          </div>

          <div class="space-y-2">
            <label for="outras_capacitacoes" class="block text-sm font-semibold text-slate-700">Outros Cursos / Informações Complementares</label>
            <textarea id="outras_capacitacoes" name="outras_capacitacoes" rows="3"
              class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-base"
              placeholder="Digite aqui outros cursos concluídos ou em andamento..."></textarea>
          </div>
        </section>

        <!-- 6. Informações do Coleta (antiga seção 5) -->
        <section class="space-y-6 bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <div class="flex items-center gap-3 border-b border-blue-100 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 class="text-2xl font-bold text-blue-900 tracking-tight">6. Informações do Coleta (Anual)</h2>
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
  const containerFormacoes = document.getElementById('formacoesContainer');

  // Renderização inicial das formações salvas
  const savedFormacoes = existingData?.formacoes || [];
  if (savedFormacoes.length > 0) {
    savedFormacoes.forEach((item, idx) => {
      containerFormacoes.insertAdjacentHTML('beforeend', createFormacaoCardHTML(idx, item));
      formacaoIndexCounter = idx + 1;
    });
  } else {
    containerFormacoes.insertAdjacentHTML('beforeend', createFormacaoCardHTML(0));
    formacaoIndexCounter = 1;
  }

  // Preenche dados do resto do formulário
  if (existingData) {
    Object.keys(existingData).forEach(key => {
      // Ignora os campos dinamizados/foto/capacitacoes
      if (key !== 'formacoes' && key !== 'foto' && key !== 'capacitacoes' && key !== 'outras_capacitacoes') {
        const field = form.elements[key];
        if (field) {
          if (field.type === 'checkbox') {
            field.checked = !!existingData[key];
          } else {
            field.value = existingData[key];
          }
        }
      }
    });

    // Preenche as capacitações (checkboxes)
    const savedCapacitacoes = existingData.capacitacoes || [];
    savedCapacitacoes.forEach(cap => {
      const chk = form.querySelector(`.chk-capacitacao[value="${cap}"]`);
      if (chk) chk.checked = true;
    });

    // Preenche outras capacitações
    const outrasCapField = form.querySelector('[name="outras_capacitacoes"]');
    if (outrasCapField && existingData.outras_capacitacoes) {
      outrasCapField.value = existingData.outras_capacitacoes;
    }
  }

  // Se o formulário estiver bloqueado (em análise ou deferido), desabilita todos os campos
  if (isLocked) {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(el => {
      el.disabled = true;
      if (el.tagName === 'INPUT' && el.type !== 'checkbox') {
        el.classList.add('bg-slate-50', 'text-slate-500', 'cursor-not-allowed');
      }
    });

    // Oculta área de anexo de arquivos dos cards de formação e foto
    const fileInputs = form.querySelectorAll('input[type="file"]');
    fileInputs.forEach(inp => {
      const container = inp.closest('.w-full.rounded-xl.border') || inp.closest('.flex-1.rounded-xl');
      if (container) container.style.display = 'none';
    });

    // Oculta o botão Adicionar Formação
    const btnAdicionar = document.getElementById('btnAdicionarFormacao');
    if (btnAdicionar) btnAdicionar.style.display = 'none';

    // Oculta os botões Remover Formação
    const btnRemoverList = form.querySelectorAll('.btn-remover-formacao');
    btnRemoverList.forEach(btn => btn.style.display = 'none');
  }

  // --- listeners de formações dinâmicas ---

  // Botão Adicionar outra formação
  const btnAdicionarFormacao = document.getElementById('btnAdicionarFormacao');
  if (btnAdicionarFormacao) {
    btnAdicionarFormacao.addEventListener('click', () => {
      containerFormacoes.insertAdjacentHTML('beforeend', createFormacaoCardHTML(formacaoIndexCounter));
      formacaoIndexCounter++;
    });
  }

  // Event delegation para remover formação
  containerFormacoes.addEventListener('click', (e) => {
    const btnRemover = e.target.closest('.btn-remover-formacao');
    if (btnRemover) {
      const card = btnRemover.closest('.formacao-card');
      card.remove();
    }
  });

  // Event delegation para alternar os blocos de Graduação vs Diploma
  containerFormacoes.addEventListener('change', (e) => {
    if (e.target.classList.contains('chk-e-graduacao')) {
      const card = e.target.closest('.formacao-card');
      const blockDiploma = card.querySelector('.block-diploma');
      const blockGraduacao = card.querySelector('.block-graduacao');
      if (e.target.checked) {
        blockDiploma.classList.add('hidden');
        blockGraduacao.classList.remove('hidden');
      } else {
        blockDiploma.classList.remove('hidden');
        blockGraduacao.classList.add('hidden');
      }
    }
  });

  // --- Validação genérica de tamanho/tipo de arquivos carregados ---
  form.addEventListener('change', (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      if (file) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        let allowedTypes = [];

        if (e.target.id === 'foto') {
          allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        } else {
          allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
        }

        if (!allowedTypes.includes(file.type)) {
          Swal.fire({
            icon: 'error',
            title: 'Formato não permitido',
            text: e.target.id === 'foto'
              ? 'Por favor, selecione apenas arquivos de imagem PNG ou JPG/JPEG para a foto.'
              : 'Por favor, selecione apenas arquivos PDF ou imagens JPG/PNG/JPEG.',
            confirmButtonColor: '#ef4444'
          });
          e.target.value = '';
          return;
        }

        if (file.size > maxSize) {
          Swal.fire({
            icon: 'error',
            title: 'Arquivo muito pesado',
            text: 'O tamanho máximo permitido é de 5MB. O seu arquivo possui ' + (file.size / (1024 * 1024)).toFixed(2) + 'MB.',
            confirmButtonColor: '#ef4444'
          });
          e.target.value = '';
        }
      }
    }
  });

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

  // Função auxiliar de upload de arquivo
  const uploadFile = async (file, path) => {
    if (isConfigured) {
      const fileRef = ref(storage, path);
      await uploadBytes(fileRef, file);
      return await getDownloadURL(fileRef);
    }
    return 'https://example.com/mock-file-upload.pdf';
  };

  // Função para processar todo o formulário (dados básicos + múltiplos uploads)
  const processFormData = async () => {
    const formDataObj = {};
    const fields = new FormData(form);

    // Salva os campos fixos da identificação, dados pessoais, saúde e coleta
    const ignoreKeys = ['foto', 'outras_capacitacoes', 'e_docente'];
    for (const [key, value] of fields.entries()) {
      // Ignora inputs dinamizados das formações
      if (!key.startsWith('titulacao_') && !key.startsWith('local_formacao_') && !key.startsWith('ano_conclusao_') && !key.startsWith('e_graduacao_') && !key.startsWith('diploma_') && !key.startsWith('historico_') && !key.startsWith('matricula_') && !key.startsWith('capacitacao_') && !ignoreKeys.includes(key)) {
        formDataObj[key] = value;
      }
    }

    formDataObj.e_docente = form.elements['e_docente'].checked;
    formDataObj.email = user.email.toLowerCase().trim(); // Garante o e-mail correto
    formDataObj.lastUpdated = new Date().toISOString();

    // 1. Processamento do Upload da Foto de Perfil
    const fotoInput = document.getElementById('foto');
    let fotoUrl = existingData?.fotoUrl || '';
    if (fotoInput && fotoInput.files[0]) {
      const ext = fotoInput.files[0].name.split('.').pop();
      fotoUrl = await uploadFile(fotoInput.files[0], `fotos/${user.email.replace(/[@.]/g, '_')}_foto_${Date.now()}.${ext}`);
    }
    formDataObj.fotoUrl = fotoUrl;

    // 2. Processamento dos checkboxes de Capacitações
    const checkedCapacitacoes = [];
    const chkList = form.querySelectorAll('.chk-capacitacao:checked');
    chkList.forEach(chk => checkedCapacitacoes.push(chk.value));
    formDataObj.capacitacoes = checkedCapacitacoes;
    formDataObj.outras_capacitacoes = form.querySelector('[name="outras_capacitacoes"]').value.trim();

    // 3. Processamento dinâmico da lista de Formações Acadêmicas
    const formacoes = [];
    const cards = containerFormacoes.querySelectorAll('.formacao-card');
    
    for (let card of cards) {
      const idx = card.getAttribute('data-index');
      
      const titulacao = card.querySelector(`[name="titulacao_${idx}"]`).value.trim();
      const localFormacao = card.querySelector(`[name="local_formacao_${idx}"]`).value.trim();
      const anoConclusao = card.querySelector(`[name="ano_conclusao_${idx}"]`).value.trim();
      const eGraduacao = card.querySelector(`[name="e_graduacao_${idx}"]`).checked;
      
      // URLs anteriormente salvas
      let diplomaUrl = card.querySelector(`[name="diplomaUrl_${idx}"]`).value || '';
      let historicoUrl = card.querySelector(`[name="historicoUrl_${idx}"]`).value || '';
      let matriculaUrl = card.querySelector(`[name="matriculaUrl_${idx}"]`).value || '';

      // Arquivos selecionados no input atual
      const fileDiploma = card.querySelector(`[name="diploma_${idx}"]`)?.files[0];
      const fileHistorico = card.querySelector(`[name="historico_${idx}"]`)?.files[0];
      const fileMatricula = card.querySelector(`[name="matricula_${idx}"]`)?.files[0];

      if (eGraduacao) {
        // Se for graduação em andamento, faz upload de histórico e matrícula
        if (fileHistorico) {
          const ext = fileHistorico.name.split('.').pop();
          historicoUrl = await uploadFile(fileHistorico, `historicos/${user.email.replace(/[@.]/g, '_')}_historico_${idx}_${Date.now()}.${ext}`);
        }
        if (fileMatricula) {
          const ext = fileMatricula.name.split('.').pop();
          matriculaUrl = await uploadFile(fileMatricula, `matriculas/${user.email.replace(/[@.]/g, '_')}_matricula_${idx}_${Date.now()}.${ext}`);
        }
        diplomaUrl = ''; // Limpa diploma para curso em andamento
      } else {
        // Se já concluído, faz upload de diploma
        if (fileDiploma) {
          const ext = fileDiploma.name.split('.').pop();
          diplomaUrl = await uploadFile(fileDiploma, `diplomas/${user.email.replace(/[@.]/g, '_')}_diploma_${idx}_${Date.now()}.${ext}`);
        }
        historicoUrl = '';
        matriculaUrl = '';
      }

      formacoes.push({
        titulacao,
        local_formacao: localFormacao,
        ano_conclusao: anoConclusao,
        e_graduacao: eGraduacao,
        diplomaUrl,
        historicoUrl,
        matriculaUrl
      });
    }

    formDataObj.formacoes = formacoes;
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
        text: 'Gravando informações e arquivos.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

      try {
        const formDataObj = await processFormData();
        formDataObj.status = 'editando'; // Define o status como rascunho
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
          text: 'Seus dados foram guardados como rascunho com sucesso.',
          confirmButtonColor: '#f59e0b'
        });

        navigateTo('inicio');

      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao Salvar',
          text: error.message || 'Houve um erro no salvamento do rascunho.',
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

      // Validação estrita de documentos obrigatórios antes de enviar
      const cards = containerFormacoes.querySelectorAll('.formacao-card');
      let docsMissing = false;

      for (let card of cards) {
        const idx = card.getAttribute('data-index');
        const eGraduacao = card.querySelector(`[name="e_graduacao_${idx}"]`).checked;
        
        const hasDiploma = card.querySelector(`[name="diplomaUrl_${idx}"]`).value || card.querySelector(`[name="diploma_${idx}"]`)?.files[0];
        const hasHistorico = card.querySelector(`[name="historicoUrl_${idx}"]`).value || card.querySelector(`[name="historico_${idx}"]`)?.files[0];
        const hasMatricula = card.querySelector(`[name="matriculaUrl_${idx}"]`).value || card.querySelector(`[name="matricula_${idx}"]`)?.files[0];

        if (eGraduacao) {
          if (!hasHistorico || !hasMatricula) {
            docsMissing = true;
            break;
          }
        } else {
          if (!hasDiploma) {
            docsMissing = true;
            break;
          }
        }
      }

      if (docsMissing) {
        Swal.fire({
          icon: 'error',
          title: 'Documentos Pendentes',
          text: 'Você precisa anexar os documentos exigidos para todas as suas formações acadêmicas (Diploma para concluídos, ou Histórico + Comprovante de Matrícula para graduações em andamento) antes de enviar para análise.',
          confirmButtonColor: '#ef4444'
        });
        return;
      }

      const confirmSubmit = await Swal.fire({
        title: 'Deseja enviar?',
        text: 'O formulário será bloqueado para edição até que a administração conclua a revisão.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, enviar',
        cancelButtonText: 'Revisar',
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
          title: 'Enviado com sucesso!',
          text: 'Seu formulário está em fase de análise pela equipe do LAMES.',
          confirmButtonColor: '#2563eb'
        });

        navigateTo('inicio');

      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao Enviar',
          text: error.message || 'Houve um erro ao submeter seu formulário.',
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
