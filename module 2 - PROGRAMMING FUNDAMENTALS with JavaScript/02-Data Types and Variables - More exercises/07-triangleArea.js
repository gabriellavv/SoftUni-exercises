function triangleArea(a, b, c) {

    let surface = (a + b + c) / 2;
    let area =  Math.sqrt(surface * (surface - a) * (surface - b) * (surface - c));

    console.log(area);

}

triangleArea(2, 3.5, 4);