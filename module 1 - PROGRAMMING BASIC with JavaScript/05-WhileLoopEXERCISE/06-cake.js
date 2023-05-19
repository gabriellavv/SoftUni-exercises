function cake(input) {

    let index = 0;
    let width = Number(input[index++]);
    let long = Number(input[index++]);
    let cakeSize = width * long;
    let piecesCount = 0;

    while (index < input.length) {

        if (input[index] === "STOP") {
            console.log(`${cakeSize} pieces are left.`);
            return;
        }
        
        piecesCount = Number(input[index]);
        cakeSize -= piecesCount;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            return;
        }

        index++;
    }
}

cake(["10", "2", "2", "4", "6", "STOP"]);