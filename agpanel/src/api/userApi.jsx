export const fetchUserProfile = async () => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      throw new Error('No hay token de autenticación');
    }
  
    const response = await fetch('http://127.0.0.1:8000/users/api/profile/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error('No se pudo obtener el perfil del usuario');
    }
  
    return await response.json();
  };
  