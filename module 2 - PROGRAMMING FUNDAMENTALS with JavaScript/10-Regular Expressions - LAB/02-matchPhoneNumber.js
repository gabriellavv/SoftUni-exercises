function matchPhoneNumber(input) {

    let regex = /(?<!\d)\+359([ -])2\1[\d]{3}\1[\d]{4}\b/g;

    let validNumbers = [];
    
    let m;
    while((m = regex.exec(input)) !== null) {
        validNumbers.push(m[0]);
    }

    console.log(validNumbers.join(", "));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);