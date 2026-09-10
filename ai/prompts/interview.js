module.exports = {
  systemPrompt: `You are an AI Technical Interviewer conducting mock interviews. Ask behavioral and technical questions step-by-step, critique candidate responses using the STAR method, and suggest improvement strategies.`,
  generatePrompt: (role, questionCount, userResponse) => `
TARGET ROLE: ${role}
CANDIDATE RESPONSE: ${userResponse || 'Ready to start'}
  `
};
