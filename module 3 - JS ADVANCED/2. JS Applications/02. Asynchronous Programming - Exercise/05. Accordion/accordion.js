async function solution() {
    // An html file is given and your task is to show more/less information for the selected article.

    // At the start you should do a GET request to the server at adress: http://localhost:3030/jsonstore/advanced/articles/list  
    // where the response will be an object with the titles of the articles.
    let titlesObj = await (await fetch("http://localhost:3030/jsonstore/advanced/articles/list")).json();
    let main = document.getElementById("main");

    Object.values(titlesObj).forEach(element => {
        let accordionDiv = createElement("div", undefined, "accordion");

        let divHead = createElement("div", undefined, "head");
        let span = createElement("span", element.title);
        let button = createElement("button", "More", "button", element._id)
        button.addEventListener("click", (event) => moreFn(event, p, divExtra));
        divHead.appendChild(span);
        divHead.appendChild(button);

        let divExtra = createElement("div", undefined, "extra");
        let p = createElement("p");
        divExtra.appendChild(p);

        accordionDiv.appendChild(divHead);
        accordionDiv.appendChild(divExtra);

        main.appendChild(accordionDiv);
    });



    function createElement(type, content, className, id) {
        let result = document.createElement(type);

        if (content) {
            result.textContent = content;
        }

        if (className) {
            result.className = className;
        }

        if (id) {
            result.id = id;
        }

        return result;
    }

    // By clicking the [More] button for the selected article, it should reveal the content of a hidden div
    // and changes the text of the button to [Less]. Obtain the content by making a GET request to the server at adress: 
    // http://localhost:3030/jsonstore/advanced/articles/details/:id  where the response will be an object with 
    // property id, title, content. 
    async function moreFn(event, p, divExtra) {

        let moreData = await (await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${event.target.id}`)).json();
        p.textContent = moreData.content;

        if(event.target.textContent == "More"){
            event.target.textContent = "Less";
            divExtra.style.display = "flex";
        } else {
            event.target.textContent = "More";
            divExtra.style.display = "none";
        }
    }
}

solution();