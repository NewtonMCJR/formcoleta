import Swal from 'sweetalert2';
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { db, isConfigured } from '../firebase';
import { logoutUser } from '../auth';
import { navigateTo } from '../router';

export async function renderAdmin(container, user, role) {
  let activeTab = 'registros'; // 'registros' ou 'whitelist'
  let searchWord = '';
  let filterType = '';
  let filterStatus = ''; // Filtro por status
  
  let registrosList = [];
  let whitelistList = [];

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
        status: 'em_analise', // Inicializa como 'em_analise' para testar a revisão
        pendencias: '',
        lastUpdated: new Date().toISOString()
      }
    }));
  }

  // Carrega registros e whitelist
  const fetchData = async () => {
    try {
      if (isConfigured) {
        // Firebase
        const regSnap = await getDocs(collection(db, 'coletas'));
        registrosList = regSnap.docs.map(doc => doc.data());

        const wlSnap = await getDocs(collection(db, 'whitelist'));
        whitelistList = wlSnap.docs.map(doc => doc.data());
      } else {
        // Demo Mode
        const savedWL = JSON.parse(localStorage.getItem('demo_whitelist') || '{}');
        whitelistList = Object.values(savedWL);

        const savedReg = JSON.parse(localStorage.getItem('all_demo_coletas') || '{}');
        registrosList = Object.values(savedReg);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do banco:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao carregar dados',
        text: 'Não foi possível ler as informações do Firebase. Verifique suas regras e conexão.',
        confirmButtonColor: '#ef4444'
      });
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
          </div>
        </div>

        <div class="p-8">
          ${activeTab === 'registros' ? renderRegistrosTab() : renderWhitelistTab()}
        </div>
      </div>
    `;

    // Listeners gerais
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
    }
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

  const showDetailModal = (reg) => {
    const isPendingReview = reg.status === 'em_analise';
    const hasPendencies = reg.status === 'indeferido';

    Swal.fire({
      title: `<span class="text-lg font-extrabold text-slate-900">Ficha Cadastral: ${reg.nome_completo || 'Colaborador'}</span>`,
      html: `
        <div class="text-left text-sm max-h-[60vh] overflow-y-auto pr-2 space-y-6 pt-4 font-sans leading-relaxed">
          
          <!-- Status Banner -->
          <div class="flex justify-between items-center p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
            <span class="font-bold text-slate-500">Status do Cadastro:</span>
            <span>${getStatusBadge(reg.status)}</span>
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
            <div class="grid grid-cols-2 gap-y-2 text-xs">
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

          <!-- Secção 4 -->
          <div>
            <h4 class="font-bold text-blue-700 text-xs uppercase tracking-wider mb-2 border-b pb-1">4. Informações do Coleta (Anual)</h4>
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
      showConfirmButton: !isPendingReview, // Oculta botão fechar se mostrar botões de homologação
      confirmButtonColor: '#2563eb',
      confirmButtonText: 'Fechar Ficha',
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
