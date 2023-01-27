class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

interface EmployeeInterface {
    designation: string;
    salary: number;
    officeTime: string;
    printEmployee(): void;
}

class Employee extends User implements EmployeeInterface {
    designation: string;
    salary: number;
    officeTime: string;

    constructor(firstName: string, lastName: string, age: number, designation: string, salary: number, officeTime: string) {
        super(firstName, lastName, age);
        this.designation = designation;
        this.salary = salary;
        this.officeTime = officeTime;
    }

    printEmployee(): void {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Designation: ${this.designation}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Office Time: ${this.officeTime}`);
    }
}

let emp = new Employee("John", "Doe", 30, "Developer", 50000, "9AM-5PM");
emp.printEmployee();