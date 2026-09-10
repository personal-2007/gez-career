const mockJobs = [
  {
    id: 'job_101',
    title: 'Senior Full Stack AI Engineer',
    company: {
      id: 'comp_1',
      name: 'Nexus AI Tech',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150',
      rating: 4.8,
      location: 'San Francisco, CA (Hybrid)'
    },
    location: 'San Francisco, CA',
    type: 'Full-time',
    workplaceType: 'Hybrid',
    salaryRange: '$160,000 - $210,000 / yr',
    experienceLevel: 'Senior-level',
    postedAt: '2 hours ago',
    description: 'We are seeking an experienced Full Stack AI Engineer to spearhead our next-generation automated LLM career workflows.',
    requirements: ['5+ years React & Node.js', 'PyTorch / OpenAI API integrations', 'PostgreSQL & Vector Databases'],
    skills: ['React', 'Node.js', 'Python', 'LLM', 'TypeScript', 'GraphQL'],
    matchScore: 96,
    applicantCount: 24
  },
  {
    id: 'job_102',
    title: 'Lead Product UI/UX Designer',
    company: {
      id: 'comp_2',
      name: 'Sphere Cloud Systems',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150',
      rating: 4.6,
      location: 'London, UK (Remote)'
    },
    location: 'London, UK',
    type: 'Full-time',
    workplaceType: 'Remote',
    salaryRange: '£90,000 - £120,000 / yr',
    experienceLevel: 'Senior-level',
    postedAt: '1 day ago',
    description: 'Shape the visual language and user experience for our enterprise developer platforms serving millions worldwide.',
    requirements: ['Expert in Figma & Framer', 'Design System Architecture', 'User Research & Micro-interactions'],
    skills: ['Figma', 'UX Research', 'Glassmorphism Design', 'Prototyping', 'Design Systems'],
    matchScore: 91,
    applicantCount: 52
  },
  {
    id: 'job_103',
    title: 'Backend Platform Architect (Go / Rust)',
    company: {
      id: 'comp_3',
      name: 'Vanguard Cyber',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150',
      rating: 4.9,
      location: 'Berlin, Germany',
    },
    location: 'Berlin, Germany',
    type: 'Full-time',
    workplaceType: 'On-site',
    salaryRange: '€110,000 - €145,000 / yr',
    experienceLevel: 'Executive',
    postedAt: '3 days ago',
    description: 'Architect low-latency distributed microservices for real-time threat detection and high-volume data streams.',
    requirements: ['Deep Go or Rust mastery', 'Kafka / gRPC / Kubernetes', 'High throughput system design'],
    skills: ['Go', 'Rust', 'Kubernetes', 'gRPC', 'Distributed Systems', 'Docker'],
    matchScore: 88,
    applicantCount: 18
  },
  {
    id: 'job_104',
    title: 'Junior Frontend Developer (React)',
    company: {
      id: 'comp_4',
      name: 'Horizon Innovations',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150',
      rating: 4.5,
      location: 'Toronto, Canada (Hybrid)'
    },
    location: 'Toronto, Canada',
    type: 'Full-time',
    workplaceType: 'Hybrid',
    salaryRange: '$75,000 - $95,000 / yr',
    experienceLevel: 'Entry-level',
    postedAt: 'Just now',
    description: 'Build fast, responsive web components and collaborate directly with senior frontend engineers and product managers.',
    requirements: ['React / JavaScript fundamentals', 'CSS Tailwind / Vanilla CSS', 'REST API consumption'],
    skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git'],
    matchScore: 94,
    applicantCount: 12
  }
];

module.exports = mockJobs;
