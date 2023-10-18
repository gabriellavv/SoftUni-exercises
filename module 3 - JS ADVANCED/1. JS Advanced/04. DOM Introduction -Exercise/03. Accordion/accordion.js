function toggle() {
let button = document.getElementsByClassName("button")[0];
let extraInfo = document.getElementById("extra");

    // if (button.textContent === "More") {
    //     button.textContent = "Less";
    //     extraInfo.style.display = "block";
        
    
    // } else if (button.textContent === "Less") {
    //     button.textContent = "More";
    //     extraInfo.style.display = "none";
    // }

   button.textContent = button.textContent === "More" ? "Less" : "More";
   extraInfo.style.display = extraInfo.style.display === "block" ? "none" : "block";
}