function solve() {

    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);

    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");

    let sections = document.getElementsByTagName("section");
    let open = sections[1];
    let inProgress = sections[2];
    let complete = sections[3];

    function onSubmit(event) {

        event.preventDefault()

        // When the [Add] button is clicked, first you need to validate the inputs.
        //  If any of the input fields are empty, the function doesn’t make anything.
        if (!task.value || !description.value || !date.value) {
            return;
        }

        // After validating the input fields, you need to add the new task (article) in the "Open" section. 
        let myArticle = createArticle(task.value, description.value, date.value);
        let divToAppendArticle = open.querySelectorAll("div")[1];
       return divToAppendArticle.appendChild(myArticle);
    }


    function createArticle(name, description, date) {

        let newArticleEl = document.createElement("article");
        newArticleEl.innerHTML =
            `<h3>${name}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
        </div>`;

        task.value = "";
        description.value = "";
        date.value = "";

        // The article should have two buttons "Start" and "Delete". 
        // Be careful to set the classes for the buttons and the parent-div.
        const startBtnRef = newArticleEl.querySelector(".green");
        const deleteBtnRef = newArticleEl.querySelector(".red");
        startBtnRef.addEventListener("click", moveArticleFn)
        deleteBtnRef.addEventListener("click", deleteArticleFn);

        return newArticleEl;
    }


    // When the [Start] button is clicked, you need to move the Task in the section "In Progress".  
    function moveArticleFn(event) {

        let currArticle = event.target.parentElement.parentElement;
        // changing the buttons:
        currArticle.querySelector("button").className = "red";
        currArticle.querySelector("button").textContent = "Delete";
        currArticle.querySelector("button").addEventListener("click", deleteArticleFn);
        currArticle.querySelectorAll("button")[1].className = "orange";
        currArticle.querySelectorAll("button")[1].textContent = "Finish";
        currArticle.querySelectorAll("button")[1].addEventListener("click", finishFn);

        let divToAppendArticle = inProgress.querySelectorAll("div")[1];
        return divToAppendArticle.appendChild(currArticle);
    }


    // When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML. 
    function deleteArticleFn(event) {
        let currArticle = event.target.parentElement.parentElement;
        return currArticle.parentNode.removeChild(currArticle);
    }


    // After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". 
    // The buttons with their parent div-element should be removed.
    function finishFn(event) {

        let currArticle = event.target.parentElement.parentElement;
        let articleButtonsRef = currArticle.querySelector("button");
        articleButtonsRef.parentElement.remove();   // removing the buttons from complete section
        
        let divToAppendArticle = complete.querySelectorAll("div")[1];
        return divToAppendArticle.appendChild(currArticle);
    }
}




