class Project {
  constructor(data) {
    this.id = data.id || `proj_${Date.now()}`;
    this.title = data.title;
    this.description = data.description;
    this.technologies = data.technologies || [];
    this.link = data.link;
  }
}
module.exports = Project;
