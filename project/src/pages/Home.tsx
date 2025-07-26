import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Sección de Héroe */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transforma Tu Experiencia de Aprendizaje
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Una plataforma de aula virtual completa diseñada para que estudiantes y educadores se conecten, aprendan y crezcan.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  Comenzar
                </Link>
                <Link to="/login" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              {/* Espacio para imagen o ilustración */}
              <div className="flex justify-center">
                <BookOpen className="h-64 w-64 text-white opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Características */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Elegir EduConnect?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma ofrece un conjunto completo de herramientas diseñadas para mejorar la experiencia de aprendizaje tanto para estudiantes como para educadores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <BookOpen className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cursos Interactivos</h3>
              <p className="text-gray-600">
                Accede a una amplia gama de cursos con contenido interactivo, tareas y evaluaciones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprendizaje Colaborativo</h3>
              <p className="text-gray-600">
                Conéctate con instructores y compañeros para mejorar tu experiencia de aprendizaje a través de la colaboración.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguimiento del Progreso</h3>
              <p className="text-gray-600">
                Monitorea tu progreso académico con informes de calificaciones detallados y análisis de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Llamada a la Acción */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a miles de estudiantes y educadores que ya están utilizando EduConnect para transformar su experiencia de aprendizaje.
          </p>
          <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
            Crea Tu Cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;