function chessBoard(n) {

    console.log('<div class="chessboard">');

    let currColor = "black";

    for (let i = 1; i <= n; i++) {
        console.log('  <div>');

        for (let x = 1; x <= n; x++) {

            console.log(`    <span class="${currColor}"></span>`);

            if (currColor === "black") {
                currColor = "white";
            } else {
                currColor = "black";
            }

        }

        console.log('  </div>');

        if (n % 2 === 0) {
            if (currColor === "black") {
                currColor = "white";
            } else {
                currColor = "black";
            }
        }
    }

    console.log('</div>');
}

chessBoard(6);
