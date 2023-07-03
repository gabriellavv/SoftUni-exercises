function cat(array) {


    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let currentCat of array) {

        let [name, age] = currentCat.split(" ");

        let tempCat = new Cat(name, age);
        tempCat.meow();
    }
}

cat(['Mellow 2', 'Tom 5']);