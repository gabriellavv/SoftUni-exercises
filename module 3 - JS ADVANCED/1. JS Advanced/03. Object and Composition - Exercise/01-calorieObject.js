function calorieObject(arr) {

    let myObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let calories = Number(arr[i + 1]);

        myObj[food] = calories;
    }

    console.log(myObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);