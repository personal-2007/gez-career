class Certification {
  constructor(data) {
    this.id = data.id || `cert_${Date.now()}`;
    this.name = data.name;
    this.issuingOrganization = data.issuingOrganization;
    this.issueDate = data.issueDate;
    this.credentialId = data.credentialId;
  }
}
module.exports = Certification;
