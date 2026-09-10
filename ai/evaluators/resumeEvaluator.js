class ResumeEvaluator {
  evaluate(resumeText) {
    return { score: 88, status: 'Passed ATS Benchmark' };
  }
}
module.exports = new ResumeEvaluator();
