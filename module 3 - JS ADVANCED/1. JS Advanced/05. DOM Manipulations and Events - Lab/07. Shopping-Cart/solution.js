function solve() {
   let buttonsRef = Array.from(document.getElementsByClassName("add-product"));       // взимаме си лист от референции към всички бутони add
   let productsBought = [];
   let totalPrice = 0;
   let textAreaRef = document.querySelector("textarea"); 

   for (let button of buttonsRef) {               // закачваме подслушвател на всеки бутон
      button.addEventListener("click", add)
   }


   function add(event) {
      let productElement = event.target.parentNode.parentNode;     // взимаме родителският таг, от който можем да достъпим до име и цена на продукта;
      let productTitle = productElement.querySelector(".product-title").textContent;   
      let productPrice = Number(productElement.querySelector(".product-line-price").textContent).toFixed(2);

      printMessage(productTitle, productPrice);     // след натискане на бутона add отпечатваме съобщение в полето долу

      if (!productsBought.includes(productTitle)) {  // ако списъка с продукти не включва текущия продукт - го добавяме
         productsBought.push(productTitle);
      }
      totalPrice += Number(productPrice);            // добавяме текущата цена към общата сума
   }

   function printMessage(title, price) {
      textAreaRef.textContent += `Added ${title} for ${price} to the cart.\n`;
   }

   let checkoutButton = document.querySelector(".checkout");
   checkoutButton.addEventListener("click", checkout);        // добавяме подслушвател на checkout бутона


   // след натискане нa checkout отпчатваме финално съобщение и махаме функционалността от всички бутони;
   function checkout() {
      textAreaRef.textContent += `You bought ${productsBought.join(", ")} for ${totalPrice.toFixed(2)}.`;
      for (let button of buttonsRef) {
         button.removeEventListener("click", add);  
      }
      checkoutButton.removeEventListener("click", checkout);
   }
}


