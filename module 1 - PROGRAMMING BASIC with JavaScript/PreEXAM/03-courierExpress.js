function courierExpress(input) {

    let weight = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;
    let expressExtraPrice = 0;

        if (weight < 1) {
            pricePerKm = 0.03

        } else if (weight < 10) {
            pricePerKm = 0.05

        } else if (weight < 40) {
            pricePerKm = 0.1

        } else if (weight < 90) {
            pricePerKm = 0.15

        } else if (weight < 150) {
            pricePerKm = 0.2
        }
    

    if (type === "express") {

        if (weight < 1) {
            expressExtraPrice = distance * pricePerKm * weight * 0.8;
        } else if (weight < 10) {
            expressExtraPrice = distance * pricePerKm * weight * 0.4;
        } else if (weight < 40) {
            expressExtraPrice = distance * pricePerKm * weight * 0.05;
        } else if (weight < 90) {
            expressExtraPrice = distance * pricePerKm * weight * 0.02;
        } else if (weight < 150) {
            expressExtraPrice = distance * pricePerKm * weight * 0.01;
        }
    }

    let totalPrice = (distance * pricePerKm) + expressExtraPrice

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}

courierExpress(["1.5",
    "standart",
    "100"])

