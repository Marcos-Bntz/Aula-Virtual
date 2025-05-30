// Mock data for the backend

// Users data
export const users = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'student'
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'student'
  },
  {
    _id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  }
];

// Courses data
export const courses = [
  {
    _id: '1',
    title: 'Introduction to Mathematics',
    description: 'Fundamental concepts of algebra, geometry, and calculus',
    instructor: 'Dr. Alan Smith',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 42,
    modules: [
      {
        _id: 'm1',
        title: 'Module 1: Algebra Fundamentals',
        lessons: [
          { _id: 'l1', title: 'Variables and Expressions', type: 'video', completed: false },
          { _id: 'l2', title: 'Solving Equations', type: 'video', completed: false },
          { _id: 'l3', title: 'Assignment: Equation Practice', type: 'assignment', completed: false },
          { _id: 'l4', title: 'Quiz: Algebra Basics', type: 'quiz', completed: false }
        ]
      },
      {
        _id: 'm2',
        title: 'Module 2: Geometry Concepts',
        lessons: [
          { _id: 'l5', title: 'Points, Lines, and Planes', type: 'video', completed: false },
          { _id: 'l6', title: 'Triangles and Polygons', type: 'reading', completed: false },
          { _id: 'l7', title: 'Assignment: Geometric Proofs', type: 'assignment', completed: false },
          { _id: 'l8', title: 'Quiz: Geometry Basics', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    _id: '2',
    title: 'English Literature',
    description: 'Classic and contemporary literary works and analysis',
    instructor: 'Prof. Emily Johnson',
    image: 'https://images.pexels.com/photos/1448709/pexels-photo-1448709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 38,
    modules: [
      {
        _id: 'm1',
        title: 'Module 1: Introduction to Literary Analysis',
        lessons: [
          { _id: 'l1', title: 'Elements of Literature', type: 'video', completed: false },
          { _id: 'l2', title: 'Reading: Shakespeare\'s Sonnets', type: 'reading', completed: false },
          { _id: 'l3', title: 'Assignment: Literary Analysis Essay', type: 'assignment', completed: false }
        ]
      }
    ]
  },
  {
    _id: '3',
    title: 'Introduction to Computer Science',
    description: 'Programming fundamentals and computational thinking',
    instructor: 'Dr. Robert Chen',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 55,
    modules: [
      {
        _id: 'm1',
        title: 'Module 1: Programming Basics',
        lessons: [
          { _id: 'l1', title: 'Variables and Data Types', type: 'video', completed: false },
          { _id: 'l2', title: 'Control Structures', type: 'video', completed: false },
          { _id: 'l3', title: 'Assignment: Simple Programs', type: 'assignment', completed: false }
        ]
      }
    ]
  }
];

// Grades data
export const grades = [
  {
    _id: '1',
    studentId: '1',
    courseId: '1',
    courseName: 'Introduction to Mathematics',
    score: 92,
    feedback: 'Excellent work on the algebra section!',
    date: '2023-06-15'
  },
  {
    _id: '2',
    studentId: '1',
    courseId: '2',
    courseName: 'English Literature',
    score: 88,
    feedback: 'Good analysis, but could improve citation format.',
    date: '2023-06-10'
  },
  {
    _id: '3',
    studentId: '2',
    courseId: '1',
    courseName: 'Introduction to Mathematics',
    score: 78,
    feedback: 'Needs improvement in geometry concepts.',
    date: '2023-06-12'
  },
  {
    _id: '4',
    studentId: '2',
    courseId: '3',
    courseName: 'Introduction to Computer Science',
    score: 95,
    feedback: 'Outstanding programming skills demonstrated.',
    date: '2023-06-05'
  }
];