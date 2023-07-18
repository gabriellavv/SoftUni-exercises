function oddOccurrences(input) {

    let elements = input.toLowerCase().split(" ");

    let result = new Map();

    for(let el of elements) {
        
        if(!result.has(el)) {
            result.set(el, 0);
        }

        result.set(el, result.get(el) + 1);
    }

    let sorted = Array.from(result.entries());
    let printline = ""

    for(let [key, value] of sorted) {
        let counts = Number(value);

        if(value % 2 !== 0) {
            printline += key + " ";
        }
    }
    
    console.log(printline);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');