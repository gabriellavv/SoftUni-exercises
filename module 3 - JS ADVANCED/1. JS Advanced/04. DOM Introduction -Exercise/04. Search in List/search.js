function search() {

   let searchedText = document.getElementById("searchText").value;   // взимаме си текста подаден в търсачката
   let towns = document.querySelectorAll("#towns li");   // взимаме си всички елементи, сред които ще търсим съвпадение;
   let matches = 0;  // брояч на съвпаденията
   
   for(let town of towns) {  // за всеки елемент от li списъка
      if(town.textContent.includes(searchedText)){  // взимаме му съдържанието и проверяваме дали съдържа подадения в търсачката текст;
         town.style.fontWeight = "bold";              
         town.style.textDecoration = "underline";
         matches++;    // ако има съвпадение отчитаме на брояча
      } else {  // ако няма, зануляваме настройките, в случай че от предно търсене има нещо вече стилизирано;
         town.style.fontWeight = "";
         town.style.textDecoration = "";
      }
   }
 
   document.getElementById("result").textContent = `${matches} matches found`;  // след приключване на търсенето отбелязваме колко съвпадения имаме;

   matches = 0; // зануляваме брояча, за да е готов за следващо търсене и да не пази стари стойности
}
