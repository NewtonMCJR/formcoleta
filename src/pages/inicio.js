import Swal from 'sweetalert2';
import { doc, getDoc } from 'firebase/firestore';
import { db, isConfigured } from '../firebase';
import { logoutUser } from '../auth';
import { navigateTo } from '../router';

export async function renderInicio(container, user, role) {
  let status = 'nao_iniciado';
  let pendencias = '';
  let userData = null;

  // Carrega status e dados do usuário
  try {
    if (isConfigured) {
      const docRef = doc(db, 'coletas', user.email.toLowerCase().trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        userData = docSnap.data();
        status = userData.status || 'editando';
        pendencias = userData.pendencias || '';
      }
    } else {
      const saved = localStorage.getItem(`demo_coleta_${user.email}`);
      if (saved) {
        userData = JSON.parse(saved);
        status = userData.status || 'editando';
        pendencias = userData.pendencias || '';
      }
    }
  } catch (error) {
    console.error('Erro ao buscar status do cadastro:', error);
  }

  // Gera o HTML do card de status dinamicamente
  const getStatusCardHTML = () => {
    switch (status) {
      case 'editando':
        return `
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-amber-50/50 border border-amber-100 rounded-2xl">
            <div class="p-4 bg-amber-500 text-white rounded-full shadow-lg shadow-amber-100 mb-4 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span class="text-xs bg-amber-100 text-amber-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Rascunho</span>
            <h3 class="text-lg font-bold text-slate-800">Cadastro em Edição</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Você iniciou o preenchimento mas ainda não o enviou para homologação. Os dados salvos estão guardados com segurança.</p>
            <button id="btnAcaoForm" class="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-amber-200 transform hover:-translate-y-0.5">
              Continuar Preenchendo
            </button>
          </div>
        `;
      case 'em_analise':
        return `
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-blue-50/50 border border-blue-100 rounded-2xl">
            <div class="p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xs bg-blue-100 text-blue-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Em Análise</span>
            <h3 class="text-lg font-bold text-slate-800">Cadastro Enviado para Análise</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Seus dados foram enviados com sucesso e estão em fase de homologação pela equipe do LAMES. O formulário ficará bloqueado até a conclusão.</p>
            <button id="btnAcaoForm" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-blue-200 transform hover:-translate-y-0.5">
              Visualizar Formulário Enviado
            </button>
          </div>
        `;
      case 'deferido':
        return `
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-green-50/50 border border-green-100 rounded-2xl">
            <div class="p-4 bg-green-600 text-white rounded-full shadow-lg shadow-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xs bg-green-100 text-green-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Deferido (Aprovado)</span>
            <h3 class="text-lg font-bold text-slate-800">Homologação Concluída</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Seu cadastro foi revisado e aprovado no sistema de recursos humanos. Parabéns! Nenhuma ação adicional é solicitada no momento.</p>
            <button id="btnAcaoForm" class="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-green-200 transform hover:-translate-y-0.5">
              Visualizar Dados Homologados
            </button>
          </div>
        `;
      case 'indeferido':
        return `
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-red-50/50 border border-red-100 rounded-2xl">
            <div class="p-4 bg-red-500 text-white rounded-full shadow-lg shadow-red-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span class="text-xs bg-red-100 text-red-800 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Pendente (Indeferido)</span>
            <h3 class="text-lg font-bold text-slate-800">Necessita de Correções</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Identificamos pendências no preenchimento das suas informações. Veja a descrição abaixo para realizar as alterações necessárias:</p>
            
            <!-- Caixa de feedback de pendências -->
            <div class="w-full max-w-lg mt-4 p-4 bg-red-100/60 border border-red-200 text-left rounded-xl text-sm text-red-800 font-sans">
              <div class="font-bold flex items-center gap-1.5 text-red-950 mb-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                Instruções do Administrador:
              </div>
              <p class="whitespace-pre-line leading-relaxed">${pendencias || 'Nenhuma descrição detalhada fornecida. Por favor revise seus dados.'}</p>
            </div>

            <button id="btnAcaoForm" class="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-red-200 transform hover:-translate-y-0.5">
              Corrigir Formulário
            </button>
          </div>
        `;
      case 'nao_iniciado':
      default:
        return `
          <div class="flex flex-col items-center text-center p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <div class="p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-100 mb-4 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span class="text-xs bg-slate-200 text-slate-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Não Iniciado</span>
            <h3 class="text-lg font-bold text-slate-800">Preencher Formulário de Cadastro</h3>
            <p class="text-slate-500 text-sm max-w-md mt-2">Identificamos que você ainda não iniciou o preenchimento do formulário. Clique abaixo para iniciar o registro dos seus dados.</p>
            <button id="btnAcaoForm" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-150 shadow-md shadow-blue-200 transform hover:-translate-y-0.5">
              Começar Preenchimento
            </button>
          </div>
        `;
    }
  };

  container.innerHTML = `
    <!-- Top Nav Bar -->
    <div class="max-w-4xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
      <div class="flex items-center gap-3">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
        <span class="text-sm font-medium text-slate-600">Sessão ativa: <strong class="text-slate-800 font-bold">${user.email}</strong></span>
        <span class="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${role}</span>
      </div>
      <div class="flex items-center gap-3">
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
    <div class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
      
      <!-- Welcome Header -->
      <div class="mb-10 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Área do Colaborador LAMES</h1>
          <p class="text-slate-600 mt-1">Bem-vindo(a) ao sistema de coleta e atualização cadastral do laboratório.</p>
        </div>
        <div class="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 max-w-xs self-start md:self-auto">
          <div class="p-2 bg-blue-600 text-white rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="overflow-hidden">
            <h4 class="text-xs font-bold text-slate-800 truncate">${user.email}</h4>
            <p class="text-[10px] text-slate-500">Último acesso: Hoje</p>
          </div>
        </div>
      </div>

      <!-- Card de Status do Formulário -->
      <div class="space-y-6">
        <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Status de seu Cadastro
        </h2>
        
        ${getStatusCardHTML()}
      </div>

    </div>
  `;

  // Listener para navegar para o formulário
  document.getElementById('btnAcaoForm').addEventListener('click', () => {
    navigateTo('formulario');
  });

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

  return {
    destroy: () => {}
  };
}
