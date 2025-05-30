import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, FileText, Clock, Calendar, Award } from 'lucide-react';

// Types
interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  modules: Module[];
}

interface Module {
  _id: string;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  _id: string;
  title: string;
  type: 'video' | 'assignment' | 'quiz' | 'reading';
  completed: boolean;
}

const CourseView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API call to get course details
    const fetchCourse = async () => {
      try {
        // Mock data
        setTimeout(() => {
          const mockCourse: Course = {
            _id: id || '1',
            title: 'Introduction to Mathematics',
            description: 'This course provides a comprehensive introduction to fundamental mathematical concepts including algebra, geometry, and calculus. Students will develop problem-solving skills and gain a solid foundation in mathematical reasoning.',
            instructor: 'Dr. Alan Smith',
            image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            modules: [
              {
                _id: 'm1',
                title: 'Module 1: Algebra Fundamentals',
                lessons: [
                  { _id: 'l1', title: 'Variables and Expressions', type: 'video', completed: true },
                  { _id: 'l2', title: 'Solving Equations', type: 'video', completed: true },
                  { _id: 'l3', title: 'Assignment: Equation Practice', type: 'assignment', completed: true },
                  { _id: 'l4', title: 'Quiz: Algebra Basics', type: 'quiz', completed: false }
                ]
              },
              {
                _id: 'm2',
                title: 'Module 2: Geometry Concepts',
                lessons: [
                  { _id: 'l5', title: 'Points, Lines, and Planes', type: 'video', completed: true },
                  { _id: 'l6', title: 'Triangles and Polygons', type: 'reading', completed: false },
                  { _id: 'l7', title: 'Assignment: Geometric Proofs', type: 'assignment', completed: false },
                  { _id: 'l8', title: 'Quiz: Geometry Basics', type: 'quiz', completed: false }
                ]
              },
              {
                _id: 'm3',
                title: 'Module 3: Introduction to Calculus',
                lessons: [
                  { _id: 'l9', title: 'Limits and Continuity', type: 'video', completed: false },
                  { _id: 'l10', title: 'Derivatives', type: 'video', completed: false },
                  { _id: 'l11', title: 'Assignment: Derivative Practice', type: 'assignment', completed: false },
                  { _id: 'l12', title: 'Final Exam', type: 'quiz', completed: false }
                ]
              }
            ]
          };
          
          setCourse(mockCourse);
          setActiveModuleId(mockCourse.modules[0]._id);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching course:', error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const calculateProgress = () => {
    if (!course) return 0;
    
    let completedLessons = 0;
    let totalLessons = 0;
    
    course.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        totalLessons++;
        if (lesson.completed) {
          completedLessons++;
        }
      });
    });
    
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <div className="rounded-full bg-blue-100 p-1"><BookOpen className="h-4 w-4 text-blue-600" /></div>;
      case 'assignment':
        return <div className="rounded-full bg-orange-100 p-1"><FileText className="h-4 w-4 text-orange-600" /></div>;
      case 'quiz':
        return <div className="rounded-full bg-green-100 p-1"><Award className="h-4 w-4 text-green-600" /></div>;
      case 'reading':
        return <div className="rounded-full bg-purple-100 p-1"><BookOpen className="h-4 w-4 text-purple-600" /></div>;
      default:
        return <div className="rounded-full bg-gray-100 p-1"><FileText className="h-4 w-4 text-gray-600" /></div>;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const progress = calculateProgress();

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-8rem)]">
      {/* Course Header */}
      <div className="relative">
        <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
              <p className="text-gray-700 mb-6">{course.description}</p>
              
              <div className="mt-2 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{progress}% completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Course Modules */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
              <div className="p-4 bg-blue-600 text-white">
                <h2 className="text-lg font-semibold">Course Modules</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {course.modules.map((module) => (
                    <li key={module._id}>
                      <button
                        onClick={() => setActiveModuleId(module._id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition ${
                          activeModuleId === module._id
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {module.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Module Lessons */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.modules.find(m => m._id === activeModuleId)?.title || 'Module Content'}
                </h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {course.modules
                    .find(m => m._id === activeModuleId)
                    ?.lessons.map((lesson) => (
                      <li key={lesson._id}>
                        <div 
                          className={`flex items-center p-3 rounded-md border ${
                            lesson.completed 
                              ? 'border-green-200 bg-green-50' 
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex-shrink-0 mr-3">
                            {getLessonIcon(lesson.type)}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-sm font-medium text-gray-900">{lesson.title}</h3>
                            <p className="text-xs text-gray-500 capitalize">{lesson.type}</p>
                          </div>
                          <div className="flex-shrink-0 ml-3">
                            {lesson.completed ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Completed
                              </span>
                            ) : (
                              <button className="text-sm text-blue-600 hover:text-blue-800">
                                Start
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;