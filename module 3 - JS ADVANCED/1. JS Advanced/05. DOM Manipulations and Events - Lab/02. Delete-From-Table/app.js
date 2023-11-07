function deleteByEmail() {

    const emailInput = document.getElementsByName("email")[0].value;

    let emailDataCol = document.querySelectorAll("#customers tr td:nth-child(2)");        // взимаме си лист от всички елементи, в които се съдържат email-и

    for (let currentEmail of emailDataCol) {                               // проверяваме за всеки един елемент:
        if (currentEmail.textContent === emailInput) {                     // ако съдържанието на елемента е еднакво със подадения в инпута мейл
            let rowToDelete = currentEmail.parentNode;   //tr              // взимаме родителя(tr) на тага с мейла(td), за да можем да вземем целия ред със името и мейла после
            rowToDelete.parentNode.removeChild(rowToDelete);               // изтриваме реда от родителя му;

            document.getElementById("result").textContent = "Deleted.";    // ако намерим какво да изтрием, подаваме текста "Deleted" 
            return;                                                        // и приключваме функцията
        }

    }
    document.getElementById("result").textContent = "Not found.";          // ако не сме намерили нищо за триене, значи функцията не е приключена и ще подадем Not found;

}