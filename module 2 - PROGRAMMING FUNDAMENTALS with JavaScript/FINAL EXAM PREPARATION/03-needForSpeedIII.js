function needForSpeedIII(input) {

    let numOfCars = Number(input.shift());  
    let carsObj = {};

    for (let i = 1; i <= numOfCars; i++) { // взимаме си от входа броя на колите и инфо за тях и ги събираме в обект

        let [car, mileage, fuel] = input.shift().split("|");

        carsObj[car] = [Number(mileage), Number(fuel)];
    }

// взимаме команди и ги сплитваме на части докато не достигнем "Stop":
    let command = input.shift();
    while (command !== "Stop") {
        let split = command.split(" : ");
        let action = split[0];
        let car = split[1];

        switch (action) {

            case "Drive": // трябва да изминем определени километри ако имаме достатъчно гориво за тях
                let distance = Number(split[2]);
                let fuel = Number(split[3]);

                if (carsObj[car][1] >= fuel) {  // ако имаме достатъчно гориво
                    carsObj[car][1] -= fuel;    // вадим използваното гориво от наличното
                    carsObj[car][0] += distance;  // добавяме изминатото разстояние към километража
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else { // ако нямаме достатъчно гориво:
                    console.log("Not enough fuel to make that ride");
                }

                if (carsObj[car][0] >= 100000) {  // ако сме достигнали 100000 км, продаваме колата и я трием от обекта
                    delete carsObj[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;

            case "Refuel": // презареждаме 
                let fuelToRefill = Number(split[2]);
                carsObj[car][1] += fuelToRefill;

                if(carsObj[car][1] > 75) { // капацитета на резервоара е 75л, ако ги превишим:
                    fuelToRefill = fuelToRefill - (carsObj[car][1] - 75);  // изчисляваме колко от горивото за презареждане ще ни е нужно
                    carsObj[car][1] = 75; // оставаме в резервоара само колкото е капацитета
                }
                console.log(`${car} refueled with ${fuelToRefill} liters`); // отпечатваме използваното количество гориво;
                break;

            case "Revert": // превъртане назад на километража
                let km = Number(split[2]);
                carsObj[car][0] -= km;
                console.log(`${car} mileage decreased by ${km} kilometers`);

                if ( carsObj[car][0] < 10000) { // ако километража е паднал под 10000 го нагласяме да е 10000 
                    carsObj[car][0] = 10000;
                }
                break;
        }

        command = input.shift(); // взимаме следваща команда
    }


    for (let car in carsObj) { // отпечатваме за всяка останала кола в обекта:
        console.log(`${car} -> Mileage: ${carsObj[car][0]} kms, Fuel in the tank: ${carsObj[car][1]} lt.`);
    }
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);