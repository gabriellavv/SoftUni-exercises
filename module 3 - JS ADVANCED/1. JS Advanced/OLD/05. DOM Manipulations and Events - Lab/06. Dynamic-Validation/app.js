function validate() {

    const inputRef = document.getElementById("email");
    const regexp = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

    inputRef.addEventListener("change", checkValidation);

    function checkValidation() {
        let validEmail = regexp.test(inputRef.value);
        if (!validEmail) {
            inputRef.className = "error";

        } else {
            inputRef.className = "";
        }
    }

}