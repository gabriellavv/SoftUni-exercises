function areaOfFigures (input) {

    let figure = (input[0]);
    let a = Number(input[1]);
    let S = 0

    if (figure === "square") {
        S = a * a ;
    
    } else if (figure === "rectangle") {
        let b = Number(input[2]);
        S = a * b;
    
    } else if (figure === "circle") {
        let r = a;
        S = Math.PI * (r*r);
    
    } else if (figure === "triangle") {
        let ha = Number(input[2]);
        S = (a * ha) / 2;
    }
    
    console.log (S.toFixed(3));
}

areaOfFigures (["circle", "6"]);