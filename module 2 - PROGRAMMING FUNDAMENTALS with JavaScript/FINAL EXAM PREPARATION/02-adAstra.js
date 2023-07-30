function adAstra(input) {

    let kcalNeeded = 2000; // нужни калории на ден
    let pattern = /([#|])(?<itemName>[a-zA-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let sumOfCalories = 0;
    let items = [];
    let bestBefore = [];
    let nutrition = [];

    // взимаме си съвпаденията със шаблона от инпута;
    let match;
    while(match = pattern.exec(input)) {

        // взимаме си информацията от всяко едно съвпадение в променливи:
        let item = match[2];
        let expiration = match[3];
        let calories = Number(match[4]);

        // събираме информацията в масиви
        items.push(item);
        bestBefore.push(expiration);
        nutrition.push(calories)

        // изчисляваме с колко общо калории разполагаме:
        sumOfCalories += calories;
    }

    let daysWithFood = Math.floor(sumOfCalories / kcalNeeded)  // изчисляваме за колко дни има достатъчно храна
    console.log(`You have food to last you for: ${daysWithFood} days!`);

    // изреждаме с какви продукти разполагаме, като информация за тях взимаме от масивите, които си направихме:
    for(let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i]}, Best before: ${bestBefore[i]}, Nutrition: ${nutrition[i]}`);
    }
}

adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');