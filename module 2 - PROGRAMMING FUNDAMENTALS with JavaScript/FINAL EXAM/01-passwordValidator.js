function passwordValidator(input) {

    let password = input.shift();

    let command = input.shift();  
    while (command !== "Complete") {

        let split = command.split(" "); 
        let action = split[0];

        if (action === "Make" && split[1] === "Upper") {
            let index = Number(split[2]);
            let letter = password[index];
            password = password.replace(letter, letter.toUpperCase());
            console.log(password);
        }

        if (action === "Make" && split[1] === "Lower") {
            let index = Number(split[2]);
            let letter = password[index];
            password = password.replace(letter, letter.toLowerCase());
            console.log(password);
        }

        if (action === "Insert") {
            let index = Number(split[1]);
            let char = split[2];

            if (index >= 0 && index < password.length) {            
                let firstPart = password.substring(0, index);
                let secondPart = password.substring(index);
                password = firstPart + char + secondPart;
                console.log(password);
            }
        }

        if (action === "Replace") {
            let char = split[1];
            let value = Number(split[2]);

            if (password.includes(char)) {
                let asciiValue = char.charCodeAt(0);
                let totalValue = value + asciiValue;
                let newChar = String.fromCharCode(totalValue);

                while (password.includes(char)) {
                    password = password.replace(char, newChar);
                }
                console.log(password);
            }
        }

        if (action === "Validation") {

            let length = password.length;
            if (length < 8) {
                console.log("Password must be at least 8 characters long!");
            }

            

            if (!password.match(/^[A-Za-z0-9_]+$/)) {
                console.log('Password must consist only of letters, digits and _!');
            }

        
            

            let isThereUpperCase = /(?=.*?[A-Z]).*/.test(password);
            if (!isThereUpperCase) {
                console.log("Password must consist at least one uppercase letter!");
            }



            let isThereLowerCase = /(?=.*?[a-z]).*/.test(password);
            if (!isThereLowerCase) {
                console.log("Password must consist at least one lowercase letter!");
            }


            let isThereDigit = /(?=.*?[0-9]).*/.test(password);
            if (!isThereDigit) {
                console.log("Password must consist at least one digit!");
            }


        }
        command = input.shift(); 
    }
}
passwordValidator((['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']))