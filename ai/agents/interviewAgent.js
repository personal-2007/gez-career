class InterviewAgent {
  async evaluateResponse(question, response) {
    return {
      clarityScore: 88,
      technicalAccuracyScore: 92,
      starMethodScore: 85,
      overallRating: 'Strong Answer',
      feedback: 'Excellent explanation of trade-offs between SQL indexing strategies and memory overhead. Consider adding a brief example of a production incident resolved.',
      suggestedFollowUp: 'How would you scale this solution if transaction throughput increased by 10x?'
    };
  }
}

module.exports = new InterviewAgent();
