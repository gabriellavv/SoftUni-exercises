function solve() {

  const [inputRef, outputRef] = document.querySelectorAll("textarea");
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");
  const tBodyRef = document.querySelector("tbody");

  generateBtnRef.addEventListener("click", generate);
  buyBtnRef.addEventListener("click", buy);



  function generate(event) {

    if (!inputRef.value) {   // ако няма никакъв инпут, спираме програмата
      return;
    }

    let value = JSON.parse(inputRef.value);   // парсваме стойността, подадена в инпута, тъй като е в json формат

    for (let el of value) {   // след парсването получаваме неопределен брой обекти, минаваме през всеки един от тях
      let domElements = createTableDataWithInnerHTML(el);    // създаваме си дом елементите, използвайки информацията от текущия обект
      tBodyRef.appendChild(domElements);  // прикачваме създадения вече ред към бодито
    }
  };

  function createTableDataWithInnerHTML(obj) {
    let newTR = document.createElement("tr");  // създаваме си контейнера, който ще напълним с информация, която взимаме от подадения обект
    newTR.innerHTML = `<tr>
        <td><img src="${obj.img}"></td>   
        <td><p>${obj.name}</p></td>
        <td><p>${obj.price}</p></td>
        <td><p>${obj.decFactor}</p></td>
        <td><input type="checkbox"/></td>
      </tr>`;
    return newTR;  // функцията връща готовия ред с прикачената към него информация
  };

  function buy(event) {
    let checkedBoxes = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));  // взимаме си всичките отбелязани тикчета и ги обръщаме в масив, за да може да интерираме по него; 
    let boughtFurniture = [];
    let totalPrice = 0;
    let decFactorSum = 0;

    for (let element of checkedBoxes) {  // за всяко от отбелязаните тикчета:
      let checkedElement = element.parentNode.parentNode; // взимаме родителите докато достигнем до тага "tr";
      let elementParts = checkedElement.querySelectorAll("td p");  // от текущия tr си взимаме в един лист всички p елементи

      boughtFurniture.push(elementParts[0].textContent);
      totalPrice += Number(elementParts[1].textContent);
      decFactorSum += Number(elementParts[2].textContent);
    };

    outputRef.textContent = `Bought furniture: ${boughtFurniture.join(", ")}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${decFactorSum / boughtFurniture.length}`;
  }


}








