window.addEventListener('load', solve);

function solve() {

    const timeElRef = document.getElementById("time");
    const dateElRef = document.getElementById("date");
    const placeElRef = document.getElementById("place");
    const eventElRef = document.getElementById("event-name");
    const contactsElRef = document.getElementById("email");

    const addBtnRef = document.getElementById("add-btn");

    const ulCheckListRef = document.getElementById("check-list");
    const ulUpcomingRef = document.getElementById("upcoming-list");
    const ulFinishedRef = document.getElementById("finished-list");




    addBtnRef.addEventListener("click", addEventBtnFn)

    function addEventBtnFn(e) {
        e.preventDefault();

        // All fields (Time, Date, Place, Event, and Contacts) are filled with the correct input
        let time = timeElRef.value;
        let date = dateElRef.value;
        let place = placeElRef.value;
        let event = eventElRef.value;
        let contacts = contactsElRef.value;


        // Time, Date, Place, Event, and Contacts are non-empty strings. If any of them is empty, the program should not do anything.
        if (!time || !date || !place || !event || !contacts) {
            return;
        }



        // 1.Getting the information from the form
        // When the ["Add Event"] button is clicked, the information from the input fields is listed in the "Last Check" section.
        // A list item is added to the "check-list" unordered list. 

        let liEl = document.createElement("li");
        liEl.classList.add("event-content");

        // The list item should follow the same text format and order as shown in the provided picture.
        let articleEl = document.createElement("article");

        let pBeginsEl = document.createElement("p");
        pBeginsEl.textContent = `Begins: ${date} at: ${time}`;

        let pInEl = document.createElement("p");
        pInEl.textContent = `In: ${place}`;

        let pEventEl = document.createElement("p");
        pEventEl.textContent = `Event: ${event}`;

        let pContactsEl = document.createElement('p');
        pContactsEl.textContent = `Contact: ${contacts}`;

        articleEl.appendChild(pBeginsEl);
        articleEl.appendChild(pInEl);
        articleEl.appendChild(pEventEl);
        articleEl.appendChild(pContactsEl);

        let buttonEditEl = document.createElement("button");
        buttonEditEl.classList.add("edit-btn");
        buttonEditEl.textContent = "Edit";

        let buttonContinueEl = document.createElement("button");
        buttonContinueEl.classList.add("continue-btn");
        buttonContinueEl.textContent = "Continue";

        liEl.appendChild(articleEl);
        liEl.appendChild(buttonEditEl);
        liEl.appendChild(buttonContinueEl);

        ulCheckListRef.appendChild(liEl);


        // When the button is clicked, the input fields must be cleared:
        timeElRef.value = "";
        dateElRef.value = "";
        placeElRef.value = "";
        eventElRef.value = "";
        contactsElRef.value = "";

        // and the ["Add Event"] button should be disabled.
        addBtnRef.disabled = true;



        //2.Edit Event
        //The functionality here is the following: 
        buttonEditEl.addEventListener("click", editFn);
        function editFn(e) {
            //	When the "Edit" button is clicked, all of the information is loaded in to the input fields from step 1 
            timeElRef.value = time;
            dateElRef.value = date;
            placeElRef.value = place;
            eventElRef.value = event;
            contactsElRef.value = contacts;

            // and all the buttons in Last Check section are removed while the ["Add Event"] button is enabled again.
            liEl.remove();
            addBtnRef.disabled = false;
        }



        // 3.Continue :
        // When the "Continue" button is clicked, the information from "check-list" unordered list 
        // must be transferred to "upcoming-list" in the same HTML structure. 
        // For you, this means removing everything inside of the <ul> with class = "check-list" and adding in " upcoming-list", 
        //the list item with same information The "Move to Finished" buttons must be added while the ["Add Event"] button is enabled again.
        const finishBtnEl = document.createElement("button");
        finishBtnEl.classList.add("finished-btn");
        finishBtnEl.textContent = "Move to Finished";

        buttonContinueEl.addEventListener("click", continueFn);
        function continueFn(e) {
            buttonEditEl.remove();
            buttonContinueEl.remove();

            liEl.appendChild(finishBtnEl);
            ulUpcomingRef.appendChild(liEl);
        }





        // 3.Move to Finished
        // When the "Move to Finished" button is clicked, the information from the "upcoming-list" unordered list 
        // must be transferred to "finished-list" in the same HTML structure. For you, 
        // this means removing everything inside of the <ul> with class = "upcoming-list" and adding in to"finished-list", 
        //the list item with same information. The "Move to Finished” button must be removed. 
        finishBtnEl.addEventListener("click", finishFn);
        function finishFn(e) {
            ulFinishedRef.appendChild(liEl);
            finishBtnEl.remove();
        }



        // 4.Clear
        // When the "Clear" button is clicked, the list item must be removed, from the "finished-list".
        let clearBtnRef = document.getElementById("clear");

        clearBtnRef.addEventListener("click", clearFn);
        function clearFn(e) {
            liEl.remove();
        }
    }
}




