function bitcoinMining(input) {

    let pricePerBitcoin = 11949.16;
    let pricePerGramOfGold = 67.51;
    let totalBitcoins = 0;
    let totalMoney = 0;
    let firstDay = 0;

    for (let i = 1; i <= input.length; i++) {

        if (i % 3 === 0) {
            let gramsOfGold = input[i - 1] * 0.7;
            let goldInLv = gramsOfGold * pricePerGramOfGold;
            totalMoney += goldInLv;
        } else {
            let gramsOfGold = input[i - 1];
            let goldInLv = gramsOfGold * pricePerGramOfGold;
            totalMoney += goldInLv;
        }

        if (totalMoney > pricePerBitcoin) {
            let boughtBitcoins = Math.trunc(totalMoney / pricePerBitcoin);
            totalMoney -= pricePerBitcoin * boughtBitcoins;

            if (totalBitcoins === 0) {
                firstDay = i;
            }

            totalBitcoins += boughtBitcoins;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    
    if (firstDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);