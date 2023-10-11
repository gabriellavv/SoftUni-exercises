function townsToJSON(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let info = arr[i].split("|");
        info.shift();
        info.pop();

        let town = info[0].trim();
        let latitude = Number(info[1]).toFixed(2).trim();
        let longitude = Number(info[2]).toFixed(2).trim();

        result.push({
            "Town": town,
            "Latitude": Number(latitude),
            "Longitude": Number(longitude),
        });


    }

    console.log(JSON.stringify(result));
}

townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']

);