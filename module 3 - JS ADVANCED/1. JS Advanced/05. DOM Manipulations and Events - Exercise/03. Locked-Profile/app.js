function lockedProfile() {
    //  In this problem, you should create a JS functionality that shows and hides the additional information about users.

    const showMoreButtons = Array.from(document.querySelectorAll("button"));  // взимаме си в масив всички бутони и им закачаме подслушвател
    showMoreButtons.forEach(btn => {
        btn.addEventListener("click", showMoreFn)
    });


    function showMoreFn(event) {
        let chosenProfile = event.target.parentNode;  // взимаме си елемента, върху който е възникнало събитието
        let lock = chosenProfile.querySelector("input");  // взимаме тага, който съдържа отметка

        if (!lock.checked) {      // ако профила не е заключен :
            chosenProfile.querySelector("div").style.display = "inline-block";   // променяме от none на Inline-block за да се покажат скритите елементи;

            let currentBtnRef = chosenProfile.querySelector("button");  // даваме на бутона ново име и нова функционалност
            currentBtnRef.textContent = "Hide it";
            currentBtnRef.addEventListener("click", hideItFn);
        }
    }


    function hideItFn(event) {
        let chosenProfile = event.target.parentNode;
        let lock = chosenProfile.querySelector("input");

        if (!lock.checked) {
            chosenProfile.querySelector("div").style.display = "none";
        }
    }

}