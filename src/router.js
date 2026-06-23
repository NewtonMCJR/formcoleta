import { onAuthChange } from './auth';

let currentView = null;
let appContainer = null;
let currentUser = null;
let currentUserRole = null;

// Mapa de páginas registradas
const routes = {};

/**
 * Registra uma página/rota no roteador
 * @param {string} name 
 * @param {function} renderFn 
 */
export function registerRoute(name, renderFn) {
  routes[name] = renderFn;
}

/**
 * Navega para uma rota específica
 * @param {string} routeName 
 */
export function navigateTo(routeName) {
  window.location.hash = routeName;
}

/**
 * Atualiza a visualização com base na rota atual e estado de autenticação
 */
async function handleRoute() {
  if (!appContainer) return;

  let hash = window.location.hash.slice(1) || 'login';

  // Proteção de rotas com base no login
  if (!currentUser) {
    // Se não está logado, só pode ver a tela de login
    if (hash !== 'login') {
      navigateTo('login');
      return;
    }
  } else {
    // Se está logado, não pode ir para a tela de login
    if (hash === 'login') {
      if (currentUserRole === 'admin') {
        navigateTo('admin');
      } else {
        navigateTo('inicio');
      }
      return;
    }

    // Se é colaborador e tenta acessar tela admin, redireciona
    if (hash === 'admin' && currentUserRole !== 'admin') {
      navigateTo('inicio');
      return;
    }
  }

  // Renderiza a página apropriada
  const renderPage = routes[hash];
  if (renderPage) {
    // Limpa a tela
    appContainer.innerHTML = '';
    // Destrói a view anterior se ela tiver método destroy
    if (currentView && typeof currentView.destroy === 'function') {
      currentView.destroy();
    }
    // Renderiza a nova página e guarda a referência da view ativa
    currentView = await renderPage(appContainer, currentUser, currentUserRole);
  } else {
    appContainer.innerHTML = `<div class="text-center p-20"><h1 class="text-2xl font-bold">Página não encontrada (404)</h1><a href="#login" class="text-blue-500 underline mt-4 inline-block">Voltar ao início</a></div>`;
  }
}

/**
 * Inicializa o roteador do SPA
 * @param {HTMLElement} container 
 */
export function initRouter(container) {
  appContainer = container;

  // Escuta mudanças de hash no navegador
  window.addEventListener('hashchange', handleRoute);

  // Inicializa a escuta do estado de autenticação do Firebase / Modo Demo
  onAuthChange((user, role) => {
    currentUser = user;
    currentUserRole = role;
    handleRoute();
  });
}
