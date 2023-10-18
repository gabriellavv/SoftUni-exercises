function solve() {

    let button = document.querySelector("button").addEventListener("click", onClick);  // създаваме си бутон, при чието натискане ще се изпълнява функция:

    let options = document.querySelector("#selectMenuTo");   // правим си променлива, с която да достъпваме select менюто

    // създaваме опция за избор на двоична система:
    let binaryOption = document.createElement("option");
    binaryOption.textContent = "Binary";
    binaryOption.value = "binary";
    options.appendChild(binaryOption);  // закачваме към менюто с опции;

    // създаваме опция за избор на 16-тична система:
    let hexadeicmalOption = document.createElement('option');
    hexadeicmalOption.textContent = "Hexadeicmal";
    hexadeicmalOption.value = "hecadeicmal";
    options.appendChild(hexadeicmalOption);


    function onClick() {
        let input = Number(document.getElementById("input").value);

        if (options.value === "binary") {   
            document.querySelector("footer input").value = input.toString(2); 
        } else {
            document.querySelector("footer input").value = input.toString(16).toUpperCase();
        }
    }
}
