const loginBtnRef = document.getElementById("login");
const registerBtnRef = document.getElementById("register");
const homeBtnRef = document.getElementById("home");
const logoutBtnRef = document.getElementById("logout");
const emailSpan = document.querySelector("span");

if (sessionStorage.getItem("token")) {
    loginBtnRef.style.display = "none";
    registerBtnRef.style.display = "none";
    homeBtnRef.style.display = "inline";
    logoutBtnRef.style.display = "inline";
    emailSpan.textContent = sessionStorage.getItem("email");
} else {
    loginBtnRef.style.display = "inline";
    registerBtnRef.style.display = "inline";
    homeBtnRef.style.display = "inline";
    logoutBtnRef.style.display = "none";
    emailSpan.textContent = "guest";
}


logoutBtnRef.addEventListener("click", async (e) => {
    let response = await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: {
            "X-Authorization": sessionStorage.getItem("token")
        }
    })

    sessionStorage.clear();
    window.location.href = "http://127.0.0.1:5500/03.%20Data%20and%20Authentication%20-%20Exercise/05.Fisher-Game/src/index.html"
})