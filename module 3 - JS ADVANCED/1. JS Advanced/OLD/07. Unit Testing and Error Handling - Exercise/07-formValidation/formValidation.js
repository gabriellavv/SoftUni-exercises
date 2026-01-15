function validate() {

    // премахваме презареждането на страницата на всеки клик на събмит бутона:
    const formRef = document.getElementById("registerForm");
    formRef.addEventListener("submit", function (event) {
        event.preventDefault();
    });


    // references:
    const usernameRef = document.getElementById("username");
    const emailRef = document.getElementById("email");
    const passwordRef = document.getElementById("password");
    const confirmPasswordRef = document.getElementById("confirm-password");
    const checkboxRef = document.getElementById("company");
    const companyInfoRef = document.getElementById("companyInfo");
    const companyNumberRef = document.getElementById("companyNumber");
    const submitBtnRef = document.getElementById("submit");
    const validDivRef = document.getElementById("valid");

    // validation patterns:
    const usernameRegExp = /^[a-zA-Z0-9]{3,20}$/;  
    const passwordRegExp = /^[a-zA-Z0-9\_]{5,15}$/gm;
    const emailRegExp = /^[^@.]+@[^@]*\.[^@]*$/;      
    // Company Number field must be a number between 1000 and 9999.


    // checkbox functionality: 
    checkboxRef.addEventListener("change", checkboxChangeFn);
    function checkboxChangeFn(event) {
        if (checkboxRef.checked) {
            companyInfoRef.style.display = "block";
        } else {
            companyInfoRef.style.display = "none";
        }
    }


    submitBtnRef.addEventListener("click", submitFn);
    function submitFn(event) {


        // fields validation:

        let isValidUsername = usernameRegExp.test(usernameRef.value);
        isValidUsername ? usernameRef.style.border = "none" : usernameRef.style.borderColor = "red";

        let isEmailValid = emailRegExp.test(emailRef.value);
        isEmailValid ? emailRef.style.border = "none" : emailRef.style.borderColor = "red";

        let isPasswordValid = passwordRegExp.test(passwordRef.value);
        isPasswordValid ? passwordRef.style.border = "none" : passwordRef.style.borderColor = "red";

        let isConfirmPasswordValid = false;
        confirmPasswordRef.style.borderColor = "red"
        if (passwordRef.value === confirmPasswordRef.value) {
            if (isPasswordValid) {
                isConfirmPasswordValid = true;
                confirmPasswordRef.style.border = "none";
            }
        } else {
            isPasswordValid = false; 
            passwordRef.style.borderColor = "red";
        }

        let isCompanyNumValid = false;
        if (checkboxRef.checked) {
            const companyNumber = Number(companyNumberRef.value);
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                isCompanyNumValid = true;
                companyNumberRef.style.border = "none";
            } else {
                isCompanyNumValid = false;
                companyNumberRef.style.borderColor = "red";
            }
        }


        // whole form validation:
        if (checkboxRef.checked) {

            if (isValidUsername && isEmailValid && isPasswordValid && isConfirmPasswordValid && isCompanyNumValid) {
                validDivRef.style.display = "block";
            } else {
                validDivRef.style.display = "none";
            }

        } else {

            if (isValidUsername && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
                validDivRef.style.display = "block";
            } else {
                validDivRef.style.display = "none";
            }
        }

    }
}

