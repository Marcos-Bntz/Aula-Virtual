import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-semibold">AulaVirtual</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Sobre Nosotros</a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Contacto</a>
            <a href="#" className="text-gray-300 hover:text-white mb-2 md:mb-0">Política de Privacidad</a>
            <a href="#" className="text-gray-300 hover:text-white">Términos de Servicio</a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AulaVirtual. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;