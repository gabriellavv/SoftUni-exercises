function jansNotation(arr) {

    let storage = [];

    while (arr.length) {
        let currentElement = arr.shift();
        let type = typeof currentElement;
        if (type === "number") {
            storage.push(currentElement)

        
        } else {
            if(storage.length >= 2) {
                let b = storage.pop();
            let a = storage.pop();

            switch (currentElement) {
                case "+": storage.push(a + b); break;
                case "-": storage.push(a - b); break;
                case "*": storage.push(a * b); break;
                case "/": storage.push(a / b); break;
            }
            } else {
                return console.log("Error: not enough operands!");
            }
        }
    }

    if(storage.length === 1) {
        console.log(storage[0]);
    } else if (storage.length > 1) {
        console.log("Error: too many operands!");
    }
}

jansNotation(
    [3,
        4,
        '+']
);