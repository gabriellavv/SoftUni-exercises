function theImitationGame(input) {

    let word = input.shift();  // взимаме си от входа думата, която трябва да дешифрираме

    // взимаме си всяка команда от входа:
    let index = 0;
    let currentCommand = input[index];
    while (currentCommand !== "Decode") {

        let instructions = currentCommand.split("|"); // сплитваме командада за да си получим масив от информация
        let action = instructions[0];

        if (action === "Move") { // трябва да вземем първите n символа и да ги преместим в края на думата
            let n = Number(instructions[1]);
            let endValue = word.substring(0, n); 
            let leftValue = word.substring(n);
            word = leftValue + endValue;
        }

        if (action === "Insert") { // трябва точно преди индекса да вместим в думата зададеното value
            let index = Number(instructions[1]);
            let value = instructions[2];
            // разделяме думата на две части и конкатенираме с value по средата
            let firstPart = word.substring(0, index); 
            let secondPart = word.substring(index);
            word = firstPart + value + secondPart;
        }

        if (action === "ChangeAll") { // трябва да заменим всички substring с replacement
            let substring = instructions[1];
            let replacement = instructions[2];

            word = word.split(substring).join(replacement);
         //   while (word.includes(substring)) {
         //     word = word.replace(substring, replacement)
         //   }
        }

        currentCommand = input[++index]; // взимаме следващата команда
    }

    console.log(`The decrypted message is: ${word}`);
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);