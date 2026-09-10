module.exports = {
  systemPrompt: `You are a specialized AI Job Matcher. Compare user skills, experience years, and career preferences against job postings to calculate a semantic match percentage and identify missing key skills.`,
  generatePrompt: (userProfile, jobPost) => `
USER PROFILE: ${JSON.stringify(userProfile)}
JOB POST: ${JSON.stringify(jobPost)}
  `
};
