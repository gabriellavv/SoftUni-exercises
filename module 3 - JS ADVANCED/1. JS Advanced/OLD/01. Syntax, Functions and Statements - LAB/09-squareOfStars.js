function squareOfStars(n) {

    // да принтираме квадрат от звездички с големина в зависимост от зададеното число:
    if(n) {
        for(let i = 0; i < n; i++) {
            let printLine = "";
            for(let x = 0; x < n; x++) {
                printLine += "* ";
            }
            console.log(printLine);
        }
    } else {  // ако нямаме никакъв подаден вход:
        let printLine = "* * * * *";
            for(let x = 0; x < 5; x++) {
                console.log(printLine);
            }
    }
}

squareOfStars();