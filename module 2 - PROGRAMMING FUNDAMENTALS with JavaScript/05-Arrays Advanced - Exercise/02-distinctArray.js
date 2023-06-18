function distinctArray(input) {

    let array = [];

    for(let i = 0; i < input.length; i++) {

        let currNumber = input[i];

        if(!array.includes(currNumber)) {
            array.push(currNumber);
        }
    }

    console.log(array.join(" "));
}

distinctArray([1, 2, 3, 4]);