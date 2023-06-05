function rotateArray(array) {

    let rotations = Number(array[array.length - 1]);

    array.pop();

    for (let i = 1; i <= rotations; i++) {

        let lastEl = array.pop();

        array.unshift(lastEl);
    }

    console.log(array.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);