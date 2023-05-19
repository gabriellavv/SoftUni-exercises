function grandpaStavri(input) {

    let index = 0;
    let daysCount = Number(input[index]);
    
    let litersRakia = 0;
    let degrees = 0;

    for(let day = 1; day <= daysCount; day++) {
        litersRakia += Number(input[++index]);
        degrees += Number(input[index]) * Number(input[++index]);
    }

    degrees = degrees / litersRakia;

    console.log(`Liter: ${litersRakia.toFixed(2)}`);
    console.log(`Degrees: ${degrees.toFixed(2)}`);

    if (degrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (degrees < 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
