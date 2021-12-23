const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
      
    super(name, id, email);
    // getGithub();//only for Engineer
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
