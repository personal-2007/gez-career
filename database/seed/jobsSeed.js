const mockJobs = [
  {
    id: 'job_101',
    title: 'Junior Software Engineer (Fresher / Graduate)',
    company: {
      id: 'comp_1',
      name: 'Nexus Tech Global',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150',
      rating: 4.8,
      industry: 'Software & Cloud'
    },
    companyId: 'comp_1',
    location: 'San Francisco, CA',
    country: 'United States',
    city: 'San Francisco',
    workMode: 'hybrid',
    employmentType: 'full-time',
    experienceLevel: 'fresher',
    salary: { min: 85000, max: 110000, currency: 'USD', period: 'yearly' },
    salaryRange: '$85,000 - $110,000 / yr',
    postedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    description: 'Great entry-level opportunity for recent computer science graduates. Build full-stack web applications using React, Node.js, and MongoDB.',
    responsibilities: [
      'Develop clean, modular React frontend components',
      'Assist in constructing REST API endpoints in Express.js',
      'Write automated unit and integration tests'
    ],
    requirements: ['Degree in CS / IT or related field', 'Strong JavaScript & React fundamentals', 'Understanding of git & version control'],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    benefits: ['Health & Dental Insurance', 'Learning Stipend $2,000/yr', 'Flexible Work Hours', 'Visa Sponsorship Available'],
    visaSponsorship: true,
    matchScore: 96,
    applicantCount: 14,
    status: 'active'
  },
  {
    id: 'job_102',
    title: 'Frontend Developer Intern',
    company: {
      id: 'comp_2',
      name: 'Sphere Cloud Systems',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150',
      rating: 4.6,
      industry: 'SaaS & Enterprise'
    },
    companyId: 'comp_2',
    location: 'London, UK',
    country: 'United Kingdom',
    city: 'London',
    workMode: 'remote',
    employmentType: 'internship',
    experienceLevel: 'fresher',
    salary: { min: 35000, max: 45000, currency: 'GBP', period: 'yearly' },
    salaryRange: '£35,000 - £45,000 / yr',
    postedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    description: 'Remote internship program for freshers interested in modern UI/UX design engineering and React web components.',
    responsibilities: [
      'Collaborate with designers to implement sleek user interface designs',
      'Optimize web pages for maximum performance and mobile responsiveness',
      'Participate in daily agile standups'
    ],
    requirements: ['Final year student or recent graduate', 'Figma to React translation skills', 'CSS3 & Responsive Design'],
    skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Figma'],
    benefits: ['Full Remote Setup Allowance', 'Mentorship Program', 'Path to Full-time Role'],
    visaSponsorship: false,
    matchScore: 92,
    applicantCount: 28,
    status: 'active'
  },
  {
    id: 'job_103',
    title: 'Associate Backend Engineer (Node.js)',
    company: {
      id: 'comp_3',
      name: 'Vanguard Cyber',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150',
      rating: 4.9,
      industry: 'Cybersecurity'
    },
    companyId: 'comp_3',
    location: 'Berlin, Germany',
    country: 'Germany',
    city: 'Berlin',
    workMode: 'onsite',
    employmentType: 'full-time',
    experienceLevel: 'entry-level',
    salary: { min: 65000, max: 80000, currency: 'EUR', period: 'yearly' },
    salaryRange: '€65,000 - €80,000 / yr',
    postedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    description: 'Join our security backend squad in Berlin. Perfect role for entry-level developers with 0-2 years experience in backend architecture.',
    responsibilities: [
      'Design RESTful APIs and database schemas',
      'Optimize MongoDB queries and index performance',
      'Implement JWT authentication and security headers'
    ],
    requirements: ['0-2 years backend experience', 'Node.js & Express proficiency', 'Database modeling (MongoDB / SQL)'],
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Docker'],
    benefits: ['Relocation Support to Berlin', 'Public Transport Pass', '30 Days Paid Vacation'],
    visaSponsorship: true,
    matchScore: 89,
    applicantCount: 19,
    status: 'active'
  },
  {
    id: 'job_104',
    title: 'Graduate Full Stack Developer',
    company: {
      id: 'comp_4',
      name: 'Horizon Innovations',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150',
      rating: 4.5,
      industry: 'Fintech'
    },
    companyId: 'comp_4',
    location: 'Toronto, Canada',
    country: 'Canada',
    city: 'Toronto',
    workMode: 'hybrid',
    employmentType: 'full-time',
    experienceLevel: 'fresher',
    salary: { min: 70000, max: 88000, currency: 'CAD', period: 'yearly' },
    salaryRange: '$70,000 - $88,000 CAD / yr',
    postedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    description: 'Accelerated graduate rotational program in full stack engineering. Work across frontend React, Node.js API layers, and automated testing.',
    responsibilities: [
      'Rotate through engineering teams every 6 months',
      'Build end-to-end features for fintech client web applications',
      'Participate in pair programming and code reviews'
    ],
    requirements: ['Computer Science or Engineering Degree (2025/2026)', 'Problem-solving mindset', 'Basic data structures & algorithms knowledge'],
    skills: ['React', 'Node.js', 'Python', 'SQL', 'Git'],
    benefits: ['Health Insurance', 'RRSP Matching', 'Annual Tech Budget'],
    visaSponsorship: true,
    matchScore: 94,
    applicantCount: 31,
    status: 'active'
  },
  {
    id: 'job_105',
    title: 'Global Remote Web Developer (Fresher Welcomed)',
    company: {
      id: 'comp_1',
      name: 'Nexus Tech Global',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150',
      rating: 4.8,
      industry: 'Software & Cloud'
    },
    companyId: 'comp_1',
    location: 'Remote / Global',
    country: 'Remote',
    city: 'Worldwide',
    workMode: 'remote',
    employmentType: 'full-time',
    experienceLevel: 'fresher',
    salary: { min: 50000, max: 75000, currency: 'USD', period: 'yearly' },
    salaryRange: '$50,000 - $75,000 USD / yr',
    postedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    description: 'Global remote opening open to talented freshers from any country. Work asynchronously on open web tech stack.',
    responsibilities: [
      'Develop dynamic web features using JavaScript and modern frameworks',
      'Communicate asynchronously via Slack and GitHub',
      'Document feature specifications and user flows'
    ],
    requirements: ['High self-motivation and strong written English', 'Solid portfolio of personal projects', 'HTML5, CSS3, JavaScript proficiency'],
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git'],
    benefits: ['100% Worldwide Remote', 'Flexible Work Schedule', 'Equipment Allowance'],
    visaSponsorship: false,
    matchScore: 97,
    applicantCount: 65,
    status: 'active'
  }
];

module.exports = mockJobs;

