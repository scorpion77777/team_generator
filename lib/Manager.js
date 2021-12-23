const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    
    // super calls Employee
    super(name, id, email);

    // this grabs officeNumber
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // getRole() = Manager;
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
