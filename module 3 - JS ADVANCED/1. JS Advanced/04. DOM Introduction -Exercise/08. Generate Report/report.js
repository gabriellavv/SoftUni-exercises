function generateReport() {

    let thElements = document.querySelectorAll("th");            // вземаме си всички елементи от headera на таблицата
    let checkBox = []

    Array.from(thElements).forEach((th) => {             // превръщаме ги в масив, за да можем да ползваме forEach за всеки th
        if (th.children[0].checked) {                               // проверяваме дали първият подтаг е check-нат и ако да
            checkBox.push(th.textContent.toLowerCase().trim())      // добавяме в масива със отбелязани полета името на полето, форматирано както ще ни е нужно за крайния резултат;
        } else {
            checkBox.push(false)
        }
    })


    let trInTBodyElements = document.querySelectorAll("tbody tr");  // вземаме си всички редове
    let result = [];

    Array.from(trInTBodyElements).forEach((tr) => {    // за всеки ред създаваме обект, който да напълним с нужната информация
        let rowObj = {};
        Array.from(tr.children).forEach((el, i) => {  // създаваме масив от всяка клетка (td), която е на реда, и работим с нейните стойност и индекс
            if (checkBox[i]) {         // ако в масива с отметки има отметка на същия индекс
                let currCell = checkBox[i];           
                rowObj[currCell] = el.textContent;   // добавяме в обекта ключ с името на отбелязания heading и текста от полето на текущия ред
            }
        })
        result.push(rowObj);  // когато си напълним обекта със всичката нужна информация от реда, го добавяме в масива, в който ще съхраняваме крайния резултат и правим същото със всеки следващ ред
    })

    let outputArea = document.getElementById("output");
    outputArea.textContent = JSON.stringify(result);
}

