function focused() {

    let inputFields = document.querySelectorAll("input");  // взимаме си лист от всички възможни инпут полета

    for (let input of inputFields) {                       // задаваме подслушватели на всяко едно от тях;
        input.addEventListener("focus", focusedField)      // когато е кликнато с курсора на него
        input.addEventListener("blur", blurredField)       // когато курсора кликне другаде
    };

    function focusedField(event) {
        let selectedElement = event.target.parentNode;     // взимаме си родителя на секцията, в която се е изпълнило събитието, тъй като по условие трябва да му добавим клас
        selectedElement.className = "focused";
    }

    function blurredField(event) {                         // когато курсора кликне извън вече фокусирания елемент, тогава трием класа му за да премахнем стилизацията
        let selectedElement = event.target.parentNode;
        selectedElement.className = "";
    }
}