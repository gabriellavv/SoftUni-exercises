function carFactory(obj) {

    //model:
    let myCar = {
        model: obj.model,
    };

    // engine:
    if (obj.power <= 90) {
        myCar.engine = {
            power: 90,
            volume: 1800,
        }
    } else if(obj.power <= 120) {
        myCar.engine = {
            power: 120,
            volume: 2400,
        }
    } else if (obj.power <= 200){
        myCar.engine = {
            power: 200,
            volume: 3500,
        }

    }

    //carriage:
    myCar.carriage = {
        type: obj.carriage,
        color: obj.color,
    }

    //wheels:
    if(obj.wheelsize % 2 === 0) {
        let size = obj.wheelsize - 1;
        myCar.wheels = [size, size, size, size];
    } else {
        let size = obj.wheelsize;
        myCar.wheels = [size, size, size, size];
    }


    return myCar;
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));