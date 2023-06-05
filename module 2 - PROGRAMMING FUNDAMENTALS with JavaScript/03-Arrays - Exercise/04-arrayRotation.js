function arrayRotation(array, rotations) {

    for (let i = 0; i < rotations ; i++) {
        array.push(array[i]);
    }

    for (let shift = 1; shift <= rotations; shift++){

        array.shift();
    }

    console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);