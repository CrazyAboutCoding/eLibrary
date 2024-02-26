import axios from 'axios';

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    if (response.status === 200) {
      localStorage.setItem('isLoggedIn', true);
      return true;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return false;
  }
};

export const isAuthenticated = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn === 'true';
};

export const logout = async () => {
  try {
    const response = await axios.post('/api/logout');
    if (response.status === 200) {
      localStorage.removeItem('isLoggedIn');
      return true;
    }
  } catch (error) {
    console.error('Error logging out:', error);
    return false;
  }
};