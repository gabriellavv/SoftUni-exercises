window.addEventListener("load", solve);

function solve() {

  // input fields references:
  let firstNameRef = document.getElementById("first-name");
  let lastNameRef = document.getElementById("last-name");
  let ageRef = document.getElementById("age");
  let storyTitleRef = document.getElementById("story-title");
  let genreRef = document.getElementById("genre");
  let storyRef = document.getElementById("story");

  // buttons references:
  let publishBtnRef = document.getElementById("form-btn");

  // element references: 
  let ulPreviewEl = document.getElementById("preview-list");
  let divMainEl = document.getElementById("main");


  publishBtnRef.addEventListener("click", (e) => {
    e.preventDefault()

    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let age = ageRef.value;
    let storyTitle = storyTitleRef.value;
    let genre = genreRef.value;
    let story = storyRef.value;

    // If any of them is empty, the program should not do anything.'
    if (!firstName || !lastName || !age || !storyTitle || !genre || !story) {
      return;
    }


    // 1.	Getting the information from the form:
    // •	On clicking the [“Publish”] button the information from the input fields is listed in the "preview" section. 
    // For the input fields a list item is added to the "preview-list" unordered list. 
    const liEl = document.createElement("li");
    liEl.classList.add("story-info");

    const articleEl = document.createElement("article");

    const h4El = document.createElement("h4");
    h4El.textContent = `Name: ${firstName} ${lastName}`;

    const pAgeEl = document.createElement("p");
    pAgeEl.textContent = `Age: ${age}`;

    const pTitleEl = document.createElement("p");
    pTitleEl.textContent = `Title: ${storyTitle}`;

    const pGenreEl = document.createElement("p");
    pGenreEl.textContent = `Genre: ${genre}`;

    const pStoryEl = document.createElement("p");
    pStoryEl.textContent = `${story}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(pAgeEl);
    articleEl.appendChild(pTitleEl);
    articleEl.appendChild(pGenreEl);
    articleEl.appendChild(pStoryEl);

    const btnSaveEl = document.createElement("button");
    btnSaveEl.className = "save-btn";
    btnSaveEl.textContent = "Save Story";

    const btnEditEl = document.createElement("button");
    btnEditEl.className = "edit-btn";
    btnEditEl.textContent = "Edit Story";

    const btnDeleteEl = document.createElement("button");
    btnDeleteEl.className = "delete-btn";
    btnDeleteEl.textContent = "Delete Story";

    liEl.appendChild(articleEl);
    liEl.appendChild(btnSaveEl)
    liEl.appendChild(btnEditEl)
    liEl.appendChild(btnDeleteEl);

    ulPreviewEl.appendChild(liEl);

    // When the button is clicked, the input fields must be cleared 
    firstNameRef.value = "";
    lastNameRef.value = "";
    ageRef.value = "";
    storyTitleRef.value = "";
    genreRef.value = "";
    storyRef.value = "";

    // and the ["Publish"] button must be disabled.
    publishBtnRef.disabled = true;

    //At the same time the "Save", "Edit" and the "Delete" buttons must be enabled. 
    btnSaveEl.disabled = false;
    btnEditEl.disabled = false;
    btnDeleteEl.disabled = false;



    // 2.	Editing the information:
    //	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1
    btnEditEl.addEventListener("click", (e) => {
      e.preventDefault();

      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      ageRef.value = age;
      storyTitleRef.value = storyTitle;
      genreRef.value = genre;
      storyRef.value = story;

      //  and all buttons in preview section are disabled 
      btnSaveEl.disabled = true;
      btnEditEl.disabled = true;
      btnDeleteEl.disabled = true;

      // while the ["Publish"] button is enabled again.
      publishBtnRef.disabled = false;

      // The list items must be removed from the "preview-list" and all of the information must go back to the input fields again
      ulPreviewEl.removeChild(liEl);
    })


    // 3.	Saving the information:
    // When the "Save" button is clicked, the story is completed. 
    btnSaveEl.addEventListener("click", (e) => {
      e.preventDefault()

      // For you, this means removing everything inside of the div with id = "main" 
      divMainEl.textContent = "";

      // and adding there only a <h1> tag. With message:  "Your scary story is saved!"
      const h1El = document.createElement("h1");
      h1El.textContent = "Your scary story is saved!";
      divMainEl.appendChild(h1El);
    })


    // When the "Delete" button is clicked, 
    btnDeleteEl.addEventListener("click", (e) => {
      e.preventDefault()

      // the list item must be removed from the "preview-list"
      liEl.remove();

      // and the["Publish"] button is enabled again.
      publishBtnRef.disabled = false;
    })

  })

};
