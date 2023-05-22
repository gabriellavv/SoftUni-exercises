function triplesOfLattinLetters(numberAsString) {
   
    let n = Number(numberAsString);

    for(let i = 0; i < n; i++) {

        let letter1 = String.fromCharCode(97+i);

        for(let x = 0; x < n; x++) {

            let letter2 = String.fromCharCode(97+x);

            for(let y = 0; y < n; y++) {

                let letter3 = String.fromCharCode(97+y);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

triplesOfLattinLetters("2");