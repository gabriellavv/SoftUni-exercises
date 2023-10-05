function evenPositionElement(array) {

    let result = "";

    for (let i = 0; i < array.length; i += 2) {
        let element = array[i];
        result += element + " ";
    }

    console.log(result);
}


evenPositionElement(['20', '30', '40', '50', '60']);