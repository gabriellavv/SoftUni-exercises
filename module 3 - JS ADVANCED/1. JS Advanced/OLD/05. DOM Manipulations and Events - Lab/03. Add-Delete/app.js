function addItem() {
    
    const inputText = document.querySelector("#newItemText").value;    // взимаме подадения текст

    let li = document.createElement("li");                 // създаваме си li
    li.textContent = inputText;                            // задаваме му текстовата стойност, която е подадена в инпут полето
    document.getElementById("items").appendChild(li);      // закачаме го за DOM


    
    // започваме да сглобяваме функционалността за триене
    let remove = document.createElement("a");              // създаваме си anchor елемент, в който ще добавяме каквото ни е нужно
    let linkText = document.createTextNode("[Delete]");    // създаваме текст
    remove.appendChild(linkText);                          // remove държи: <a>[Delete]</a>
    remove.href = "#";                                     // <a href="#">[Delete]</a>
    remove.addEventListener("click", deleteItem)           // добавяме функционалност след кликане върху текста

    li.appendChild(remove);                                // добавяме функционалността към реда: <li>inputText<a href="#">[Delete]</a></li>

    function deleteItem() {
        li.remove();                                       // трие целия li, върху който е приложена функцията
    }




    document.querySelector("#newItemText").value = "";     // изчистваме инпут полето от вече обработения текст;
}