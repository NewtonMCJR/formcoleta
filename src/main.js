import './style.css';
import { initRouter, registerRoute } from './router';
import { renderLogin } from './pages/login';
import { renderForm } from './pages/form';
import { renderAdmin } from './pages/admin';

// Registra as views correspondentes às rotas
registerRoute('login', renderLogin);
registerRoute('formulario', renderForm);
registerRoute('admin', renderAdmin);

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  if (appContainer) {
    initRouter(appContainer);
  } else {
    console.error("Elemento container #app não encontrado no index.html.");
  }
});
