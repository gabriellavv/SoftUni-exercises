function matchFullName(string) {

    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let validNames = [];

    let m;
    while ((m = pattern.exec(string)) !== null) {
        validNames.push(m[0]);
    }

    console.log(validNames.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");