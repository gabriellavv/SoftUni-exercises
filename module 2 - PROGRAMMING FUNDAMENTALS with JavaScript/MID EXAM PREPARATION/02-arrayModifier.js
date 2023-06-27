function arrayModifier(input) {

    let array = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {

        //   let commandArray = input[i].split(" ");
        //   let action = commandArray[0];
        //   let index1 = Number(commandArray[1]);
        //   let index2 = Number(commandArray[2]);

        let [action, index1, index2] = input[i].split(" ");

        switch (action) {

            case "swap":
                let temp1 = array[index1];
                let temp2 = array[index2];
                array[index1] = temp2;
                array[index2] = temp1;
                break;

            case "multiply":
                let product = array[index1] * array[index2];
                array.splice(index1, 1, product);              //   array[index1] = product;
                break;

            case "decrease":
                array = array.map(x => x - 1);
                break;

            case "end":
                console.log(array.join(", "));
                return;
        }
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);