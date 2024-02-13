window.addEventListener("load", solve);

// Write the missing JavaScript code to make the Dish Manager work as expected:
// All fields (First Name, Last Name, Age and Dish description) are filled with the correct input

function solve() {

  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let ageInput = document.getElementById("age");
  let genderSelect = document.getElementById("genderSelect");
  let dishDescription = document.getElementById("task");

  let submitBtnRef = document.getElementById("form-btn");
  let ulInProgressRef = document.getElementById("in-progress");
  let inProgressCounterRef = document.getElementById("progress-count");
  let ulFinishedRef = document.getElementById("finished");


  submitBtnRef.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let gender = genderSelect.value;
    let dishInfo = dishDescription.value;

    // 	First Name, Last Name, Age and Dish description are non-empty strings. If any of them are empty, the program should not do anything.
    if (!firstName || !lastName || !age || !gender || !dishInfo) {
      return;
    }


    // 1.Getting the information from the form:
    // When you click the ["Submit"] button, the information from the input fields 
    // must be added to the ul with the id "in-progress" 
    const liEl = document.createElement("li");
    liEl.classList.add("each-line");

    const articleEl = document.createElement("article");

    const h4El = document.createElement("h4");
    h4El.textContent = `${firstName} ${lastName}`;

    const pGenderAgeEl = document.createElement("p");
    pGenderAgeEl.textContent = `${gender}, ${age}`;

    const pDishDescEl = document.createElement("p");
    pDishDescEl.textContent = `Dish description: ${dishInfo}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(pGenderAgeEl);
    articleEl.appendChild(pDishDescEl);

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("edit-btn");
    editBtnEl.textContent = "Edit";

    const completeBtnEl = document.createElement("button");
    completeBtnEl.classList.add("complete-btn");
    completeBtnEl.textContent = "Mark as complete";

    liEl.appendChild(articleEl);
    liEl.appendChild(editBtnEl);
    liEl.appendChild(completeBtnEl);

    ulInProgressRef.appendChild(liEl);

    // and then clear input fields. 
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    genderSelect.value = "";
    dishDescription.value = "";

    // Also the counter with id "progress-count" should be increased by 1.  
    inProgressCounterRef.textContent = Number(inProgressCounterRef.textContent) + 1;



    // 2.	Edit information for posts
    // When the ["Edit"] button is clicked, the information from the post must be sent to the input’s fields
    editBtnEl.addEventListener("click", (e) => {
      e.preventDefault();

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      dishDescription.value = dishInfo;
      genderSelect.value = gender;

      // and the record should be deleted from the ul "in-progress". 
      liEl.remove()

      // Also the counter with id "progress-count" should be decreased by 1. 
      inProgressCounterRef.textContent = Number(inProgressCounterRef.textContent) - 1;

      //After editing the information make a new record to the ul with updated information and increase the counter.
    });


    // 3.	Complete posts:
    // When you click the ["Mark as complete"] button, the record must be deleted from the ul with id "in-progress",
    // appended to the ul with the id "finished"
    completeBtnEl.addEventListener("click", (e) => {
      e.preventDefault();

      ulFinishedRef.appendChild(liEl);

      // and the counter with id "progress-count" should be decreased by 1.
      inProgressCounterRef.textContent = Number(inProgressCounterRef.textContent) - 1;

      //The buttons [“Edit”] and [“Mark as complete”] should be removed from the li element.
      editBtnEl.remove();
      completeBtnEl.remove();

    });


    // 4.	Clear posts:
    // When you click the ["Clear"] button, the record for all posts must be deleted from the ul with the id "finished".
    let clearBtnRef = document.getElementById("clear-btn");
    clearBtnRef.addEventListener("click", (e) => {
      e.preventDefault();

      ulFinishedRef.removeChild(liEl);

    });
  });
};
