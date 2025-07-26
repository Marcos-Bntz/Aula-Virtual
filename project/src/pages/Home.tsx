import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {t('heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  {t('getStarted')}
                </Link>
                <Link to="/login" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                  {t('signIn')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="flex justify-center">
                <BookOpen className="h-64 w-64 text-white opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('featuresTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <BookOpen className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('feature1Title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('feature1Text')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('feature2Title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('feature2Text')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('feature3Title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('feature3Text')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
            {t('createAccount')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;