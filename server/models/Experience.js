class Experience {
  constructor(data) {
    this.id = data.id || `exp_${Date.now()}`;
    this.company = data.company;
    this.title = data.title;
    this.location = data.location;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.current = data.current || false;
    this.description = data.description;
  }
}
module.exports = Experience;
