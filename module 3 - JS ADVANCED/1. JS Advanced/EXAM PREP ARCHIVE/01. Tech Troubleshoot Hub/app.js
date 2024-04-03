window.addEventListener('load', solution);

function solution() {

  const employeeInputRef = document.getElementById("employee");
  const categoryInputRef = document.getElementById("category");
  const urgencyInputRef = document.getElementById("urgency");
  const assignedTeamInputRef = document.getElementById("team");
  const descriptionInputRef = document.getElementById("description");

  const ulPreviewListRef = document.querySelector(".preview-list");
  const ulPendingListRef = document.querySelector(".pending-list");
  const ulResolvedListRef = document.querySelector(".resolved-list");

  const addBtnRef = document.getElementById("add-btn");




  addBtnRef.addEventListener("click", addEventBtnFn);

  function addEventBtnFn(event) {
    event.preventDefault();

    //All fields (Employee, Category, Urgency, Assigned Team, and Description) are filled with the correct input
    let employee = employeeInputRef.value;
    let category = categoryInputRef.value;
    let urgency = urgencyInputRef.value;
    let assignedTeam = assignedTeamInputRef.value;
    let description = descriptionInputRef.value;

    // •	Employee, Category, Urgency, Assigned Team, and Description are non-empty strings. If any of them is empty, the program should not do anything.
    if (!employee || !category || !urgency || !assignedTeam || !description) {
      return;
    }


    // 1.	Getting the information from the form:
    // • On clicking the ["Add"] button, the information from the input fields is listed in the "Preview" section by adding a list item to the ".preview-list" unordered list. 
    let liEl = document.createElement("li");
    liEl.classList.add("problem-content");

    // 	The list item should follow the same text format and order as shown in the provided picture.

    let articleEl = document.createElement("article");

    let pFromEl = document.createElement("p");
    pFromEl.textContent = `From: ${employee}`;

    let pCategoryEl = document.createElement("p");
    pCategoryEl.textContent = `Category: ${category}`;

    let pUrgencyEl = document.createElement('p');
    pUrgencyEl.textContent = `Urgency: ${urgency}`;

    let pAssignedToEl = document.createElement("p");
    pAssignedToEl.textContent = `Assigned to: ${assignedTeam}`;

    let pDescriptionEl = document.createElement("p");
    pDescriptionEl.textContent = `Description: ${description}`;

    articleEl.appendChild(pFromEl);
    articleEl.appendChild(pCategoryEl);
    articleEl.appendChild(pUrgencyEl);
    articleEl.appendChild(pAssignedToEl);
    articleEl.appendChild(pDescriptionEl);

    let btnEditEl = document.createElement("button");
    btnEditEl.classList.add("edit-btn");
    btnEditEl.textContent = "Edit";

    let btnContinueEl = document.createElement("button");
    btnContinueEl.classList.add("continue-btn");
    btnContinueEl.textContent = "Continue";

    liEl.appendChild(articleEl);
    liEl.appendChild(btnEditEl);
    liEl.appendChild(btnContinueEl);

    ulPreviewListRef.appendChild(liEl);


    // 	Upon clicking the button, the input fields must be cleared, and the ["Add"] button should be disabled. Additionally, the "Edit" and "Continue" buttons need to be added.
    employeeInputRef.value = "";
    categoryInputRef.value = "";
    urgencyInputRef.value = "";
    assignedTeamInputRef.value = "";
    descriptionInputRef.value = "";

    addBtnRef.disabled = true;



    // 2.	Editing the information
    // The functionality here is the following: 
    // •	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and all buttons in Preview section are removed while the ["Add"] button is enabled again.
    btnEditEl.addEventListener("click", editBtnFn);
    function editBtnFn(e) {

      employeeInputRef.value = employee;
      categoryInputRef.value = category;
      urgencyInputRef.value = urgency;
      assignedTeamInputRef.value = assignedTeam;
      descriptionInputRef.value = description;

      liEl.remove();
      addBtnRef.disabled = false;
    }


    // 3.	Continue to pending
    //•	When the "Continue" button is clicked, 
    // the information from "preview-list" unordered list must be transferred to "pending-list"
    // in the same HTML structure. For you, this means removing everything inside of the ul 
    // with class = "preview-list" and adding in "pending-list", the list item with same 
    //information and the "Resolved" button must be added.
    const btnResolvedEl = document.createElement("button");
    btnResolvedEl.classList.add("resolve-btn");
    btnResolvedEl.textContent = "Resolved";

    btnContinueEl.addEventListener("click", continueBtnFn);
    function continueBtnFn(e) {
      btnEditEl.remove();
      btnContinueEl.remove();

      liEl.appendChild(btnResolvedEl);
      ulPendingListRef.appendChild(liEl);
    }




    //4.	Add to resolved
    // •	When the "Resolved" button is clicked, the information from "pending-list" unordered list
    // must be transferred to "resolved-list" in the same HTML structure.For you, this means 
    //removing everything inside of the ul with class = "pending-list" and adding in 
    //"resolved-list", the list item with same information and the "Clear" button must be added.

    let btnClearEl = document.createElement("button");
    btnClearEl.classList.add("clear-btn");
    btnClearEl.textContent = "Clear";

    btnResolvedEl.addEventListener("click", resolveBtnFn);
    function resolveBtnFn(event) {
      btnResolvedEl.remove();
      liEl.appendChild(btnClearEl);
      ulResolvedListRef.appendChild(liEl);
    }



    // 5.	Clear information
    // •	When the "Clear" button is clicked, the list item must be removed, from the "resolved-list.
    // •	"Clear" button:
    btnClearEl.addEventListener("click", clearFn);
    function clearFn(e) {
      liEl.remove();
    }

  }
}




