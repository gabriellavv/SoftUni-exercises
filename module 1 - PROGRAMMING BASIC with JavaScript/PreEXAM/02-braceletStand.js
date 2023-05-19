function braceletStand(input) {

    let budget = Number(input[0]);
    let incomePerDay = Number(input[1]);
    let expenseTotal = Number(input[2]);
    let giftPrice = Number(input[3]);

    

    let totalBudget = budget * 5;
    let totalIncome = incomePerDay * 5;
   
    let totalMoney = (totalBudget + totalIncome) - expenseTotal;

    if (giftPrice <= totalMoney) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalMoney).toFixed(2)} BGN.`)
    }


}

braceletStand(["5.12",
"32.05",
"15",
"150"])
