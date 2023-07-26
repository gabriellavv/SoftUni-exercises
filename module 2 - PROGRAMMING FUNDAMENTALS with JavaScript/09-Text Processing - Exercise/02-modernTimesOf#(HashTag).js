function modernTimesOfHashTag(string) {

    let words = string.split(" ");

    for (let word of words) {

        if (word.startsWith("#") && word.length > 1) {

            let isChar = true;
            for (let char of word) {

                if (!isNaN(char)) {
                    isChar = false;
                    break;
                }
            }

            if (isChar) {
                console.log(word.slice(1));
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # #a$$a to tag a #special word in #socialMedia');