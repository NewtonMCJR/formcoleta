import Swal from 'sweetalert2';
import { loginUser, registerUser } from '../auth';
import { isConfigured } from '../firebase';

export function renderLogin(container) {
  let isRegisterMode = false;

  const renderContent = () => {
    container.innerHTML = `
      <div class="min-h-[80vh] flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-10 transition-all duration-300 transform">
          
          <!-- Logo & Header -->
          <div class="text-center mb-8">
            <div class="inline-flex p-3.5 bg-blue-600 text-white rounded-2xl mb-4 shadow-lg shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.182a10.001 10.001 0 01-11.314-11.314l2.182-.727a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.902 4.86a2 2 0 00-3.073.364l-1.572 2.358a1 1 0 00-.126.915 13.993 13.993 0 0013.993 13.993 1 1 0 00.915-.126l2.358-1.572a2 2 0 00.364-3.073l-1.572-1.572z" />
              </svg>
            </div>
            <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight" id="loginTitle">
              ${isRegisterMode ? 'Criar Conta LAMES' : 'Acesso ao RH LAMES'}
            </h1>
            <p class="text-slate-500 mt-2 text-sm" id="loginSub">
              ${isRegisterMode ? 'Preencha os dados abaixo para se cadastrar' : 'Insira suas credenciais para acessar o formulário de coleta'}
            </p>
          </div>

          <!-- Alert de Modo Demo se Firebase não estiver configurado -->
          ${!isConfigured ? `
            <div class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 space-y-1">
              <span class="font-bold flex items-center gap-1.5 text-amber-900">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                Modo de Demonstração Ativo
              </span>
              <p>Firebase não configurado localmente. Credenciais válidas para teste:</p>
              <div class="font-mono mt-1 space-y-0.5 bg-amber-100/50 p-2 rounded-lg">
                <div>• Admin: <b>admin@lames.org</b> / admin123</div>
                <div>• Colaborador: <b>colab@lames.org</b> / colab123</div>
              </div>
            </div>
          ` : ''}

          <!-- Form -->
          <form id="authForm" class="space-y-5">
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
              <input type="email" id="email" required placeholder="exemplo@lames.org" 
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
            </div>

            <div>
              <label for="password" class="block text-sm font-semibold text-slate-700 mb-1.5">Senha</label>
              <input type="password" id="password" required placeholder="Sua senha" minlength="6"
                class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
            </div>

            ${isRegisterMode ? `
              <div>
                <label for="confirmPassword" class="block text-sm font-semibold text-slate-700 mb-1.5">Confirmar Senha</label>
                <input type="password" id="confirmPassword" required placeholder="Repita sua senha" minlength="6"
                  class="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-150 ease-in-out text-sm">
              </div>
            ` : ''}

            <button type="submit" 
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-150 shadow-lg shadow-blue-200 mt-2 transform hover:-translate-y-0.5">
              ${isRegisterMode ? 'Registrar Conta' : 'Entrar no Sistema'}
            </button>
          </form>

          <!-- Toggle Mode Link -->
          <div class="mt-6 text-center">
            <button id="toggleAuthMode" class="text-sm text-blue-600 hover:text-blue-700 font-semibold focus:outline-none">
              ${isRegisterMode ? 'Já possui uma conta? Entrar' : 'Novo colaborador? Crie seu acesso aqui'}
            </button>
          </div>

        </div>
      </div>
    `;

    // Configura eventos da tela
    const authForm = document.getElementById('authForm');
    authForm.addEventListener('submit', handleAuthSubmit);

    const toggleBtn = document.getElementById('toggleAuthMode');
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isRegisterMode = !isRegisterMode;
      renderContent();
    });
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    Swal.fire({
      title: isRegisterMode ? 'Criando conta...' : 'Autenticando...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      if (isRegisterMode) {
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
          throw new Error('As senhas não coincidem.');
        }

        await registerUser(email, password);
        
        await Swal.fire({
          icon: 'success',
          title: 'Cadastro Realizado!',
          text: 'Sua conta foi criada e autorizada com sucesso. Você já está logado no sistema.',
          confirmButtonColor: '#2563eb'
        });
      } else {
        // Login
        const { role } = await loginUser(email, password);

        // Se Firebase não configurado (modo demo), grava no localStorage
        if (!isConfigured) {
          localStorage.setItem('demo_user', email);
          localStorage.setItem('demo_role', role);
          // Força a atualização do roteador
          window.location.reload();
        }

        Swal.close();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops! Ocorreu um erro',
        text: error.message || 'Verifique seus dados e tente novamente.',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  renderContent();

  return {
    destroy: () => {
      // Limpezas adicionais se necessário
    }
  };
}
