function cleverLily(input) {

    let age = Number(input[0]);
    let priceWM = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toys = 0;
    let lv = 0;
    let money = 0;
    
    for(let hbd = 1 ; hbd <= age ; hbd++) {
        if (hbd % 2 === 0) {
            lv = (lv + hbd*5) - 1;
        } else {
            toys++;
        }
    }

    let toysIncome = toyPrice * toys; 
    lv = lv + toysIncome;

    if (lv >= priceWM) {
        console.log(`Yes! ${(lv - priceWM).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWM - lv).toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);