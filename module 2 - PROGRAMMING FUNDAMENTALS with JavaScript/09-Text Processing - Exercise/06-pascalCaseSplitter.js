function pascalCaseSplitter(string) {

    let wordsArray = [];

    let capitalCaseIndex = 0;

    // проверяваме всяка от буквите дали е главна:
    for (let i = 1; i < string.length; i++) {

        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {

            // ако буквата е главна взимаме всички предходни символи от последната главна буква насам и ги прибавяме като дума:
            wordsArray.push(string.substring(capitalCaseIndex, i));

            // задаваме откъде започва новата дума с главна буква:
            capitalCaseIndex = i;
        }
    }

    // след като сме достигнали края на стринга и няма следваща главна буква, push-ваме последната дума, започваща от последния индекс:
    wordsArray.push(string.substring(capitalCaseIndex));

    console.log(wordsArray.join(", "));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');