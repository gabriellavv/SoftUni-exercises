function suppliesForSchool (input){

    let pricePens = 5.8;
    let priceMarkers = 7.20;
    let priceCleanerPerL = 1.20;

    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let CleanerLitres = Number(input[2]);
    let discountPercentage = Number(input[3]) / 100; 

    let sum = pricePens * pensCount + priceMarkers * markersCount + priceCleanerPerL * CleanerLitres;
    let discount = sum * discountPercentage;
    let totalPrice = sum - discount;

    console.log(totalPrice);

}

suppliesForSchool (["2", "3", "4", "25"]);