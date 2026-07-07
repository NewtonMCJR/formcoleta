import Swal from 'sweetalert2';
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { db, isConfigured } from '../firebase';
import { logoutUser } from '../auth';
import { navigateTo } from '../router';

export async function renderAdmin(container, user, role) {
  let activeTab = 'registros'; // 'registros', 'whitelist' ou 'usuarios'
  let searchWord = '';
  let filterType = '';
  let filterStatus = ''; // Filtro por status
  
  let searchUserEmail = ''; // Filtro de busca na aba de usuários
  let filterUserRole = '';  // Filtro de perfil na aba de usuários
  
  let registrosList = [];
  let whitelistList = [];
  let usuariosList = []; // Nova lista para os usuários cadastrados no Auth/sistema

  // Inicializa dados fictícios de demonstração no localStorage se vazios
  if (!localStorage.getItem('demo_whitelist')) {
    localStorage.setItem('demo_whitelist', JSON.stringify({
      'admin@lames.org': { email: 'admin@lames.org', role: 'admin' },
      'colab@lames.org': { email: 'colab@lames.org', role: 'colaborador' }
    }));
  }
  if (!localStorage.getItem('all_demo_coletas')) {
    localStorage.setItem('all_demo_coletas', JSON.stringify({
      'colab@lames.org': {
        nome_completo: 'Antônio da Silva',
        tipo_integrante: 'bolsista',
        cpf: '111.222.333-44',
        rg: 'MG-12.345.678',
        endereco: 'Rua das Flores, 123, Rio de Janeiro - RJ',
        email: 'colab@lames.org',
        telefone: '(21) 98888-7777',
        grupo_sanguineo: 'O+',
        alergias: 'Nenhuma',
        contato_emergencia: 'Maria (Mãe) - (21) 99999-8888',
        titulacao: 'Mestre',
        local_formacao: 'FIOCRUZ',
        ano_conclusao: '2023',
        diplomaUrl: 'https://example.com/mock-diploma.pdf',
        vinculo: 'Bolsista de Mestrado',
        prazo_vinculo: '24 meses',
        origem_vinculo: 'CNPq',
        cargo_nivel: 'Nível I',
        situacao_atual: 'Ativo',
        e_docente: false,
        orientador: 'Dr. João Medeiros',
        status: 'em_analise',
        pendencias: '',
        lastUpdated: new Date().toISOString()
      }
    }));
  }
  if (!localStorage.getItem('all_demo_usuarios')) {
    localStorage.setItem('all_demo_usuarios', JSON.stringify({
      'admin@lames.org': { email: 'admin@lames.org', role: 'admin', lastAccess: new Date().toISOString() },
      'colab@lames.org': { email: 'colab@lames.org', role: 'colaborador', lastAccess: new Date().toISOString() }
    }));
  }

  // Carrega registros, whitelist e usuários logados
  const fetchData = async () => {
    if (isConfigured) {
      // Firebase - Coleção de Coletas
      try {
        const regSnap = await getDocs(collection(db, 'coletas'));
        registrosList = regSnap.docs.map(doc => doc.data());
      } catch (err) {
        console.error('Erro ao buscar coletas:', err);
      }

      // Firebase - Coleção de Whitelist
      try {
        const wlSnap = await getDocs(collection(db, 'whitelist'));
        whitelistList = wlSnap.docs.map(doc => doc.data());
      } catch (err) {
        console.error('Erro ao buscar whitelist:', err);
      }

      // Firebase - Coleção de Usuários Registrados
      try {
        const usrSnap = await getDocs(collection(db, 'usuarios'));
        usuariosList = usrSnap.docs.map(doc => doc.data());
      } catch (err) {
        console.error('Erro ao buscar usuários registrados:', err);
      }
    } else {
      // Demo Mode
      const savedWL = JSON.parse(localStorage.getItem('demo_whitelist') || '{}');
      whitelistList = Object.values(savedWL);

      const savedReg = JSON.parse(localStorage.getItem('all_demo_coletas') || '{}');
      registrosList = Object.values(savedReg);

      const savedUsr = JSON.parse(localStorage.getItem('all_demo_usuarios') || '{}');
      usuariosList = Object.values(savedUsr);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'deferido':
        return `<span class="bg-green-50 text-green-700 border border-green-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Deferido</span>`;
      case 'indeferido':
        return `<span class="bg-red-50 text-red-700 border border-red-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Indeferido</span>`;
      case 'em_analise':
        return `<span class="bg-blue-50 text-blue-700 border border-blue-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">Em Análise</span>`;
      case 'editando':
      default:
        return `<span class="bg-amber-50 text-amber-700 border border-amber-100 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Rascunho</span>`;
    }
  };

  const renderUI = () => {
    container.innerHTML = `
      <!-- Top Nav Bar -->
      <div class="max-w-6xl mx-auto mb-6 flex justify-between items-center bg-white p-4 px-6 rounded-2xl shadow-sm border border-slate-100">
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span class="text-sm font-medium text-slate-600">Administrador: <strong class="text-slate-800 font-bold">${user.email}</strong></span>
          <span class="text-xs bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full font-semibold capitalize">${role}</span>
        </div>
        <div class="flex items-center gap-3">
          <button id="btnVoltarInicio" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Início
          </button>
          <button id="btnPreencherForm" class="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Preencher Formulário
          </button>
          <button id="btnLogout" class="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold text-sm px-4 py-2 rounded-xl transition duration-150 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sair
          </button>
        </div>
      </div>

      <!-- Main Panel Container -->
      <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        <!-- Header & Tabs -->
        <div class="bg-slate-50 border-b border-slate-100 p-6 pb-0">
          <div class="mb-4">
            <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">Painel de Administração LAMES</h1>
            <p class="text-slate-500 text-sm mt-0.5">Gerencie os acessos ao sistema e visualize as respostas do formulário de coleta.</p>
          </div>
          
          <div class="flex gap-2">
            <button id="tabRegistros" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${activeTab === 'registros' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}">
              Registros Coleta (${registrosList.length})
            </button>
            <button id="tabWhitelist" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${activeTab === 'whitelist' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}">
              Gerenciar Acessos (${whitelistList.length})
            </button>
            <button id="tabUsuarios" class="px-5 py-3 font-bold text-sm border-b-2 transition duration-150 ${activeTab === 'usuarios' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}">
              Usuários Registrados (${usuariosList.length})
            </button>
          </div>
        </div>

        <div class="p-8">
          ${activeTab === 'registros' ? renderRegistrosTab() : ''}
          ${activeTab === 'whitelist' ? renderWhitelistTab() : ''}
          ${activeTab === 'usuarios' ? renderUsuariosTab() : ''}
        </div>
      </div>
    `;

    // Listeners gerais
    document.getElementById('btnVoltarInicio').addEventListener('click', () => navigateTo('inicio'));
    document.getElementById('btnPreencherForm').addEventListener('click', () => navigateTo('formulario'));
    document.getElementById('btnLogout').addEventListener('click', async () => {
      const res = await Swal.fire({
        title: 'Deseja sair?',
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

    document.getElementById('tabRegistros').addEventListener('click', () => {
      activeTab = 'registros';
      renderUI();
    });

    document.getElementById('tabWhitelist').addEventListener('click', () => {
      activeTab = 'whitelist';
      renderUI();
    });

    document.getElementById('tabUsuarios').addEventListener('click', () => {
      activeTab = 'usuarios';
      renderUI();
    });

    setupTabSpecificEvents();
  };

  const renderRegistrosTab = () => {
    // Aplica filtros nos registros
    const filtered = registrosList.filter(reg => {
      const name = (reg.nome_completo || '').toLowerCase();
      const email = (reg.email || '').toLowerCase();
      const matchWord = name.includes(searchWord.toLowerCase()) || email.includes(searchWord.toLowerCase());
      const matchType = filterType === '' || reg.tipo_integrante === filterType;
      const regStatus = reg.status || 'editando';
      const matchStatus = filterStatus === '' || regStatus === filterStatus;
      return matchWord && matchType && matchStatus;
    });

    return `
      <!-- Filters bar -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input type="text" id="searchBar" value="${searchWord}" placeholder="Buscar por nome ou e-mail..."
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
        </div>
        <div class="w-full md:w-56">
          <select id="filterTypeSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Integrantes</option>
            <option value="servidor" ${filterType === 'servidor' ? 'selected' : ''}>Servidor</option>
            <option value="aluno_interno" ${filterType === 'aluno_interno' ? 'selected' : ''}>Aluno Interno</option>
            <option value="aluno_externo" ${filterType === 'aluno_externo' ? 'selected' : ''}>Aluno Externo</option>
            <option value="bolsista" ${filterType === 'bolsista' ? 'selected' : ''}>Bolsista</option>
            <option value="terceirizado" ${filterType === 'terceirizado' ? 'selected' : ''}>Terceirizado</option>
          </select>
        </div>
        <div class="w-full md:w-52">
          <select id="filterStatusSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Status</option>
            <option value="editando" ${filterStatus === 'editando' ? 'selected' : ''}>Rascunho</option>
            <option value="em_analise" ${filterStatus === 'em_analise' ? 'selected' : ''}>Em Análise</option>
            <option value="deferido" ${filterStatus === 'deferido' ? 'selected' : ''}>Deferido</option>
            <option value="indeferido" ${filterStatus === 'indeferido' ? 'selected' : ''}>Indeferido</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
              <th class="p-4 px-6">Nome Completo</th>
              <th class="p-4 px-6">E-mail</th>
              <th class="p-4 px-6">Integrante</th>
              <th class="p-4 px-6 text-center">Status</th>
              <th class="p-4 px-6">Atualizado em</th>
              <th class="p-4 px-6 text-right">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${filtered.length === 0 ? `
              <tr>
                <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
              </tr>
            ` : filtered.map(reg => `
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-bold text-slate-900">${reg.nome_completo || 'Não informado'}</td>
                <td class="p-4 px-6 font-mono text-xs">${reg.email}</td>
                <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${reg.tipo_integrante || '-'}</span></td>
                <td class="p-4 px-6 text-center">${getStatusBadge(reg.status)}</td>
                <td class="p-4 px-6 text-slate-500 text-xs">${reg.lastUpdated ? new Date(reg.lastUpdated).toLocaleString('pt-BR') : '-'}</td>
                <td class="p-4 px-6 text-right">
                  <button data-email="${reg.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                    Ver Ficha
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  const renderWhitelistTab = () => {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left: Form to add to whitelist -->
        <div class="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
          <h3 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Autorizar Novo Usuário
          </h3>
          <form id="addWhitelistForm" class="space-y-4">
            <div>
              <label for="wlEmail" class="block text-xs font-semibold text-slate-600 mb-1">E-mail do Colaborador</label>
              <input type="email" id="wlEmail" required placeholder="colaborador@lames.org"
                class="w-full rounded-xl border border-slate-200 p-3 bg-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            </div>
            <div>
              <label for="wlRole" class="block text-xs font-semibold text-slate-600 mb-1">Perfil de Acesso</label>
              <select id="wlRole" required
                class="w-full rounded-xl border border-slate-200 p-3 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
                <option value="colaborador">Colaborador (Apenas envia form)</option>
                <option value="admin">Administrador (Acesso total)</option>
              </select>
            </div>
            <button type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-150 shadow-md shadow-blue-100 mt-2">
              Adicionar E-mail
            </button>
          </form>
        </div>

        <!-- Right: Whitelist Table -->
        <div class="lg:col-span-2">
          <h3 class="font-bold text-slate-800 text-base mb-4 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            E-mails Habilitados no Sistema
          </h3>
          <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                  <th class="p-4 px-6">E-mail Autorizado</th>
                  <th class="p-4 px-6">Perfil</th>
                  <th class="p-4 px-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${whitelistList.length === 0 ? `
                  <tr>
                    <td colspan="3" class="text-center p-8 text-slate-400">Nenhum e-mail autorizado cadastrado.</td>
                  </tr>
                ` : whitelistList.map(item => `
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${item.email}</td>
                    <td class="p-4 px-6">
                      <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${item.role === 'admin' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}">
                        ${item.role === 'admin' ? 'Administrador' : 'Colaborador'}
                      </span>
                    </td>
                    <td class="p-4 px-6 text-right">
                      <button data-email="${item.email}" class="btnRemoverWL text-red-600 hover:text-red-700 font-bold text-xs hover:underline focus:outline-none transition duration-150">
                        Remover
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;
  };

  const renderUsuariosTab = () => {
    // Filtra lista de acessos
    const filteredUsers = usuariosList.filter(u => {
      const email = (u.email || '').toLowerCase();
      const matchEmail = email.includes(searchUserEmail.toLowerCase());
      const matchRole = filterUserRole === '' || u.role === filterUserRole;
      return matchEmail && matchRole;
    });

    return `
      <!-- Filters bar -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex-1">
          <input type="text" id="searchUserEmail" value="${searchUserEmail}" placeholder="Buscar e-mail..."
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
        </div>
        <div class="w-full md:w-64">
          <select id="filterUserRoleSelect"
            class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 text-sm">
            <option value="">Todos os Perfis</option>
            <option value="colaborador" ${filterUserRole === 'colaborador' ? 'selected' : ''}>Colaborador</option>
            <option value="admin" ${filterUserRole === 'admin' ? 'selected' : ''}>Administrador</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
              <th class="p-4 px-6">E-mail Cadastrado</th>
              <th class="p-4 px-6">Perfil</th>
              <th class="p-4 px-6">Último Acesso no Sistema</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${filteredUsers.length === 0 ? `
              <tr>
                <td colspan="3" class="text-center p-12 text-slate-400">Nenhum usuário cadastrado fez login ainda.</td>
              </tr>
            ` : filteredUsers.map(u => `
              <tr class="hover:bg-slate-50/50 transition">
                <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${u.email}</td>
                <td class="p-4 px-6">
                  <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${u.role === 'admin' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}">
                    ${u.role === 'admin' ? 'Administrador' : 'Colaborador'}
                  </span>
                </td>
                <td class="p-4 px-6 text-slate-500 font-medium">
                  ${u.lastAccess ? new Date(u.lastAccess).toLocaleString('pt-BR') : '-'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  const setupTabSpecificEvents = () => {
    if (activeTab === 'registros') {
      // Input de busca
      const searchBar = document.getElementById('searchBar');
      searchBar.addEventListener('input', (e) => {
        searchWord = e.target.value;
        container.querySelector('tbody').outerHTML = getNewTableBody();
        bindDetailButtons();
      });

      // Filtro por tipo
      const filterSelect = document.getElementById('filterTypeSelect');
      filterSelect.addEventListener('change', (e) => {
        filterType = e.target.value;
        container.querySelector('tbody').outerHTML = getNewTableBody();
        bindDetailButtons();
      });

      // Filtro por status
      const filterStatusSelect = document.getElementById('filterStatusSelect');
      filterStatusSelect.addEventListener('change', (e) => {
        filterStatus = e.target.value;
        container.querySelector('tbody').outerHTML = getNewTableBody();
        bindDetailButtons();
      });

      bindDetailButtons();

    } else if (activeTab === 'whitelist') {
      // Form de Adicionar
      const addForm = document.getElementById('addWhitelistForm');
      addForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('wlEmail');
        const roleSelect = document.getElementById('wlRole');

        const newEmail = emailInput.value.toLowerCase().trim();
        const newRole = roleSelect.value;

        Swal.fire({
          title: 'Adicionando e-mail...',
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading()
        });

        try {
          if (isConfigured) {
            await setDoc(doc(db, 'whitelist', newEmail), { email: newEmail, role: newRole });
          } else {
            const savedWL = JSON.parse(localStorage.getItem('demo_whitelist') || '{}');
            savedWL[newEmail] = { email: newEmail, role: newRole };
            localStorage.setItem('demo_whitelist', JSON.stringify(savedWL));
          }

          await fetchData();
          Swal.fire({
            icon: 'success',
            title: 'Autorizado!',
            text: `O e-mail ${newEmail} foi autorizado como ${newRole}.`,
            confirmButtonColor: '#2563eb'
          });
          renderUI();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Ops! Ocorreu um erro',
            text: error.message || 'Erro ao gravar informações.',
            confirmButtonColor: '#ef4444'
          });
        }
      });

      // Botões de Remover da Whitelist
      const removeButtons = container.querySelectorAll('.btnRemoverWL');
      removeButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const email = e.target.getAttribute('data-email');

          if (email === user.email.toLowerCase()) {
            Swal.fire({
              icon: 'warning',
              title: 'Ação Bloqueada',
              text: 'Você não pode remover o seu próprio e-mail da whitelist.',
              confirmButtonColor: '#ef4444'
            });
            return;
          }

          const res = await Swal.fire({
            title: 'Deseja revogar o acesso?',
            text: `O e-mail ${email} não poderá mais fazer login no sistema.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Revogar Acesso',
            cancelButtonText: 'Manter',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#94a3b8'
          });

          if (res.isConfirmed) {
            Swal.fire({
              title: 'Removendo...',
              allowOutsideClick: false,
              didOpen: () => Swal.showLoading()
            });

            try {
              if (isConfigured) {
                await deleteDoc(doc(db, 'whitelist', email));
              } else {
                const savedWL = JSON.parse(localStorage.getItem('demo_whitelist') || '{}');
                delete savedWL[email];
                localStorage.setItem('demo_whitelist', JSON.stringify(savedWL));
              }

              await fetchData();
              Swal.fire({
                icon: 'success',
                title: 'Acesso Revogado!',
                text: `O e-mail ${email} foi removido da whitelist.`,
                confirmButtonColor: '#2563eb'
              });
              renderUI();
            } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Ops! Ocorreu um erro',
                text: error.message || 'Erro ao remover acesso.',
                confirmButtonColor: '#ef4444'
              });
            }
          }
        });
      });
    } else if (activeTab === 'usuarios') {
      // Evento de busca de usuários por e-mail
      const searchUserBar = document.getElementById('searchUserEmail');
      searchUserBar.addEventListener('input', (e) => {
        searchUserEmail = e.target.value;
        container.querySelector('tbody').outerHTML = getNewUsersTableBody();
      });

      // Evento de filtro de usuários por perfil
      const filterUserRoleSelect = document.getElementById('filterUserRoleSelect');
      filterUserRoleSelect.addEventListener('change', (e) => {
        filterUserRole = e.target.value;
        container.querySelector('tbody').outerHTML = getNewUsersTableBody();
      });
    }
  };

  const getNewUsersTableBody = () => {
    const filteredUsers = usuariosList.filter(u => {
      const email = (u.email || '').toLowerCase();
      const matchEmail = email.includes(searchUserEmail.toLowerCase());
      const matchRole = filterUserRole === '' || u.role === filterUserRole;
      return matchEmail && matchRole;
    });

    return `
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${filteredUsers.length === 0 ? `
          <tr>
            <td colspan="3" class="text-center p-12 text-slate-400">Nenhum usuário cadastrado encontrado.</td>
          </tr>
        ` : filteredUsers.map(u => `
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-mono text-xs text-slate-900 font-bold">${u.email}</td>
            <td class="p-4 px-6">
              <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${u.role === 'admin' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}">
                ${u.role === 'admin' ? 'Administrador' : 'Colaborador'}
              </span>
            </td>
            <td class="p-4 px-6 text-slate-500 font-medium">
              ${u.lastAccess ? new Date(u.lastAccess).toLocaleString('pt-BR') : '-'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;
  };

  const getNewTableBody = () => {
    const filtered = registrosList.filter(reg => {
      const name = (reg.nome_completo || '').toLowerCase();
      const email = (reg.email || '').toLowerCase();
      const matchWord = name.includes(searchWord.toLowerCase()) || email.includes(searchWord.toLowerCase());
      const matchType = filterType === '' || reg.tipo_integrante === filterType;
      const regStatus = reg.status || 'editando';
      const matchStatus = filterStatus === '' || regStatus === filterStatus;
      return matchWord && matchType && matchStatus;
    });

    return `
      <tbody class="divide-y divide-slate-100 text-slate-700">
        ${filtered.length === 0 ? `
          <tr>
            <td colspan="6" class="text-center p-12 text-slate-400">Nenhum registro encontrado.</td>
          </tr>
        ` : filtered.map(reg => `
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 px-6 font-bold text-slate-900">${reg.nome_completo || 'Não informado'}</td>
            <td class="p-4 px-6 font-mono text-xs">${reg.email}</td>
            <td class="p-4 px-6"><span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full capitalize">${reg.tipo_integrante || '-'}</span></td>
            <td class="p-4 px-6 text-center">${getStatusBadge(reg.status)}</td>
            <td class="p-4 px-6 text-slate-500 text-xs">${reg.lastUpdated ? new Date(reg.lastUpdated).toLocaleString('pt-BR') : '-'}</td>
            <td class="p-4 px-6 text-right">
              <button data-email="${reg.email}" class="btnVerDetalhes bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition duration-150">
                Ver Ficha
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;
  };

  const bindDetailButtons = () => {
    const detailButtons = container.querySelectorAll('.btnVerDetalhes');
    detailButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const email = e.target.getAttribute('data-email');
        const reg = registrosList.find(r => r.email === email);
        if (reg) {
          showDetailModal(reg);
        }
      });
    });
  };

  const updateRegistroStatus = async (colabEmail, newStatus, currentReg, pendenciasText = '') => {
    Swal.fire({
      title: 'Atualizando cadastro...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const updatedReg = { 
        ...currentReg, 
        status: newStatus, 
        pendencias: pendenciasText,
        lastUpdated: new Date().toISOString()
      };

      if (isConfigured) {
        await setDoc(doc(db, 'coletas', colabEmail), updatedReg);
      } else {
        const savedReg = JSON.parse(localStorage.getItem('all_demo_coletas') || '{}');
        savedReg[colabEmail] = updatedReg;
        localStorage.setItem('all_demo_coletas', JSON.stringify(savedReg));
        
        // Atualiza a cópia local do formulário para o colaborador no modo demo
        localStorage.setItem(`demo_coleta_${colabEmail}`, JSON.stringify(updatedReg));
      }

      await fetchData();
      
      await Swal.fire({
        icon: 'success',
        title: 'Status Atualizado!',
        text: `O cadastro de ${updatedReg.nome_completo || colabEmail} foi definido como ${newStatus.toUpperCase()}.`,
        confirmButtonColor: '#2563eb'
      });
      
      renderUI();

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Ops! Ocorreu um erro',
        text: error.message || 'Erro ao alterar status.',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  const generatePDF = async (reg) => {
    if (!window.html2pdf) {
      throw new Error('Biblioteca html2pdf.js não encontrada. Recarregue a página.');
    }

    // Mapeamento de formações para o PDF
    let formacoesPDFHTML = '';
    if (reg.formacoes && Array.isArray(reg.formacoes) && reg.formacoes.length > 0) {
      formacoesPDFHTML = reg.formacoes.map((formacao, idx) => `
        <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px; font-size: 11px; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px;">
            <b style="color: #0f172a; font-family: sans-serif;"># ${idx + 1} - ${formacao.titulacao || '-'}</b>
            <span style="font-weight: bold; font-family: sans-serif; font-size: 10px; color: ${formacao.e_graduacao ? '#b45309' : '#15803d'};">
              ${formacao.e_graduacao ? 'Graduação em Andamento' : 'Concluído'}
            </span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-family: sans-serif;">
            <div><b style="color: #64748b;">Local:</b> <span style="color: #334155;">${formacao.local_formacao || '-'}</span></div>
            <div><b style="color: #64748b;">Conclusão/Previsão:</b> <span style="color: #334155;">${formacao.ano_conclusao || '-'}</span></div>
          </div>
        </div>
      `).join('');
    } else {
      formacoesPDFHTML = `
        <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 11px; font-family: sans-serif;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
            <div><b style="color: #64748b;">Titulação Máxima:</b> <span style="color: #334155;">${reg.titulacao || '-'}</span></div>
            <div><b style="color: #64748b;">Local:</b> <span style="color: #334155;">${reg.local_formacao || '-'}</span></div>
            <div><b style="color: #64748b;">Ano de Conclusão:</b> <span style="color: #334155;">${reg.ano_conclusao || '-'}</span></div>
          </div>
        </div>
      `;
    }

    // Mapeamento de capacitações para o PDF
    const capacitacoesPDFList = (reg.capacitacoes || []).map(cap => `
      <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; border: 1px solid #dbeafe; padding: 2px 8px; border-radius: 9999px; font-size: 10px; font-weight: bold; margin-right: 4px; margin-bottom: 4px; font-family: sans-serif;">
        ${cap}
      </span>
    `).join('') || '<span style="color: #94a3b8; font-size: 11px; font-family: sans-serif;">Nenhum curso selecionado</span>';

    // Cria contêiner temporário
    const printContainer = document.createElement('div');
    printContainer.style.position = 'fixed';
    printContainer.style.left = '0';
    printContainer.style.top = '0';
    printContainer.style.opacity = '0';
    printContainer.style.zIndex = '-9999';
    printContainer.style.pointerEvents = 'none';
    printContainer.style.width = '175mm'; // Ajuste fino para margens A4
    printContainer.style.boxSizing = 'border-box';
    printContainer.style.backgroundColor = '#ffffff';

    printContainer.innerHTML = `
      <div style="padding: 15px; color: #1e293b; font-family: sans-serif; line-height: 1.5;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 20px;">
          <div>
            <h1 style="margin: 0; font-size: 18px; font-weight: 800; color: #0f172a; text-transform: uppercase;">Laboratório de Patologia</h1>
            <p style="margin: 2px 0 0 0; font-size: 11px; color: #64748b; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">LAMES - Ficha Cadastral</p>
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <p style="margin: 0;"><b>Gerado em:</b> ${new Date().toLocaleDateString('pt-BR')}</p>
            <p style="margin: 2px 0 0 0;">Sistema de Coleta LAMES</p>
          </div>
        </div>

        <!-- Foto de Perfil e Título Principal -->
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
          <div>
            <h2 style="margin: 0; font-size: 14px; font-weight: 800; color: #0f172a;">FICHA CADASTRAL DE COLABORADOR</h2>
            <p style="margin: 4px 0 0 0; font-size: 10px; color: #64748b; font-family: monospace;">E-mail: ${reg.email}</p>
            <p style="margin: 2px 0 0 0; font-size: 10px; color: #64748b;">Status: <b style="text-transform: uppercase; color: #2563eb;">${(reg.status || 'rascunho').replace('_', ' ')}</b></p>
          </div>
          <div style="width: 70px; height: 70px; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; background-color: #f8fafc; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            ${reg.fotoUrl ? `<img src="${reg.fotoUrl}" style="width: 100%; height: 100%; object-fit: cover;" crossOrigin="anonymous">` : `
              <svg style="width: 35px; height: 35px; color: #cbd5e1;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            `}
          </div>
        </div>

        <!-- 1. Identificação -->
        <div style="margin-bottom: 18px;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">1. Identificação e Contato</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Nome Completo:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${reg.nome_completo || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Tipo de Integrante:</td>
                <td style="padding: 4px 0; color: #0f172a; text-transform: capitalize;">${reg.tipo_integrante || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">CPF:</td>
                <td style="padding: 4px 0; color: #0f172a; font-family: monospace;">${reg.cpf || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">RG:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.rg || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Endereço Residencial:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.endereco || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Telefone de Contato:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.telefone || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 2. Saúde e Emergência -->
        <div style="margin-bottom: 18px;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">2. Saúde e Emergência</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Grupo Sanguíneo:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${reg.grupo_sanguineo || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Alergias:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.alergias || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Contato de Emergência:</td>
                <td style="padding: 4px 0; color: #0f172a; font-weight: bold;">${reg.contato_emergencia || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 3. Formação Acadêmica -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">3. Formação Acadêmica</h3>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${formacoesPDFHTML}
          </div>
        </div>

        <!-- 4. Cursos de Capacitação -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">4. Cursos de Capacitação</h3>
          <div style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 10px;">
            <div style="margin-bottom: 6px;">
              ${capacitacoesPDFList}
            </div>
            ${reg.outras_capacitacoes ? `
              <div style="border-top: 1px solid #e2e8f0; padding-top: 6px; margin-top: 6px;">
                <b style="color: #64748b; display: block; margin-bottom: 2px;">Outros cursos e informações:</b>
                <p style="margin: 0; color: #334155; white-space: pre-line;">${reg.outras_capacitacoes}</p>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 5. Informações do Coleta (Anual) -->
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; color: #1d4ed8; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px;">5. Informações do Coleta (Anual)</h3>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold; width: 35%;">Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.vinculo || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Prazo do Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.prazo_vinculo || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Origem do Vínculo:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.origem_vinculo || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Cargo / Nível:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.cargo_nivel || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Situação Atual:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.situacao_atual || '-'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">É Docente?</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.e_docente ? 'Sim' : 'Não'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 4px 0; color: #64748b; font-weight: bold;">Orientador:</td>
                <td style="padding: 4px 0; color: #0f172a;">${reg.orientador || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 30px; text-align: center; font-size: 8px; color: #94a3b8;">
          <p>Este documento é uma representação digital gerada em tempo real pelo sistema de Cadastro LAMES - Laboratório de Patologia.</p>
        </div>

      </div>
    `;

    document.body.appendChild(printContainer);

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `ficha_cadastral_${(reg.nome_completo || 'colaborador').replace(/\s+/g, '_').toLowerCase()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await window.html2pdf().set(opt).from(printContainer).save();
    } finally {
      document.body.removeChild(printContainer);
    }
  };

  const showDetailModal = (reg) => {
    const isPendingReview = reg.status === 'em_analise';
    const hasPendencies = reg.status === 'indeferido';

    // Gera lista de formações acadêmicas
    let formacoesHTML = '';
    if (reg.formacoes && Array.isArray(reg.formacoes)) {
      formacoesHTML = reg.formacoes.map((formacao, idx) => `
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
          <div class="flex justify-between items-center border-b border-slate-200/50 pb-1.5 mb-1.5">
            <span class="font-bold text-slate-900"># ${idx + 1} - ${formacao.titulacao || '-'}</span>
            <span>${formacao.e_graduacao ? '<span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Graduação em Andamento</span>' : '<span class="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Concluído</span>'}</span>
          </div>
          <div class="grid grid-cols-2 gap-y-1.5 gap-x-4">
            <div><b class="text-slate-500">Local:</b> <span class="text-slate-800 font-medium">${formacao.local_formacao || '-'}</span></div>
            <div><b class="text-slate-500">Conclusão/Previsão:</b> <span class="text-slate-800 font-medium">${formacao.ano_conclusao || '-'}</span></div>
            
            <div class="col-span-2 pt-1.5 border-t border-slate-200/40 mt-1 flex flex-col gap-1">
              <b class="text-slate-500">Documento(s):</b>
              <div class="flex flex-wrap gap-3 font-semibold mt-0.5">
                ${formacao.e_graduacao ? `
                  ${formacao.historicoUrl ? `<a href="${formacao.historicoUrl}" target="_blank" class="text-blue-600 hover:underline">Histórico Escolar</a>` : '<span class="text-red-500">Histórico não enviado</span>'}
                  ${formacao.matriculaUrl ? `<a href="${formacao.matriculaUrl}" target="_blank" class="text-blue-600 hover:underline">Comprovante Matrícula</a>` : '<span class="text-red-500">Comprovante não enviado</span>'}
                ` : `
                  ${formacao.diplomaUrl ? `<a href="${formacao.diplomaUrl}" target="_blank" class="text-blue-600 hover:underline">Diploma</a>` : '<span class="text-red-500">Diploma não enviado</span>'}
                `}
              </div>
            </div>
          </div>
        </div>
      `).join('<div class="h-2"></div>');
    } else {
      // Fallback para registros antigos sem a lista formacoes
      formacoesHTML = `
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
          <div class="grid grid-cols-2 gap-y-2">
            <div><b class="text-slate-500">Titulação Máxima:</b> <span class="text-slate-800">${reg.titulacao || '-'}</span></div>
            <div><b class="text-slate-500">Local de Formação:</b> <span class="text-slate-800">${reg.local_formacao || '-'}</span></div>
            <div><b class="text-slate-500">Ano de Conclusão:</b> <span class="text-slate-800">${reg.ano_conclusao || '-'}</span></div>
            <div>
              <b class="text-slate-500">Diploma:</b> 
              ${reg.diplomaUrl ? `
                <a href="${reg.diplomaUrl}" target="_blank" class="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">Visualizar Anexo</a>
              ` : '<span class="text-slate-400">Não anexado</span>'}
            </div>
          </div>
        </div>
      `;
    }

    // Gera lista de capacitações
    const capacitacoesList = (reg.capacitacoes || []).map(cap => `
      <span class="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] px-2.5 py-1 rounded-full font-bold">${cap}</span>
    `).join(' ') || '<span class="text-slate-400">Nenhum curso selecionado</span>';

    Swal.fire({
      title: `<span class="text-lg font-extrabold text-slate-900">Ficha Cadastral: ${reg.nome_completo || 'Colaborador'}</span>`,
      html: `
        <div class="text-left text-sm max-h-[60vh] overflow-y-auto pr-2 space-y-6 pt-4 font-sans leading-relaxed">
          
          <!-- Foto e Status Banner -->
          <div class="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div class="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-shrink-0 flex items-center justify-center">
              ${reg.fotoUrl ? `<img src="${reg.fotoUrl}" class="w-full h-full object-cover">` : `
                <svg class="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              `}
            </div>
            <div class="flex-1 flex flex-col justify-center">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Status do Cadastro</span>
              <div>${getStatusBadge(reg.status)}</div>
            </div>
          </div>

          <!-- Pendências atuais (se houver) -->
          ${hasPendencies && reg.pendencias ? `
            <div class="p-4 bg-red-50 border border-red-100 text-red-900 rounded-xl text-xs">
              <span class="font-bold block text-red-950 mb-1">Pendências Apontadas Anteriormente:</span>
              <p class="whitespace-pre-line">${reg.pendencias}</p>
            </div>
          ` : ''}

          <!-- Secção 1 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">1. Identificação e Contato</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Nome:</b> <span class="text-slate-800 font-bold">${reg.nome_completo || '-'}</span></div>
              <div><b class="text-slate-500">Tipo de Integrante:</b> <span class="text-slate-800 capitalize font-bold">${reg.tipo_integrante || '-'}</span></div>
              <div><b class="text-slate-500">CPF:</b> <span class="text-slate-800">${reg.cpf || '-'}</span></div>
              <div><b class="text-slate-500">RG:</b> <span class="text-slate-800">${reg.rg || '-'}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Endereço:</b> <span class="text-slate-800">${reg.endereco || '-'}</span></div>
              <div><b class="text-slate-500">E-mail:</b> <span class="text-slate-800 font-mono">${reg.email}</span></div>
              <div><b class="text-slate-500">Telefone:</b> <span class="text-slate-800">${reg.telefone || '-'}</span></div>
            </div>
          </div>

          <!-- Secção 2 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">2. Saúde e Emergência</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs">
              <div><b class="text-slate-500">Grupo Sanguíneo:</b> <span class="text-slate-800 font-bold">${reg.grupo_sanguineo || '-'}</span></div>
              <div><b class="text-slate-500">Alergias:</b> <span class="text-slate-800">${reg.alergias || '-'}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Contato de Emergência:</b> <span class="text-slate-800 font-semibold">${reg.contato_emergencia || '-'}</span></div>
            </div>
          </div>

          <!-- Secção 3 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">3. Formação Acadêmica</h4>
            <div class="space-y-3">
              ${formacoesHTML}
            </div>
          </div>

          <!-- Secção 4 (Nova) -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">4. Cursos de Capacitação</h4>
            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                ${capacitacoesList}
              </div>
              ${reg.outras_capacitacoes ? `
                <div class="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs">
                  <b class="text-slate-600 block mb-1">Outros cursos/Livre:</b>
                  <p class="text-slate-800 whitespace-pre-line">${reg.outras_capacitacoes}</p>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Secção 5 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">5. Informações do Coleta (Anual)</h4>
            <div class="grid grid-cols-2 gap-y-2 text-xs font-sans">
              <div><b class="text-slate-500">Vínculo:</b> <span class="text-slate-800">${reg.vinculo || '-'}</span></div>
              <div><b class="text-slate-500">Prazo do Vínculo:</b> <span class="text-slate-800">${reg.prazo_vinculo || '-'}</span></div>
              <div><b class="text-slate-500">Origem:</b> <span class="text-slate-800">${reg.origem_vinculo || '-'}</span></div>
              <div><b class="text-slate-500">Cargo/Nível:</b> <span class="text-slate-800">${reg.cargo_nivel || '-'}</span></div>
              <div><b class="text-slate-500">Situação:</b> <span class="text-slate-800">${reg.situacao_atual || '-'}</span></div>
              <div><b class="text-slate-500">Docente?</b> <span class="text-slate-800">${reg.e_docente ? 'Sim' : 'Não'}</span></div>
              <div class="col-span-2"><b class="text-slate-500">Orientador:</b> <span class="text-slate-800">${reg.orientador || '-'}</span></div>
            </div>
          </div>

          <!-- Botões de Homologação caso esteja em Análise -->
          ${isPendingReview ? `
            <div class="flex gap-3 justify-end pt-4 border-t border-slate-100">
              <button id="btnModalIndeferir" class="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-150 shadow-md shadow-red-100">
                Indeferir (Solicitar Correção)
              </button>
              <button id="btnModalDeferir" class="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-150 shadow-md shadow-green-100">
                Deferir (Aprovar Cadastro)
              </button>
            </div>
          ` : ''}

        </div>
      `,
      width: '600px',
      showConfirmButton: true,
      confirmButtonText: 'Baixar Ficha',
      confirmButtonColor: '#2563eb',
      showCancelButton: true,
      cancelButtonText: 'Fechar Ficha',
      cancelButtonColor: '#64748b',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          await generatePDF(reg);
          return false; // Mantém o modal aberto
        } catch (error) {
          Swal.showValidationMessage(`Erro ao gerar PDF: ${error.message}`);
        }
      },
      didOpen: () => {
        if (isPendingReview) {
          // Evento Deferir
          document.getElementById('btnModalDeferir').addEventListener('click', async () => {
            const confirm = await Swal.fire({
              title: 'Deferir Cadastro?',
              text: 'Isso aprovará e homologará em definitivo as informações do colaborador.',
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Sim, deferir',
              cancelButtonText: 'Cancelar',
              confirmButtonColor: '#16a34a',
              cancelButtonColor: '#94a3b8'
            });

            if (confirm.isConfirmed) {
              await updateRegistroStatus(reg.email, 'deferido', reg);
            }
          });

          // Evento Indeferir com Pendências
          document.getElementById('btnModalIndeferir').addEventListener('click', async () => {
            const { value: text, isConfirmed } = await Swal.fire({
              title: 'Apontar Pendências',
              input: 'textarea',
              inputLabel: 'Descreva detalhadamente o que o colaborador precisa corrigir no cadastro:',
              inputPlaceholder: 'Ex: O anexo do diploma está ilegível. Favor preencher o campo RG corretamente.',
              inputAttributes: {
                'aria-label': 'Descreva detalhadamente o que o colaborador precisa corrigir no cadastro'
              },
              showCancelButton: true,
              confirmButtonText: 'Solicitar Correção',
              cancelButtonText: 'Voltar',
              confirmButtonColor: '#ef4444',
              cancelButtonColor: '#94a3b8',
              inputValidator: (value) => {
                if (!value) {
                  return 'Você precisa digitar o motivo da pendência!';
                }
              }
            });

            if (isConfirmed && text) {
              await updateRegistroStatus(reg.email, 'indeferido', reg, text);
            }
          });
        }
      }
    });
  };

  // Primeira busca e renderização
  Swal.fire({
    title: 'Carregando painel...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });
  await fetchData();
  Swal.close();
  renderUI();

  return {
    destroy: () => {}
  };
}
