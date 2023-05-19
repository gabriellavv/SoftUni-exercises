function agencyProfit(input) {

    let companyName = input[0];
    let adultsTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let netoPricePerAdult = Number(input[3]);
    let servicePrice = Number(input[4]);

    let finalPriceKids = (netoPricePerAdult * 0.3) + servicePrice;

    let finalPriceAdult = netoPricePerAdult + servicePrice;

    let totalPrice = (adultsTickets * finalPriceAdult) + (kidsTickets * finalPriceKids);

    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);

}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
