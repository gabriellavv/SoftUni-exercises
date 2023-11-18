function addItem() {

    // Your function should take the values of newItemText and newItemValue. 
    let inputTextRef = document.getElementById("newItemText");
    let inputValueRef = document.getElementById("newItemValue");

    //  After that, you should create a new option element and set its textContent and its value to the newly taken ones. 
    let optionEl = document.createElement("option");
    optionEl.textContent = inputTextRef.value;
    optionEl.value = inputValueRef.value;

    // Once you have done all of that, you should append the newly created option as a child to the select item with id "menu".
    let selectItemRef = document.getElementById("menu");
    selectItemRef.appendChild(optionEl);

    // Finally, you should clear the value of the two input fields.
    inputTextRef.value = "";
    inputValueRef.value = "";

}