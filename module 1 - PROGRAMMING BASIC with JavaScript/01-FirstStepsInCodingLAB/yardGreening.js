function yardGreening(input) {

    let m2 = Number(input[0]);
    let price = m2 * 7.61;
    //let discount = (price / 100) * 18;
    let discount = price * 0.18; 
    let finalPrice = price - discount;

    console.log (`The final price is: ${finalPrice} lv.`);
    console.log (`The discount is: ${discount} lv.`);
}

yardGreening([550]);