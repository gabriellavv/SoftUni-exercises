function create(words) {

   let contentRef = document.getElementById("content");

   words.forEach(element => {                        // за всеки елемент, който е подаден в масива words:
      let div = document.createElement("div");       
      let p = document.createElement("p");           
      p.textContent = element;                       
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click", displayHiddenP);
      contentRef.appendChild(div);                  // след като сме изпълнили всичко по условието, прикрепяме готовия див към дом-а

      function displayHiddenP() {
         p.style.display = "";
      }

   });


}