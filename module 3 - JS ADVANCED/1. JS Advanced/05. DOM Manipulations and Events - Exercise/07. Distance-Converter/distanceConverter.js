function attachEventsListeners() {

    // Your task is to convert from one distance unit to another by adding a click event listener to a button.
    const convertBtnRef = document.getElementById("convert");
    convertBtnRef.addEventListener("click", convertFn);

    const unitsToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    // When it is clicked, read the value from the input field and get the selected option from the input and output units dropdowns. 
    function convertFn(event) {

        let inputFieldValue = Number(document.getElementById("inputDistance").value);
        let inputUnits = document.getElementById("inputUnits").value;
        let outputUnits = document.getElementById("outputUnits").value;
        let outputField = document.getElementById("outputDistance");


        // Then calculate and display the converted value in the disabled output field.
        let inMeters = inputFieldValue * unitsToMeters[inputUnits];
        outputField.value = inMeters / unitsToMeters[outputUnits];

    }
}
