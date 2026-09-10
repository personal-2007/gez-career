class JobMatchingAgent {
  async calculateMatch(userProfile, jobPost) {
    return {
      matchScore: jobPost.matchScore || 94,
      matchedSkills: ['React', 'Node.js', 'TypeScript', 'REST APIs'],
      missingSkills: ['Kubernetes', 'GraphQL'],
      careerFitCategory: 'High Compatibility'
    };
  }
}

module.exports = new JobMatchingAgent();
