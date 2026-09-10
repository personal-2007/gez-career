class Skill {
  constructor(name, level = 'Intermediate', yearsOfExperience = 2) {
    this.id = `sk_${Date.now()}`;
    this.name = name;
    this.level = level;
    this.yearsOfExperience = yearsOfExperience;
  }
}
module.exports = Skill;
