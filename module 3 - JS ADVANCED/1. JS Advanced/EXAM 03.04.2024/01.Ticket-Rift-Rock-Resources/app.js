window.addEventListener("load", solve);


// Write the missing JavaScript code to make the Ticket Rift Rock work as expected:

function solve() {

    let numOfTicketsInputRef = document.getElementById("num-tickets");
    let seatingPrefInputRef = document.getElementById("seating-preference");
    let fullNameInputRef = document.getElementById("full-name");
    let emailInputRef = document.getElementById("email");
    let phoneNumInputRef = document.getElementById("phone-number");

    let ulTicketPreview = document.getElementById("ticket-preview");
    let ulTicketPurchase = document.getElementById("ticket-purchase");
    let divBottomContent = document.querySelector(".bottom-content");


    let purchaseBtnRef = document.getElementById("purchase-btn");




    purchaseBtnRef.addEventListener("click", purchaseBtnFn);

    function purchaseBtnFn(event) {
        event.preventDefault();

        // All fields (Number of Tickets, Seating Preference, Full Name, Email, and Phone Number) are filled with the correct input
        let numOfTickets = numOfTicketsInputRef.value;
        let seatingPref = seatingPrefInputRef.value;
        let fullName = fullNameInputRef.value;
        let email = emailInputRef.value;
        let phoneNum = phoneNumInputRef.value;

        // •	Number of Tickets, Seating Preference, Full Name, Email, and Phone Number are non-empty strings. If any of them is empty, the program should not do anything.
        if (!numOfTickets || !seatingPref || !fullName || !email || !phoneNum) {
            return;
        }



        //1.Getting the information from the form:
        // • When the ["Purchase Tickets"] button is clicked, the information from the input fields is listed in the unordered list. 
        //A list item is added to the " ticket-preview" unordered list. 
        let liEl = document.createElement("li");
        liEl.classList.add("ticket-purchase");

        // 	The list item should follow the same text format and order as shown in the provided picture.
        let articleEl = document.createElement("article");

        let pCountEl = document.createElement("p");
        pCountEl.textContent = `Count: ${numOfTickets}`;

        let pPrefEl = document.createElement("p");
        pPrefEl.textContent = `Preference: ${seatingPref}`;

        let pToEl = document.createElement('p');
        pToEl.textContent = `To: ${fullName}`;

        let pEmailEl = document.createElement("p");
        pEmailEl.textContent = `Email: ${email}`;

        let pPhoneNumEl = document.createElement("p");
        pPhoneNumEl.textContent = `Phone Number: ${phoneNum}`;

        articleEl.appendChild(pCountEl);
        articleEl.appendChild(pPrefEl);
        articleEl.appendChild(pToEl);
        articleEl.appendChild(pEmailEl);
        articleEl.appendChild(pPhoneNumEl);

        let divContainerEl = document.createElement("div");
        divContainerEl.classList.add("btn-container");

        let btnEditEl = document.createElement("button");
        btnEditEl.classList.add("edit-btn");
        btnEditEl.textContent = "Edit";

        let btnNextEl = document.createElement("button");
        btnNextEl.classList.add("next-btn");
        btnNextEl.textContent = "Next";

        divContainerEl.appendChild(btnEditEl);
        divContainerEl.appendChild(btnNextEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(divContainerEl);

        ulTicketPreview.appendChild(liEl);



        // 	When the button is clicked, the input fields must be cleared, and the ["Purchase  Tickets"] button should be disabled. 
        // Additionally, the "Edit" and "Next" buttons need to be added.
        numOfTicketsInputRef.value = "";
        seatingPrefInputRef.value = "";
        fullNameInputRef.value = "";
        emailInputRef.value = "";
        phoneNumInputRef.value = "";

        purchaseBtnRef.disabled = true;



        //2.Edit Ticket Info
        // The functionality here is the following: 
        // •	When the "Edit" button is clicked, all of the information is loaded in to 
        // the input fields from step 1 and list item is removed while the ["Purchase Tickets"] button is enabled again.
        btnEditEl.addEventListener("click", editBtnFn);
        function editBtnFn(e) {

            numOfTicketsInputRef.value = numOfTickets;
            seatingPrefInputRef.value = seatingPref;
            fullNameInputRef.value = fullName;
            emailInputRef.value = email;
            phoneNumInputRef.value = phoneNum;

            liEl.remove();
            purchaseBtnRef.disabled = false;
        }




        //3.Next 
        // •	When the "Next" button is clicked, the information from "ticket-preview" unordered list 
        // must be transferred to "ticket-purchase". For you, this means removing everything inside of 
        //the <ul> with class = "ticket-preview" and adding in "ticket-purchase", 
        //the list item with same information The "Buy" button must be added.
        const btnBuyEl = document.createElement("button");
        btnBuyEl.classList.add("buy-btn");
        btnBuyEl.textContent = "Buy";
       
        btnNextEl.addEventListener("click", nextBtnFn);
        function nextBtnFn(e) {

            divContainerEl.remove();
            articleEl.appendChild(btnBuyEl);
            liEl.appendChild(articleEl);
            ulTicketPurchase.appendChild(liEl);
        }



        // Buying
        // •	When the "Buy" button is clicked,  you must remove list item from "ticket-purchase" 
        // unordered list and then add  h2 element with text "Thank you for your purchase! " 
        // and "Back" button
        let btnBackEl = document.createElement("button");
        btnBackEl.classList.add("back-btn");
        btnBackEl.textContent = "Back";
        let h2El = document.createElement("h2");
        h2El.textContent = "Thank you for your purchase!";

        btnBuyEl.addEventListener("click", buyBtnFn);
        function buyBtnFn(event) {
            liEl.remove()

            divBottomContent.appendChild(h2El);
            divBottomContent.appendChild(btnBackEl);
        }


        //   4.Back
        // When the "Back" button is clicked, you must reload the page or remove h2 element 
        // with text "Thank you for your purchase! " and ["Back"] button while the 
        //["Purchase Tickets"] button is enabled again.
        btnBackEl.addEventListener("click", backBtnFn);
        function backBtnFn(event) {
            h2El.remove()
            btnBackEl.remove();
            purchaseBtnRef.disabled = false;
        }

    }



}
