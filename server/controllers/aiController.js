const careerAgent = require('../../ai/agents/careerAgent');
const interviewAgent = require('../../ai/agents/interviewAgent');
const resumeAgent = require('../../ai/agents/resumeAgent');
const { sendResponse } = require('../utils/response');

const chatWithCareerAssistant = async (req, res) => {
  const { message, history } = req.body;
  const reply = await careerAgent.askAssistant(message, history);
  sendResponse(res, 200, true, 'AI Assistant Response', reply);
};

const evaluateInterviewAnswer = async (req, res) => {
  const { question, answer } = req.body;
  const feedback = await interviewAgent.evaluateResponse(question, answer);
  sendResponse(res, 200, true, 'Interview Feedback Generated', feedback);
};

const getSkillGapRoadmap = async (req, res) => {
  const { currentSkills, targetRole } = req.body;
  sendResponse(res, 200, true, 'Skill Gap Analysis Complete', {
    targetRole: targetRole || 'Senior AI Engineer',
    matchedSkills: ['React', 'Node.js', 'REST APIs'],
    gapSkills: ['Vector Databases', 'PyTorch / LangChain', 'Kubernetes'],
    roadmap: [
      { week: 'Weeks 1-2', focus: 'Vector Embeddings & Pinecone / Weaviate' },
      { week: 'Weeks 3-4', focus: 'LangChain & Orchestration Agents' },
      { week: 'Weeks 5-8', focus: 'Containerized Model Microservices & Docker' }
    ]
  });
};

module.exports = { chatWithCareerAssistant, evaluateInterviewAnswer, getSkillGapRoadmap };
