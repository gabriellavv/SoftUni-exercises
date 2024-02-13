window.addEventListener('load', solve);                 // judge score:  94/100

function solve() {

    let timeInput = document.getElementById("time");
    let dateInput = document.getElementById("date");
    let placeInput = document.getElementById("place");
    let eventInput = document.getElementById("event-name");
    let contactsInput = document.getElementById("email");


    // 1.Getting the information from the form:
    let addEventBtnRef = document.getElementById("add-btn");
    addEventBtnRef.addEventListener("click", (e) => {
        e.preventDefault();

        let time = timeInput.value;
        let date = dateInput.value;
        let place = placeInput.value;
        let eventValue = eventInput.value;
        let contacts = contactsInput.value;

        if (!time || !date || !place || !eventValue || !contacts) {
            return;
        }

        //const lastCheckSectionRef = document.getElementById("second-field");
        const ulCheckListRef = document.getElementById("check-list");

        // let newLI = document.createElement("li");
        ulCheckListRef.innerHTML = `<li class="event-content">
            <article>
          <p>Contact: ${contacts} </p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
      </li>`;

        // When the button is clicked, the input fields must be cleared, and the ["Add Event"] button should be disabled. 
        timeInput.value = "";
        dateInput.value = "";
        placeInput.value = "";
        eventInput.value = "";
        contactsInput.value = "";
        addEventBtnRef.disabled = true;

        // Additionally, the "Edit" and "Continue" buttons need to be added.
        let editBtnRef = document.getElementsByClassName("edit-btn")[0];
        let continueBtnRef = document.getElementsByClassName("continue-btn")[0];



        // 2:
        // •	When the "Edit" button is clicked, all of the information is loaded in to the input fields from step 1
        // and all the buttons in Last Check section are removed while the ["Add Event"] button is enabled again.

        editBtnRef.addEventListener("click", loadBackToInputFieldsFn);

        function loadBackToInputFieldsFn(event) {
            timeInput.value = time;
            dateInput.value = date;
            placeInput.value = place;
            eventInput.value = eventValue;
            contactsInput.value = contacts;
            addEventBtnRef.disabled = false;

            let liRef = ulCheckListRef.querySelector("li");
            ulCheckListRef.removeChild(liRef);
        };


        // 3:
        continueBtnRef.addEventListener("click", transferToUpcomingListFn);
        const ulUpcomingListRef = document.getElementById("upcoming-list");
        function transferToUpcomingListFn(event) {
            ulUpcomingListRef.innerHTML = `<li class="event-content">
<article>
<p>Begins: ${date} at: ${time}</p>
<p>In: ${place}</p>
<p>Event: ${eventValue}</p>
<p>Contact: ${contacts}</p>
</article>
<button class="finished-btn">Move to Finished</button>
</li>`;

            let liRef = ulCheckListRef.querySelector("li");
            ulCheckListRef.removeChild(liRef);
            addEventBtnRef.disabled = false;



            // move to Finished:
            let moveToFinishedBtnRef = ulUpcomingListRef.getElementsByClassName("finished-btn")[0];
            moveToFinishedBtnRef.addEventListener("click", moveToFinishedListFn);

            function moveToFinishedListFn(event) {
                const ulFinishedListRef = document.getElementById("finished-list");
                ulFinishedListRef.innerHTML = `<li class="event-content">
            <article>
            <p>Begins: ${date} at: ${time}</p>
            <p>In: ${place} </p>
            <p>Event: ${eventValue} </p>
            <p>Contact: ${contacts} </p>
            </article>
            </li>`;

                let upcomingLiRef = ulUpcomingListRef.querySelector("li");
                ulUpcomingListRef.removeChild(upcomingLiRef);



                let clearBtnRef = document.getElementById("clear");
                clearBtnRef.addEventListener("click", clearFn);

                function clearFn(event) {
                    let liRef = ulFinishedListRef.querySelector("li");
                    ulFinishedListRef.removeChild(liRef);
                }

            };

        }

    });

}




