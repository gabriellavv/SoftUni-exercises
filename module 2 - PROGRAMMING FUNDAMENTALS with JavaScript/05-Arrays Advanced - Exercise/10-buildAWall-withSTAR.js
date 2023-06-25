function buildAWall(input) {

    let concretePerDay = []; 

    while(input.length > 0) {
        input = input.map((x) => x + 1).filter((x) => x <= 30);
        concretePerDay.push(input.length * 195);
    }

    concretePerDay.pop();

    let totalConcrete = 0;

    for( let element of concretePerDay) {
        totalConcrete += element;
    }

    let finalCosts = totalConcrete * 1900;

    console.log(concretePerDay.join(", "));
    console.log(`${finalCosts} pesos`);
      
}

buildAWall([21, 25, 28]);
