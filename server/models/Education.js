class Education {
  constructor(data) {
    this.id = data.id || `edu_${Date.now()}`;
    this.institution = data.institution;
    this.degree = data.degree;
    this.fieldOfStudy = data.fieldOfStudy;
    this.startYear = data.startYear;
    this.endYear = data.endYear;
    this.gpa = data.gpa;
  }
}
module.exports = Education;
