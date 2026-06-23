import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, isConfigured } from './firebase';

/**
 * Obtém os detalhes do usuário na whitelist (papel/role)
 * @param {string} email 
 * @returns {Promise<{role: string} | null>}
 */
export async function checkWhitelist(email) {
  if (!isConfigured) return null;
  const docRef = doc(db, 'whitelist', email.toLowerCase().trim());
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}

/**
 * Faz login do usuário e valida se ele está na whitelist
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{user: any, role: string}>}
 */
export async function loginUser(email, password) {
  if (!isConfigured) {
    // Modo de demonstração (mock) caso o Firebase não esteja configurado
    if (email === 'admin@lames.org' && password === 'admin123') {
      return { user: { email }, role: 'admin' };
    } else if (email === 'colab@lames.org' && password === 'colab123') {
      return { user: { email }, role: 'colaborador' };
    }
    throw new Error('Firebase não configurado. Use as credenciais de demonstração (admin@lames.org/admin123 ou colab@lames.org/colab123).');
  }

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  try {
    const whitelistData = await checkWhitelist(user.email);
    if (!whitelistData) {
      // Se não estiver na whitelist, desloga o usuário imediatamente
      await signOut(auth);
      throw new Error('Este e-mail não está autorizado a acessar o sistema.');
    }
    return { user, role: whitelistData.role };
  } catch (error) {
    // Se ocorrer algum erro de permissão ou rede, garante o logout
    await signOut(auth);
    throw error;
  }
}

/**
 * Cadastra um novo usuário e valida se o e-mail está na whitelist
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{user: any, role: string}>}
 */
export async function registerUser(email, password) {
  if (!isConfigured) {
    throw new Error('O cadastro de novos usuários necessita do Firebase configurado.');
  }

  // Primeiro faz o registro na Auth do Firebase
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  try {
    // Verifica se o e-mail está na whitelist
    const whitelistData = await checkWhitelist(user.email);
    if (!whitelistData) {
      // Se não estiver na whitelist, remove a conta recém-criada para não poluir o Auth
      await deleteUser(user);
      throw new Error('Seu e-mail não está cadastrado na whitelist do laboratório. Solicite acesso ao administrador.');
    }
    return { user, role: whitelistData.role };
  } catch (error) {
    // Em caso de erro, garante que a sessão seja encerrada
    try {
      await deleteUser(user);
    } catch (_) {}
    throw error;
  }
}

/**
 * Realiza o logout do usuário
 */
export async function logoutUser() {
  if (!isConfigured) return;
  await signOut(auth);
}

/**
 * Escuta mudanças de estado da autenticação
 * @param {function} callback 
 */
export function onAuthChange(callback) {
  if (!isConfigured) {
    // Para modo de demonstração, verifica localStorage
    const savedUser = localStorage.getItem('demo_user');
    const savedRole = localStorage.getItem('demo_role');
    if (savedUser && savedRole) {
      callback({ email: savedUser }, savedRole);
    } else {
      callback(null, null);
    }
    return () => {};
  }

  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const whitelistData = await checkWhitelist(user.email);
      if (whitelistData) {
        callback(user, whitelistData.role);
      } else {
        await signOut(auth);
        callback(null, null);
      }
    } else {
      callback(null, null);
    }
  });
}
