import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Tipos
type User = {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'student' | 'admin') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Datos de usuario simulados
  const mockUser: User = {
    _id: '1',
    name: 'Usuario de Prueba',
    email: 'test@example.com',
    role: 'student',
  };

  // Comprobar si el usuario ya ha iniciado sesión
  useEffect(() => {
    // Simular la comprobación de un usuario que ha iniciado sesión
    const sessionUser = sessionStorage.getItem('user');
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
    setLoading(false);
  }, []);

  // Función de inicio de sesión
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    // Simular llamada a la API
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === 'admin@example.com' && password === 'password') {
      const adminUser = { ...mockUser, role: 'admin' as 'admin', name: 'Usuario Administrador' };
      setUser(adminUser);
      sessionStorage.setItem('user', JSON.stringify(adminUser));
      navigate('/admin');
    } else if (email === 'student@example.com' && password === 'password') {
      const studentUser = { ...mockUser, role: 'student' as 'student', name: 'Usuario Estudiante' };
      setUser(studentUser);
      sessionStorage.setItem('user', JSON.stringify(studentUser));
      navigate('/dashboard');
    } else {
      setError('Correo electrónico o contraseña no válidos');
    }

    setLoading(false);
  };

  // Función de registro
  const register = async (name: string, email: string, password: string, role: 'student' | 'admin') => {
    setLoading(true);
    setError(null);

    // Simular llamada a la API
    await new Promise(resolve => setTimeout(resolve, 500));

    console.log('Registrado:', { name, email, password, role });
    navigate('/login');

    setLoading(false);
  };

  // Función de cierre de sesión
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};