import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, BarChart2, Plus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Types
interface StatCard {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface RecentActivity {
  id: string;
  type: 'course_created' | 'grade_updated' | 'user_registered';
  description: string;
  date: string;
}

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<StatCard[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API calls
    const fetchData = async () => {
      try {
        setTimeout(() => {
          // Mock stats data
          const mockStats: StatCard[] = [
            {
              title: 'Total Students',
              value: 120,
              icon: <Users className="h-6 w-6" />,
              color: 'bg-blue-500'
            },
            {
              title: 'Total Courses',
              value: 24,
              icon: <BookOpen className="h-6 w-6" />,
              color: 'bg-green-500'
            },
            {
              title: 'Assignments',
              value: 56,
              icon: <Award className="h-6 w-6" />,
              color: 'bg-purple-500'
            },
            {
              title: 'Average Grade',
              value: 85,
              icon: <BarChart2 className="h-6 w-6" />,
              color: 'bg-orange-500'
            }
          ];

          // Mock recent activity
          const mockActivity: RecentActivity[] = [
            {
              id: '1',
              type: 'course_created',
              description: 'New course "Advanced Physics" was created',
              date: '2023-06-15T10:30:00'
            },
            {
              id: '2',
              type: 'grade_updated',
              description: 'Grades updated for "Introduction to Mathematics"',
              date: '2023-06-14T14:45:00'
            },
            {
              id: '3',
              type: 'user_registered',
              description: 'New student Sarah Johnson registered',
              date: '2023-06-13T09:15:00'
            },
            {
              id: '4',
              type: 'grade_updated',
              description: 'Grades updated for "English Literature"',
              date: '2023-06-12T16:20:00'
            },
            {
              id: '5',
              type: 'course_created',
              description: 'New course "Web Development Fundamentals" was created',
              date: '2023-06-10T11:05:00'
            }
          ];

          setStats(mockStats);
          setRecentActivity(mockActivity);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_created':
        return <div className="bg-green-100 p-2 rounded-full"><BookOpen className="h-5 w-5 text-green-600" /></div>;
      case 'grade_updated':
        return <div className="bg-blue-100 p-2 rounded-full"><Award className="h-5 w-5 text-blue-600" /></div>;
      case 'user_registered':
        return <div className="bg-purple-100 p-2 rounded-full"><Users className="h-5 w-5 text-purple-600" /></div>;
      default:
        return <div className="bg-gray-100 p-2 rounded-full"><BookOpen className="h-5 w-5 text-gray-600" /></div>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-8rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <Link
              to="/admin/courses"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Course
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 rounded-full p-3 ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                          <dd>
                            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/admin/courses"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Manage Courses
                </Link>
                <Link
                  to="/admin/users"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Manage Users
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Manage Grades
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
              </div>
              <div className="p-6">
                <ul className="divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="py-4 flex">
                      <div className="mr-4">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">{activity.description}</h3>
                          <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    View all activity
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;