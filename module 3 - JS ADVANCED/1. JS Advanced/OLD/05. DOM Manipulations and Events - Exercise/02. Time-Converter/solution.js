function attachEventsListeners() {

    let buttonsRef = Array.from(document.querySelectorAll("div input:nth-child(3)"));  // всички бутони
    let inputRef = Array.from(document.querySelectorAll("input[type=text]"))           // всички инпут полета, на които ще закачаме стойности по индекс

    buttonsRef.forEach(element => {
        element.addEventListener("click", convert);      // закачаме подслушвател на всеки бутон
    });

    function convert(event) {

        let inputValue = Number(event.target.parentElement.children[1].value);  // взимаме си стойността от инпут полето, под което сме натиснали бутона
        let unit = event.target.parentElement.children[1].id;  // взимаме си мерната единица по ид на инпут полето

        switch (unit) {
            case "days":
                inputRef[1].value = inputValue * 24;             // дни в часове
                inputRef[2].value = inputValue * 24 * 60;        // в минути
                inputRef[3].value = inputValue * 24 * 60 * 60;   // в секунди
                break;
            case "hours":
                inputRef[0].value = inputValue / 24;             // часове в дни  
                inputRef[2].value = inputValue * 60;             // в минути
                inputRef[3].value = inputValue * 60 * 60;        // в секунди
                break;
            case "minutes":
                inputRef[0].value = inputValue / 60 / 24;        // минути в дни
                inputRef[1].value = inputValue / 60;             // в часове
                inputRef[3].value = inputValue * 60;             // в секунди
                break;
            case "seconds":
                inputRef[0].value = inputValue / 60 / 60 / 24;   // секунди в дни
                inputRef[1].value = inputValue / 60 / 60;        // в часове
                inputRef[2].value = inputValue / 60;             // в минути
                break;
        }
    }

}
