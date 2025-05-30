import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    
    // Auth
    welcomeBack: 'Welcome back',
    emailAddress: 'Email address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot your password?',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: 'Don\'t have an account?',
    
    // Dashboard
    welcome: 'Welcome',
    myCourses: 'My Courses',
    myGrades: 'My Grades',
    courseManagement: 'Course Management',
    userManagement: 'User Management',
    
    // Course
    instructor: 'Instructor',
    students: 'Students',
    modules: 'Modules',
    completed: 'Completed',
    start: 'Start',
    
    // Admin
    addNewCourse: 'Add New Course',
    addNewUser: 'Add New User',
    courseTitle: 'Course Title',
    courseDescription: 'Course Description',
    instructorName: 'Instructor Name',
    
    // General
    actions: 'Actions',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
  },
  es: {
    // Navegación
    home: 'Inicio',
    dashboard: 'Panel',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    logout: 'Cerrar Sesión',
    
    // Autenticación
    welcomeBack: 'Bienvenido de nuevo',
    emailAddress: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar Contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste tu contraseña?',
    createAccount: 'Crear Cuenta',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    dontHaveAccount: '¿No tienes una cuenta?',
    
    // Panel
    welcome: 'Bienvenido',
    myCourses: 'Mis Cursos',
    myGrades: 'Mis Calificaciones',
    courseManagement: 'Gestión de Cursos',
    userManagement: 'Gestión de Usuarios',
    
    // Curso
    instructor: 'Instructor',
    students: 'Estudiantes',
    modules: 'Módulos',
    completed: 'Completado',
    start: 'Comenzar',
    
    // Administrador
    addNewCourse: 'Agregar Nuevo Curso',
    addNewUser: 'Agregar Nuevo Usuario',
    courseTitle: 'Título del Curso',
    courseDescription: 'Descripción del Curso',
    instructorName: 'Nombre del Instructor',
    
    // General
    actions: 'Acciones',
    delete: 'Eliminar',
    cancel: 'Cancelar',
    save: 'Guardar',
    edit: 'Editar',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};