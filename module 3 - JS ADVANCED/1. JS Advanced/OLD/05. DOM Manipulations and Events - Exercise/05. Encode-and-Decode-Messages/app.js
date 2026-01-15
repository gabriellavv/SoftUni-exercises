function encodeAndDecodeMessages() {

    let textareaRef = Array.from(document.querySelectorAll("textarea"));
    let buttonsRef = Array.from(document.querySelectorAll("button"));

    buttonsRef[0].addEventListener("click", encode);
    buttonsRef[1].addEventListener("click", decode);

    function encode() {
        let textToEncode = textareaRef[0].value;
        let result = "";

        for (let i = 0; i < textToEncode.length; i++) {          // въртим цикъл през всички символи в подадения текст
            let currentCharCode = textToEncode.charCodeAt(i);              // взимаме си кода от ascii таблицата
            let encodedChar = String.fromCharCode(currentCharCode + 1);    // добавяме 1 и го обръщаме в текст
            result += encodedChar;                                         // добавяме текущата буква към стринг, в който ще конкатенираме резуктата
        };

        textareaRef[1].value = result;   // след като сме кодирали съобщението, го пращаме в долното поле 
        textareaRef[0].value = "";       // и зачистваме текущото
    }


    function decode() {
        let textToDecode = textareaRef[1].value;
        let result = "";

        for (let i = 0; i < textToDecode.length; i++) {
            let currentCharCode = textToDecode.charCodeAt(i);
            let decodedChar = String.fromCharCode(currentCharCode - 1);
            result += decodedChar;
        };

        textareaRef[1].value = result;
        textareaRef[0].value = "";
    }
}



// The password for my bank account is 123pass321