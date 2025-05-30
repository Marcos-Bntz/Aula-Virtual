import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, BarChart2, Clock, CheckCircle } from 'lucide-react';

// Types
interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
}

interface Grade {
  _id: string;
  courseId: string;
  courseName: string;
  score: number;
  feedback: string;
  date: string;
}

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'courses' | 'grades'>('courses');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, these would be separate API calls
        // For demo purposes, we're using mock data
        
        // Simulating API calls
        setTimeout(() => {
          // Mock courses data
          const mockCourses = [
            {
              _id: '1',
              title: 'Introduction to Mathematics',
              description: 'Fundamental concepts of algebra, geometry, and calculus',
              instructor: 'Dr. Alan Smith',
              image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
              _id: '2',
              title: 'English Literature',
              description: 'Classic and contemporary literary works and analysis',
              instructor: 'Prof. Emily Johnson',
              image: 'https://images.pexels.com/photos/1448709/pexels-photo-1448709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
              _id: '3',
              title: 'Introduction to Computer Science',
              description: 'Programming fundamentals and computational thinking',
              instructor: 'Dr. Robert Chen',
              image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
              _id: '4',
              title: 'Biology 101',
              description: 'Study of living organisms and their interactions',
              instructor: 'Dr. Sarah Wilson',
              image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          ];

          // Mock grades data
          const mockGrades = [
            {
              _id: '1',
              courseId: '1',
              courseName: 'Introduction to Mathematics',
              score: 92,
              feedback: 'Excellent work on the algebra section!',
              date: '2023-06-15'
            },
            {
              _id: '2',
              courseId: '2',
              courseName: 'English Literature',
              score: 88,
              feedback: 'Good analysis, but could improve citation format.',
              date: '2023-06-10'
            },
            {
              _id: '3',
              courseId: '3',
              courseName: 'Introduction to Computer Science',
              score: 95,
              feedback: 'Outstanding programming skills demonstrated.',
              date: '2023-06-05'
            }
          ];

          setCourses(mockCourses);
          setGrades(mockGrades);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGradeText = (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-8rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-white">Welcome, {user?.name}!</h1>
          <p className="text-blue-100">
            Here's an overview of your academic progress and courses.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'courses'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('courses')}
            >
              <span className="flex items-center justify-center">
                <BookOpen className="h-5 w-5 mr-2" />
                My Courses
              </span>
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center ${
                activeTab === 'grades'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('grades')}
            >
              <span className="flex items-center justify-center">
                <BarChart2 className="h-5 w-5 mr-2" />
                My Grades
              </span>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Enrolled Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Link
                      key={course._id}
                      to={`/courses/${course._id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</p>
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Ongoing
                        </span>
                        <span className="text-sm text-blue-600 font-medium">View Details →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Grades Tab */}
            {activeTab === 'grades' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Recent Grades</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {grades.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Course
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Grade
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Feedback
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {grades.map((grade) => (
                            <tr key={grade._id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                  {grade.courseName}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className={`text-sm font-semibold ${getGradeColor(grade.score)}`}>
                                    {grade.score}% ({getGradeText(grade.score)})
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-500 max-w-xs truncate">
                                  {grade.feedback}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(grade.date).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-gray-500">No grades available yet.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;