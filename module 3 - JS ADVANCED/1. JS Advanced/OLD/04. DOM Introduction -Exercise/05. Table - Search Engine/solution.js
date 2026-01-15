function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {

      let searchedText = document.getElementById("searchField").value;  // взимаме си текста от полето за търсене;
      let tableRows = document.querySelectorAll("tbody tr")             // избираме всички зададени по условие редове в таблицата, в които трябва да търсим съвпадения;

      for (let row of tableRows) {    // във всеки ред от таблицата
         row.classList.remove("select");      // изтриваме класа select, тъй като може да е останал зададен в предишно търсене;
         let rowData = row.querySelectorAll("td");    // взимаме си лист със полетата, които съдържа всеки ред
         for (let data of rowData) {                          // във всяко едно поле от всеки ред
            if (data.textContent.includes(searchedText)) {         // проверяваме дали се съдържа търсения текст;
               row.classList.add("select");                         // ако да, задаваме клас select на целия ред и така му се прилага стилизация;
            }
         }
      }
   }
}