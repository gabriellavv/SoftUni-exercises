function solve() {
    // Write a JS program that tracks the progress of a bus on it’s route and announces it inside an info box. 
    // The program should display which is the upcoming stop and once the bus arrives, to request from the server the name of the next one.
    // Use the skeleton from the provided resources.

    // The bus has two states – moving and stopped. When it is stopped, only the button “Depart” is enabled,
    // while the info box shows the name of the current stop. 
    // When it is moving, only the button “Arrive” is enabled, while the info box shows the name of the upcoming stop.
    // Initially, the info box shows "Not Connected" and the "Arrive" button is disabled. The ID of the first stop is "depot".

    // When the "Depart" button is clicked, make a GET request to the server with the ID of the current stop 
    // to address http://localhost:3030/jsonstore/bus/schedule/:id (replace the highlighted part with the relevant value). 
    //As a response, you will receive a JSON object in the following format:
    // stopId {
    //     name: stopName,
    //     next: nextStopId
    //   }

    let infoBoxRef = document.getElementsByClassName('info');
    let departBtnRef = document.getElementById("depart");
    let arriveBtnRef = document.getElementById("arrive");
    let currentStop = "";
    let nextStopID = "depot";


    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopID}`, {
            method: "GET"
        })
            .then((res) => {
                if (res.status == 200) {
                    return res.json()
                } else {
                    throw new Error(res.status);
                }
            })
            .then((data) => {
                console.log(data);
                // Update the info box with the information from the response,
                // The info box text should look like this (replace the highlighted part with the relevant value):
                currentStop = data.name;
                nextStopID = data.next;
                infoBoxRef[0].textContent = `Next stop ${currentStop}`;

                // disable the “Depart” button and enable the “Arrive” button. 
                departBtnRef.disabled = true;
                arriveBtnRef.disabled = false;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // When the "Arrive" button is clicked, update the text, disable the “Arrive” button and enable the “Depart” button.
    // The info box text should look like this (replace the highlighted part with the relevant value):
    // Arriving at {stopName}
    function arrive() {
        infoBoxRef[0].textContent = `Arriving at ${currentStop}`;
        departBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();