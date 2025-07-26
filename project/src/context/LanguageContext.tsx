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
    or: 'Or',
    fillAllFields: 'Please fill in all fields',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 6 characters',
    createAnAccount: 'Create a new account',
    signInToExistingAccount: 'sign in to your existing account',
    fullName: 'Full Name',
    accountType: 'Account Type',
    student: 'Student',
    teacherAdmin: 'Teacher/Admin',

    // Home Page
    heroTitle: 'Transform Your Learning Experience',
    heroSubtitle: 'A comprehensive virtual classroom platform designed for students and educators to connect, learn, and grow.',
    getStarted: 'Get Started',
    signIn: 'Sign In',
    featuresTitle: 'Why Choose EduConnect?',
    featuresSubtitle: 'Our platform offers a comprehensive set of tools designed to enhance the learning experience for both students and educators.',
    feature1Title: 'Interactive Courses',
    feature1Text: 'Access a wide range of courses with interactive content, assignments, and assessments.',
    feature2Title: 'Collaborative Learning',
    feature2Text: 'Connect with instructors and peers to enhance your learning experience through collaboration.',
    feature3Title: 'Progress Tracking',
    feature3Text: 'Monitor your academic progress with detailed grade reports and performance analytics.',
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Join thousands of students and educators who are already using EduConnect to transform their learning experience.',
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
    or: 'O',
    fillAllFields: 'Por favor, rellene todos los campos',
    passwordsDoNotMatch: 'Las contraseñas no coinciden',
    passwordTooShort: 'La contraseña debe tener al menos 6 caracteres',
    createAnAccount: 'Crea una nueva cuenta',
    signInToExistingAccount: 'inicia sesión en tu cuenta existente',
    fullName: 'Nombre completo',
    accountType: 'Tipo de cuenta',
    student: 'Estudiante',
    teacherAdmin: 'Profesor/Administrador',

    // Home Page
    heroTitle: 'Transforma Tu Experiencia de Aprendizaje',
    heroSubtitle: 'Una plataforma de aula virtual integral diseñada para que estudiantes y educadores se conecten, aprendan y crezcan.',
    getStarted: 'Empezar',
    signIn: 'Iniciar Sesión',
    featuresTitle: '¿Por Qué Elegir EduConnect?',
    featuresSubtitle: 'Nuestra plataforma ofrece un conjunto completo de herramientas diseñadas para mejorar la experiencia de aprendizaje tanto para estudiantes como para educadores.',
    feature1Title: 'Cursos Interactivos',
    feature1Text: 'Accede a una amplia gama de cursos con contenido interactivo, tareas y evaluaciones.',
    feature2Title: 'Aprendizaje Colaborativo',
    feature2Text: 'Conéctate con instructores y compañeros para mejorar tu experiencia de aprendizaje a través de la colaboración.',
    feature3Title: 'Seguimiento del Progreso',
    feature3Text: 'Monitorea tu progreso académico con informes de calificaciones detallados y análisis de rendimiento.',
    ctaTitle: '¿Listo para Empezar?',
    ctaSubtitle: 'Únete a miles de estudiantes y educadores que ya están utilizando EduConnect para transformar su experiencia de aprendizaje.',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { useEffect } from 'react';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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