function towns(input) {



    for (let element of input) {
        let townInfo = element.split(" | ");
        let townName = townInfo[0];
        let latitudeInfo = Number(townInfo[1]).toFixed(2);
        let longitudeInfo = Number(townInfo[2]).toFixed(2);


        let object = {
            town: townName,
            latitude: latitudeInfo,
            longitude: longitudeInfo,
        }
        console.log(object);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);