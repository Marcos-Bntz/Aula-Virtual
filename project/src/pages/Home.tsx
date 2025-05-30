import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Your Learning Experience
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                A comprehensive virtual classroom platform designed for students and educators to connect, learn, and grow.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  Get Started
                </Link>
                <Link to="/login" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              {/* Placeholder for image or illustration */}
              <div className="flex justify-center">
                <BookOpen className="h-64 w-64 text-white opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduConnect?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers a comprehensive set of tools designed to enhance the learning experience for both students and educators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <BookOpen className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
              <p className="text-gray-600">
                Access a wide range of courses with interactive content, assignments, and assessments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Learning</h3>
              <p className="text-gray-600">
                Connect with instructors and peers to enhance your learning experience through collaboration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your academic progress with detailed grade reports and performance analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students and educators who are already using EduConnect to transform their learning experience.
          </p>
          <Link to="/register" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;