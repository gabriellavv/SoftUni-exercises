function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick(array) { 
      let input = document.getElementsByTagName("textarea")[0].value;      // взимаме си стойността от textarea-та, която винаги идва под формата на текст;
      let inputArr = JSON.parse(input);     // за да можем да работим със текста го обръщаме в масив;
      let restaurants = {};  // създаваме си обект, в който да съхраняваме информация за ресторантите;

      for (let arr of inputArr) {       // всеки индекс от масива съхранява информация за един ресторант;
         let [restaurant, info] = arr.split(" - ");           // деструктурираме на името на ресторанта и останалите данни
         let workerInfo = info.split(", ").map((x) => {           // останалите данни сплитваме, за да разделим работниците един от друг и прилагаме мап, който да премине през всички работници и 
            let [name, salary] = x.split(' ');                    // сплитваме отново за да отделим имената от заплатите
            return { name, salary: Number(salary) };              // мапа пълни масив със обекти, които съдържат име и заплата
         });

         if (!restaurants.hasOwnProperty(restaurant)) {           // ако нямаме ресторант с текущото име в обекта в, който съхраняваме ресторантите, си добавяме такъв
            restaurants[restaurant] = {
               restaurant,
               workers: [],
               getAverageSalary() {
                  return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length;
               },
            }
         }

         // добавяме в масива с работници, работниците от настоящия индекс от масива с входните данни;
         restaurants[restaurant].workers = restaurants[restaurant].workers.concat(workerInfo);  
      }

      // след като вече сме си взели всички данни за ресторанти и работници, сортираме ресторантите по най-голяма средна заплата
      let sortedRestaurants = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary());
      const bestRestaurant = sortedRestaurants[0];  // най-добрият ресторант е най-отпред в масива;

      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);  // сортираме работниците в най-добрия ресторант от най-висока към най-ниска заплата;

      const averageSalary = bestRestaurant.getAverageSalary().toFixed(2);  //
      const bestSalary = bestRestaurant.workers[0].salary.toFixed(2); // след като вече сме подредили работниците по заплати, взимаме заплатата на първия, защото е най-висока;

      const outputText1 = `Name: ${bestRestaurant.restaurant} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      const outputText2 = bestRestaurant.workers.map((x) => `Name: ${x.name} With Salary: ${x.salary}`).join(" "); // с мап си генерираме масив, в който събираме индекси с текст за отпечатване относно всеки един работник, затова Join-ваме за да се получи текст вместо масив

      const output1 = document.querySelector("#bestRestaurant p");
      output1.textContent = outputText1;
      const output2 = document.querySelector("#workers p");
      output2.textContent = outputText2;
   }
}

