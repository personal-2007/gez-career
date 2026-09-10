class CareerAgent {
  async askAssistant(message, conversationHistory = []) {
    let responseText = "I'm your GEZ AI Career Assistant. How can I help you accelerate your tech job search or interview preparation today?";
    const msg = message.toLowerCase();

    if (msg.includes('salary') || msg.includes('pay') || msg.includes('negotiate')) {
      responseText = "When negotiating salary, research market medians for your location using our Salary Explorer, highlight unique achievements or competing offers, and present a realistic range with a clear minimum baseline.";
    } else if (msg.includes('resume') || msg.includes('ats')) {
      responseText = "To maximize ATS compliance, focus on matching exact keywords from the job description, using standard bullet points, avoiding complex graphic tables, and stating quantified impacts.";
    } else if (msg.includes('interview')) {
      responseText = "For interviews, structure your stories using the STAR method (Situation, Task, Action, Result). Try out our interactive Mock Interview simulator in the AI Suite!";
    }

    return {
      sender: 'AI Career Assistant',
      message: responseText,
      timestamp: new Date().toISOString(),
      actionSuggestions: ['Explore Salaries', 'Run ATS Resume Audit', 'Start Mock Interview']
    };
  }
}

module.exports = new CareerAgent();
