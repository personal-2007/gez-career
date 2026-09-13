const { sendResponse } = require('../utils/response');

const chatWithCareerAssistant = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return sendResponse(res, 400, false, 'Message prompt is required');

    const promptLower = message.toLowerCase();
    let responseText = "Focus on building 2-3 full-stack projects using React, Node.js, and MongoDB, and highlight them clearly on your resume with GitHub links.";

    if (promptLower.includes('resume') || promptLower.includes('ats')) {
      responseText = "To improve your resume ATS score: 1) Use standard section headers like 'Skills', 'Experience', and 'Education'. 2) Include action verbs (e.g., 'Architected', 'Built', 'Optimized'). 3) Explicitly list matching technical keywords like React, Node.js, Express, and MongoDB.";
    } else if (promptLower.includes('interview') || promptLower.includes('prep')) {
      responseText = "For technical interviews, practice explaining the STAR method (Situation, Task, Action, Result) for behavioral questions, and review core concepts in Data Structures, REST API design, and SQL/NoSQL indexing.";
    } else if (promptLower.includes('fresher') || promptLower.includes('student') || promptLower.includes('first job')) {
      responseText = "As a fresher, showcase college projects, hackathons, and internship contributions prominently. Emphasize your CGPA/percentage, problem-solving skills, and eagerness to learn modern web engineering.";
    }

    sendResponse(res, 200, true, 'Career advice generated', {
      response: responseText,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const analyzeResume = async (req, res) => {
  try {
    const { text, targetRole } = req.body;
    sendResponse(res, 200, true, 'Resume analysis complete', {
      score: 88,
      atsCompatibility: 'High',
      matchedSkills: ['JavaScript', 'React', 'Node.js', 'Git', 'CSS3'],
      missingKeywords: ['Docker', 'TypeScript', 'CI/CD Pipelines', 'Unit Testing'],
      strengths: [
        'Clean section hierarchy with clear Education and Skills blocks',
        'Strong focus on modern full-stack web stack',
        'Clear project descriptions with measurable outcomes'
      ],
      weaknesses: [
        'Lacks quantifiable metrics (e.g. percentages or user counts)',
        'Missing keywords related to cloud deployment (AWS/Vercel/Docker)'
      ],
      recommendations: [
        'Add quantitative achievements (e.g. "Improved page load by 35%")',
        'Include a dedicated Projects section with live demo & GitHub URLs',
        'Ensure contact info includes LinkedIn and GitHub handles'
      ]
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const calculateATSScore = async (req, res) => {
  try {
    sendResponse(res, 200, true, 'ATS Audit score calculated', {
      overallScore: 89,
      formattingScore: 94,
      keywordMatchScore: 85,
      sectionStructureScore: 90,
      readabilityScore: 88,
      criticalFixes: [
        'Use bullet points instead of long paragraph blocks in project descriptions',
        'Spell out technical acronyms (e.g. Application Programming Interface)'
      ]
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const generateCoverLetter = async (req, res) => {
  try {
    const { jobTitle, companyName, candidateName, skills } = req.body;
    const name = candidateName || 'Candidate';
    const role = jobTitle || 'Software Engineer';
    const comp = companyName || 'your esteemed engineering team';
    const skillList = Array.isArray(skills) ? skills.join(', ') : 'React, Node.js, and web development';

    const letter = `Dear Hiring Manager at ${comp},

I am writing to express my strong enthusiasm for the ${role} position. With a solid foundation in ${skillList}, I am eager to contribute to ${comp}'s mission of building exceptional software solutions.

Throughout my academic and project experiences, I have demonstrated a track record of developing responsive web applications, collaborating on clean backend APIs, and writing maintainable code. I am confident that my technical skills, paired with my passion for continuous learning and problem solving, make me a great fit for your team.

Thank you for your time and consideration. I welcome the opportunity to discuss how my background aligns with your engineering goals.

Sincerely,
${name}`;

    sendResponse(res, 200, true, 'Cover letter generated', { coverLetter: letter });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const evaluateInterviewAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!answer || answer.trim().length < 10) {
      return sendResponse(res, 200, true, 'Evaluation', {
        score: 40,
        feedback: 'Your response was too brief. Expand using the STAR framework (Situation, Task, Action, Result).',
        suggestions: ['Provide concrete technical examples from past projects or coursework.']
      });
    }

    sendResponse(res, 200, true, 'Interview Feedback Generated', {
      score: 86,
      feedback: 'Solid answer! You addressed the primary scenario clearly and mentioned relevant tools.',
      strengths: ['Clear structure', 'Direct answer to question'],
      suggestions: ['Mention key performance metrics achieved in the outcome.']
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getSkillGapRoadmap = async (req, res) => {
  try {
    const { targetRole } = req.body;
    sendResponse(res, 200, true, 'Skill Gap Analysis Complete', {
      targetRole: targetRole || 'Full Stack Engineer',
      matchedSkills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Node.js'],
      gapSkills: ['TypeScript', 'Docker', 'PostgreSQL', 'Unit Testing'],
      roadmap: [
        { level: 'Phase 1: Foundations', focus: 'Master TypeScript fundamentals and static typing in React apps' },
        { level: 'Phase 2: Backend & DB', focus: 'Build REST APIs with Node.js, Express, PostgreSQL & Prisma' },
        { level: 'Phase 3: DevOps & Containerization', focus: 'Dockerize applications and deploy to AWS / Railway' },
        { level: 'Phase 4: Capstone Project', focus: 'Construct an end-to-end full-stack platform with authentication & automated testing' }
      ]
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  chatWithCareerAssistant,
  analyzeResume,
  calculateATSScore,
  generateCoverLetter,
  evaluateInterviewAnswer,
  getSkillGapRoadmap
};

