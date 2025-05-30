// Backend server implementation
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Mock data for demonstration (in a real app, this would use MongoDB)
import { users, courses, grades } from './mockData.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Authentication routes
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // In a real app, we would hash the password and store in database
  const newUser = {
    _id: (users.length + 1).toString(),
    name,
    email,
    role,
    password // In a real app, this would be hashed
  };
  
  users.push(newUser);
  
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  
  // In a real app, we would compare hashed passwords
  if (user.password !== password) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  
  // In a real app, we would generate a JWT token
  const token = 'mock-jwt-token';
  
  // Set cookie
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });
  
  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  res.json({ user: userWithoutPassword });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

app.get('/api/auth/me', (req, res) => {
  // In a real app, we would verify the JWT token
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  
  // Mock user authentication - in a real app, we would decode the token
  // and fetch the user from the database
  const user = users[0];
  const { password: _, ...userWithoutPassword } = user;
  
  res.json(userWithoutPassword);
});

// Course routes
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c._id === req.params.id);
  
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  
  res.json(course);
});

app.post('/api/courses', (req, res) => {
  const { title, description, instructor, image } = req.body;
  
  const newCourse = {
    _id: (courses.length + 1).toString(),
    title,
    description,
    instructor,
    image,
    students: 0,
    modules: []
  };
  
  courses.push(newCourse);
  
  res.status(201).json(newCourse);
});

// Grade routes
app.get('/api/grades/student/:studentId', (req, res) => {
  const studentGrades = grades.filter(g => g.studentId === req.params.studentId);
  res.json(studentGrades);
});

app.post('/api/grades', (req, res) => {
  const { studentId, courseId, score, feedback } = req.body;
  
  const newGrade = {
    _id: (grades.length + 1).toString(),
    studentId,
    courseId,
    score,
    feedback,
    date: new Date().toISOString()
  };
  
  grades.push(newGrade);
  
  res.status(201).json(newGrade);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});