function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;       // bulk
    let marble = 0;       // outer layer
    let lapisLazuli = 0;    // every fifth step of outer layer
    let gold = 0;           // final step

    // base = width and length
    // increment = height of each step

    let counter = 0;

    for (let step = base; step > 0; step -= 2) {
        counter++;

        if (step <= 2) {
            let currStepSize = step * step;
            gold += currStepSize * increment;
            break;
        }
        if (counter % 5 === 0) {
            let currStepSize = step * step;
            let lapisLazuliRequired = (step * 4) - 4;
            stone += (currStepSize - lapisLazuliRequired) * increment;
            lapisLazuli += lapisLazuliRequired * increment;
            continue;
        }

        let currStepSize = step * step;
        let marbleRequired = (step * 4) - 4;
        stone += (currStepSize - marbleRequired) * increment;
        marble += marbleRequired * increment;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}

thePyramidOfKingDjoser(11, 0.75);