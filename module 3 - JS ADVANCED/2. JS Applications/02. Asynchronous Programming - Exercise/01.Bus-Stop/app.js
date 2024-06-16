function getInfo() {
    // Write a JS program that displays arrival times for all buses by a given bus stop ID when a button is clicked. 
    // Use the skeleton from the provided resources.
    // When the button with ID 'submit' is clicked, the name of the bus stop appears 
    // and the list bellow gets filled with all the buses that are expected and their time of arrival. 


    //Take the value of the input field with id 'stopId'. 
    const inputFieldRef = document.getElementById("stopId");
    const stopNameDivRef = document.getElementById("stopName");
    const busesUlRef = document.getElementById("buses");

    // Submit a GET request to http://localhost:3030/jsonstore/bus/businfo/:busId (replace the highlighted part with the correct value) 
    // and parse the response. You will receive a JSON object in the format:
    // stopId: {
    //     name: stopName,
    //         buses: { busId: time, … }
    // }

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputFieldRef.value}`, {
        method: "GET"
    })
        .then((res) => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then((data) => {
            console.log(data);

            busesUlRef.innerHTML = "";
            inputFieldRef.value = "";
            // Place the name property as text inside the div with ID 'stopName' and each bus as a list item with text:
            // "Bus {busId} arrives in {time} minutes".  Replace all highlighted parts with the relevant value from the response.
            stopNameDivRef.textContent = data.name;

            for(const [busId, time] of Object.entries(data.buses)) {
                 let liEl = document.createElement('li');
                 liEl.textContent = `Bus ${busId} arrives in ${time} minutes`
                 busesUlRef.appendChild(liEl);
            }
        })
        // If the request is not successful, or the information is not in the expected format, display "Error" as stopName and nothing in the list.
        .catch((err) => {
            busesUlRef.innerHTML = "";
            stopNameDivRef.textContent = "Error";
        })
        // The list should be cleared before every request is sent.
}