function validate() {
    const inputFieldRef = document.querySelector("#email");
    inputFieldRef.addEventListener("change", validationFn);

    function validationFn() {

        let currentText = inputFieldRef.value;
        let regex = /^[a-z]+@[a-z]+.[a-z]+$/;
        let containsValidEmail= regex.test(currentText);

        if(!containsValidEmail) {
            inputFieldRef.className = "error";
        } else {
            inputFieldRef.className = "";
        }
    }
    
}