function solution() {

    // Define several classes, that represent a company’s employee records. 
    // Every employee has a name and age, a salary, and a list of tasks, 
    // while every position has specific properties not present in the others. 
    // Place all common functionality in a parent abstract class. Follow the diagram below:

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        };

        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ${currentTask}`);
            this.tasks.push(currentTask);
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        };
    };


    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`is working on a simple task.`)
        }
    };

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("is working on a complicated task.");
            this.tasks.push("is taking time off work.");
            this.tasks.push("is supervising junior workers.");
        }
    };

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        };

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        };
    };

    return {Employee, Junior, Senior, Manager};
};



// Sample execution:
 const classes = solution();
    const junior = new classes.Junior('Ivan', 25);

    junior.work();
    junior.work();

    junior.salary = 5811;
    junior.collectSalary();

    const sinior = new classes.Senior('Alex', 31);

    sinior.work();
    sinior.work();
    sinior.work();
    sinior.work();

    sinior.salary = 12050;
    sinior.collectSalary();

    const manager = new classes.Manager('Tom', 55);

    manager.salary = 15000;
    manager.collectSalary();
    manager.dividend = 2500;
    manager.collectSalary();
