function fishTank(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let percentageFull = Number(input[3]) / 100;

    let V = a * b * h;
    let litres = V * 0.001;
    let total = litres - (litres * percentageFull);

    console.log(total);
}

fishTank(["85", "75", "47", "17"]);

