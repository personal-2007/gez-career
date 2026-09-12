const { dbInstance } = require('../../server/config/database');
const { seedAdmin } = require('../../server/scripts/seedAdmin');
const mockJobs = require('./jobsSeed');
const mockCompanies = require('./companiesSeed');
const mockUsers = require('./usersSeed');

const seedDatabase = async () => {
  console.log('[GEZ SEEDER] Seeding mock database records...');
  
  dbInstance.jobs = [...mockJobs];
  dbInstance.companies = [...mockCompanies];
  dbInstance.users = [...mockUsers];

  dbInstance.profiles = [
    {
      userId: 'usr_candidate_1',
      headline: 'Senior Full Stack & AI Developer',
      location: 'San Francisco, CA',
      about: 'Experienced software engineer focused on React, Node.js, and Generative AI applications.',
      completionScore: 92,
      skills: ['React', 'Node.js', 'Python', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker'],
      experience: [
        {
          id: 'exp_1',
          title: 'Senior Software Engineer',
          company: 'TechCorp Global',
          startDate: '2022',
          endDate: 'Present',
          current: true,
          description: 'Architected high-scale microservices and built responsive React user interfaces.'
        }
      ],
      education: [
        {
          id: 'edu_1',
          institution: 'University of California, Berkeley',
          degree: 'B.S.',
          fieldOfStudy: 'Computer Science',
          startYear: '2017',
          endYear: '2021'
        }
      ]
    }
  ];

  dbInstance.applications = [
    {
      id: 'app_1',
      jobId: 'job_101',
      userId: 'usr_candidate_1',
      job: mockJobs[0],
      status: 'reviewing',
      appliedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      matchScore: 96,
      timeline: [
        { status: 'applied', label: 'Application Submitted', timestamp: '2 days ago' },
        { status: 'reviewing', label: 'Under Review by Recruiter', timestamp: 'Yesterday' }
      ]
    }
  ];

  dbInstance.salaries = [
    { id: 'sal_1', role: 'Full Stack Engineer', location: 'San Francisco, CA', min: 130000, max: 210000, median: 175000 },
    { id: 'sal_2', role: 'UI/UX Designer', location: 'London, UK', min: 70000, max: 120000, median: 95000 },
    { id: 'sal_3', role: 'Backend Architect', location: 'Berlin, Germany', min: 90000, max: 150000, median: 120000 }
  ];

  dbInstance.reviews = [
    {
      id: 'rev_1',
      companyId: 'comp_1',
      title: 'Amazing culture and fast-paced AI innovation',
      rating: 5,
      role: 'Senior Software Engineer',
      pros: 'Great team, competitive pay, cutting edge AI tech stack.',
      cons: 'Fast deadlines during major launches.',
      date: '1 month ago'
    }
  ];

  dbInstance.notifications = [
    {
      id: 'notif_1',
      userId: 'usr_candidate_1',
      title: 'Application Status Update',
      message: 'Nexus AI Tech moved your application to Under Review!',
      read: false,
      timestamp: '2 hours ago'
    },
    {
      id: 'notif_2',
      userId: 'usr_candidate_1',
      title: 'New Recommended Job',
      message: 'Lead Product UI/UX Designer matches your career preferences.',
      read: true,
      timestamp: '1 day ago'
    }
  ];

  await seedAdmin();

  console.log(`[GEZ SEEDER] Seeded: ${dbInstance.jobs.length} jobs, ${dbInstance.companies.length} companies, ${dbInstance.users.length} users.`);
  return true;
};

if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
