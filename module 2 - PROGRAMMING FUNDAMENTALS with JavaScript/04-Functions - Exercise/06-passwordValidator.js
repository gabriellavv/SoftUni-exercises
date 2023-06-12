function passwordValidator(input) {


    let isValidByLength = input.length >= 6 && input.length <= 10;

    let isValidByChars = true;

    for (let i = 0; i < input.length; i++) {
        let curElement = input[i];
        let curElementAsCode = curElement.charCodeAt();

        if (curElementAsCode >= 48 && curElementAsCode <= 57 || curElementAsCode >= 65 && curElementAsCode <= 90 || curElementAsCode >= 97 && curElementAsCode <= 122) {

            isValidByChars = true;
        } else {
            isValidByChars = false;
            break;
        }
    }


    let digitsCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let curElement = input[i];
        let curElementAsCode = curElement.charCodeAt();

        if (curElementAsCode >= 48 && curElementAsCode <= 57) {
            digitsCounter++;
        }
    }


    let isValidByDigitsCount = true;

    if (digitsCounter >= 2) {
        isValidByDigitsCount = true;
    } else {
        isValidByDigitsCount = false;
    }



    if (isValidByChars && isValidByDigitsCount && isValidByLength) {
        console.log("Password is valid");
    }

    if (!isValidByLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isValidByChars) {
        console.log("Password must consist only of letters and digits");
    }

    if (!isValidByDigitsCount) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator('MyPass123');