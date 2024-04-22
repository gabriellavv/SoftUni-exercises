const recipesURL = "http://localhost:3030/jsonstore/cookbook/recipes"

function loadRecipes() {
    fetch(recipesURL, {
        method: "GET"
    }).then((res) => {
        if (!res.status == 200) {
            throw new Error("Wrong status code");
        }
        return res.json();
    })
        .then((data) => {
            console.log(data)

            const mainRef = document.querySelector("main");
            const loaderRef = document.getElementById("loader");
            loaderRef.style.display = "none";

            Object.values(data).forEach(element => {

                let articleEl = document.createElement("article");
                articleEl.classList.add("preview");

                let divTitleEl = document.createElement("div");
                divTitleEl.classList.add("title");

                let h2El = document.createElement("h2");
                h2El.textContent = element.name;

                divTitleEl.appendChild(h2El);
                articleEl.appendChild(divTitleEl);


                let divSmallEl = document.createElement("div");
                divSmallEl.classList.add("small");

                let imgEl = document.createElement("img");
                imgEl.setAttribute("src", element.img)

                divSmallEl.appendChild(imgEl);
                articleEl.appendChild(divSmallEl);


                // след като кликнем на дадено ястие, правим нова заявка, чрез която ни се зарежда подробна информация за рецептата:

                articleEl.addEventListener("click", () => {
                    fetch(`http://localhost:3030/jsonstore/cookbook/details/${element._id}`, {
                        method: "GET"
                    })
                        .then((res) => {
                            if (res.status !== 200) {
                                throw new Error("Wrong status code");
                            }
                            return res.json();
                        })
                        .then((data) => {
                            console.log(data);

                            divTitleEl.remove();
                            divSmallEl.remove();
                            articleEl.classList.remove("preview");

                            // div class="Band":
                            let divBandEl = document.createElement("div");
                            divBandEl.classList.add("band");

                            let divThumbEl = document.createElement("div");
                            divThumbEl.classList.add("thumb");
                            divThumbEl.appendChild(imgEl);


                            let divIngredientsEl = document.createElement("div");
                            divIngredientsEl.classList.add("ingredients");

                            let h3El = document.createElement("h3");
                            h3El.textContent = "Ingredients:";

                            let ulEl = document.createElement("ul");
                            data.ingredients.forEach(element => {
                                let liEl = document.createElement("li");
                                liEl.textContent = element;
                                ulEl.appendChild(liEl);
                            });

                            divIngredientsEl.appendChild(h3El);
                            divIngredientsEl.appendChild(ulEl);

                            divBandEl.appendChild(divThumbEl);
                            divBandEl.appendChild(divIngredientsEl);


                            //div class="description":
                            let divDescriptionEl = document.createElement("div");
                            divDescriptionEl.classList.add("description");

                            let h3DescEl = document.createElement("h3");
                            h3DescEl.textContent = "Preparation:";
                            divDescriptionEl.appendChild(h3DescEl);

                            data.steps.forEach(element => {
                                let pEl = document.createElement("p");
                                pEl.textContent = element;
                                divDescriptionEl.appendChild(pEl);
                            });


                            articleEl.appendChild(h2El)
                            articleEl.appendChild(divBandEl);
                            articleEl.appendChild(divDescriptionEl);

                        })
                        .catch((err) => console.log(err));
                });

                mainRef.appendChild(articleEl);
            });


        })
        .catch((err) => console.log(err));
}

loadRecipes();