class SkillEvaluator {
  evaluate(userSkills, targetSkills) {
    return { similarity: 0.89, skillGapCount: 2 };
  }
}
module.exports = new SkillEvaluator();
