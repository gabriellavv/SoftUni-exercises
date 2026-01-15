const logoutBtnRef = document.getElementById("logout");
logoutBtnRef.style.display = "none";

document.querySelector("form").addEventListener("submit", onLogin)

async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }


    try {
        const response = await fetch("http://localhost:3030/users/login", data)
        if(response.status !== 200) {
            throw new Error("Error: Response status is not 200")
        }
        const userData = await response.json();

        console.log(userData);
        sessionStorage.setItem("token", userData.accessToken);
        sessionStorage.setItem("email", userData.email)
        sessionStorage.setItem("password", userData.password)
        sessionStorage.setItem("id", userData._id)
        window.location.href = "http://127.0.0.1:5500/03.%20Data%20and%20Authentication%20-%20Exercise/05.Fisher-Game/src/index.html"

    } catch (error) {
        throw new Error("login error ->" + error);
    }


}