function passwordReset(input) {

    let password = input.shift();

    let command = input.shift();  // взимаме си команди от входа и докато не получим Done:
    while (command !== "Done") {

        let split = command.split(" "); // сплитваме си реда и взимаме действието
        let action = split[0];

        switch (action) { // ако действието е:
            case "TakeOdd": // да вземем символа от всеки нечетен индекс от паролата
                let newPass = "";
                for (let i = 1; i < password.length; i += 2) { // интерираме по нечетните индекси
                    let char = password[i];
                    newPass += char; // събираме всеки символ в буфер
                }
                password = newPass; // променяме паролата с вече извлечените символи
                console.log(password);
                break;


            // да вземем substring който започва от дадения индекс с дадена дължина и да изтрием ПЪРВОТО му съвпадение в паролата:
            case "Cut":
                let index = Number(split[1]);
                let length = Number(split[2]);
                let string = password.substring(index, index + length); // взимаме събстринга

                password = password.replace(string, "");  // махаме първото му съвпадение в паролата и не слагаме нищо на неговото място
 // вариант 2:  // let firstOccurrence = password.search(string); // откриваме началния индекс на първото му съвпадение в паролата
                // let firstPart = password.slice(0, firstOccurrence); // разцепваме паролата на две части преди и след извлечения събстринг
                // let secondPart = password.slice(firstOccurrence + length);
                // password = firstPart + secondPart; // създаваме парола от двете части без събстринга

                console.log(password);
                break;

            case "Substitute": // да заменим едни символи с други
                let substring = split[1];
                let substitute = split[2];
                if (password.includes(substring)) { // ако паролата включва даден символ
                    password = password.split(substring).join(substitute); // разцепваме паролата по стария символ и я съединяваме с новия
                    console.log(password);
                } else { // ако не включва зададения символ:
                    console.log("Nothing to replace!");
                }
                break;
        }

        command = input.shift(); // взимаме следваща команда
    }

    // след Done:
    console.log(`Your password is: ${password}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));