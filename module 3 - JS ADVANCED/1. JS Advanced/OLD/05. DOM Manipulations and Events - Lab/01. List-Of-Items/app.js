function addItem() {
    
    const inputText = document.querySelector("#newItemText").value;   

    let li = document.createElement("li");    // създаваме си ли таг
    li.textContent = inputText;               // задаваме му текстовата стойност, която е подадена в инпут полето
    document.getElementById("items").appendChild(li);  // закачаме го за DOM

    document.querySelector("#newItemText").value = "";  // изчистваме инпут полето от вече обработения текст;
}






