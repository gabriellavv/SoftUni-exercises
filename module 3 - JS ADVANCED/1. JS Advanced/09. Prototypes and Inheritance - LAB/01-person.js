function createPerson(firstName, lastName) {
    let result = {
        firstName,
        lastName,
    }

    Object.defineProperty(result, "fullName", {
        enumerable: true,
        configurable: true,

        get() {
            return `${this.firstName} ${this.lastName}`;
        },

        set(fullName) {
            let [first, last] = fullName.split(" ");
            this.firstName = first;
            this.lastName = last;
        },
    })
    return result;
}


// Sample input:

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov

person.firstName = "George";
console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
