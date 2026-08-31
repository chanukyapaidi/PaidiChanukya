import type { PersonalInfo, SkillCategory, Project, EducationItem, CertificationItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'PAIDI CHANUKYA',
  title: 'Aspiring Software Development Engineer',
  tagline: 'Passionate about software development, problem solving, and building practical applications that deliver real-world value.',
  summary: 'Enthusiastic and self-motivated fresher with a passion for software development and technology. Familiar with JavaScript, Python, HTML, CSS, and programming fundamentals, with experience building small projects. Looking for an opportunity to grow skills and contribute to real-world applications.',
  location: 'Vadodara, India',
  phone: '+91 8309183938',
  email: 'chanupaidi123@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/chanukya-paidi/', // Editable placeholder
  githubUrl: 'https://github.com/chanukyapaidi',       // Editable placeholder
  resumeUrl: '/resume.pdf',
  degree: 'Bachelor of Technology in Computer Science',
  university: 'Parul University',
  graduationYear: '2027',
  careerGoal: 'Aspiring Software Development Engineer',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'Tools & Core CS',
    skills: [
      { name: 'DBMS' },
      { name: 'Computer Networks' },
      { name: 'GitHub' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication' },
      { name: 'Teamwork' },
      { name: 'Time Management' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'bloodprint-ai',
    title: 'BloodPrint AI',
    subtitle: 'Fingerprint-Based Blood Group Prediction Using CNN',
    category: 'AI & Computer Vision',
    shortDescription: 'Designed and trained a CNN model for multi-class blood group classification (A, B, AB, O) using fingerprint datasets with real-time web prediction.',
    description: 'Designed and trained a Convolutional Neural Network (CNN) model for multi-class blood group classification (A, B, AB, O) using fingerprint datasets. Features complete image preprocessing, real-time image upload, and interactive visual feedback for prediction probabilities.',
    technologies: [
      'Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV', 'NumPy', 'Pandas',
      'Scikit-learn', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Chart.js'
    ],
    keyFeatures: [
      'CNN-based multi-class classification (A, B, AB, O)',
      'Fingerprint image preprocessing (resizing, normalization, grayscale conversion, data augmentation)',
      'Fingerprint upload and real-time prediction functionality',
      'Prediction probability visualization & confidence score breakdown',
      'Integrated dynamic visualization using Chart.js',
      'Responsive web interface designed with Bootstrap, HTML/CSS, and JavaScript'
    ],
    implementationDetails: [
      'Developed a responsive web application with real-time fingerprint upload and prediction functionality.',
      'Integrated dynamic visualization using Chart.js to display prediction probabilities and confidence scores.',
      'Designed responsive frontend UI using Bootstrap, HTML/CSS, and JavaScript.'
    ],
    githubUrl: 'https://github.com/chanukyapaidi/bloodprint-ai',
    visualType: 'bloodprint',
    disclaimer: 'Academic & Technical AI Demonstration: This project explores computer vision and deep learning classification techniques. It is an academic demonstration and not intended for clinical medical validation.'
  },
  {
    id: 'ai-travel-companion',
    title: 'AI Travel Companion',
    subtitle: 'AI-Powered Smart Travel Planning Platform',
    category: 'Full-Stack Web App',
    shortDescription: 'Designed and developed a full-stack AI-powered travel planning platform for generating personalized itineraries, recommendations, and destination guidance.',
    description: 'A comprehensive full-stack travel planning ecosystem featuring AI chatbot guidance, interactive trip itineraries, expense monitoring with analytics, and integration with mapping and weather services.',
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
      'OpenAI API', 'Google Maps API', 'OpenWeather API', 'Tailwind CSS', 'JWT', 'Recharts'
    ],
    frontendTech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    backendTech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    externalApis: ['OpenAI API', 'Google Maps API', 'OpenWeather API'],
    keyFeatures: [
      'AI-powered travel planning & intelligent chatbot assistant',
      'Day-by-day trip planning, packing list generation, visa guidance & destination tips',
      'Secure RESTful APIs with JWT authentication & user management',
      'Trip management, expense tracking & favorite destinations',
      'Real-time budget monitoring & interactive analytics with Recharts',
      'Google Maps integration for location-based search, nearby attractions & route planning',
      'Destination weather information powered by OpenWeather API'
    ],
    githubUrl: 'https://github.com/chanukyapaidi/ai-travel-companion',
    visualType: 'travel'
  }
];

export const educationHistory: EducationItem[] = [
  {
    institution: 'Parul University',
    degree: 'Bachelor of Technology in Computer Science',
    period: '07/2023 – 05/2027',
    score: 'GPA: 6.95',
    location: 'Vadodara, India',
  },
  {
    institution: 'Tirumala Junior College',
    degree: 'High School',
    period: '05/2023',
    score: 'Percentage: 93%',
    location: 'Visakhapatnam, India',
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'Computer Networks',
    issuer: 'IIT Kharagpur',
  },
  {
    title: 'HTML5 & CSS3',
    issuer: 'Udemy',
  },
];
