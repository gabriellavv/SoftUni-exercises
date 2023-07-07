function employees(input) {

    class Employees {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }

        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

    for(let person of input ) {
        let currentEmployee = new Employees(person, person.length);
        currentEmployee.print();
    }
}

employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);