function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f >= 1; f--) {

        let printLine = "";

        for (let r = 0; r < rooms; r++) {

            if (f == floors) {
                printLine += `L${f}${r} `;
            } else if (f % 2 !== 0) {
                printLine += `A${f}${r} `;
            } else {
                printLine += `O${f}${r} `;
            }


        }console.log(printLine)
    } 
}

building(["6", "4"]);