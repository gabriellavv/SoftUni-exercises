function repeatString(string, reps) {

    let result = "";
    for(let i = 1; i <= reps; i++) {
        result += string;
    }

    
    return result
}

repeatString("abc", 3);