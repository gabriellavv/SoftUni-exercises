function foodDelivery (input) {

    let chicken = 10.35;
    let fish = 12.40;
    let vege = 8.15;
    let delivery = 2.50;

    let chickenCount = Number(input[0]);
    let fishCount = Number(input[1]);
    let vegeCount = Number(input[2]);

    let mealsPrice = chicken * chickenCount + fish * fishCount + vege * vegeCount;
    let dessertPrice = 0.2 * mealsPrice; 
    let totalPrice = delivery + mealsPrice + dessertPrice;

    console.log(totalPrice);
}

foodDelivery (["2", "4", "3"]);

