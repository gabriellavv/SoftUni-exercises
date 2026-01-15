let regForm = document.querySelector("form");

regForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);

    if (!email || !password || !rePass || password !== rePass) {
        alert("Invalid email or password!");

    } else {
        await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                } else {
                    throw new Error(res.status);
                }
            })
            .then((data) => {
                console.log(data)
                sessionStorage.setItem("token", data.accessToken);
                sessionStorage.setItem("email", data.email)
                sessionStorage.setItem("password", data.password)
                sessionStorage.setItem("id", data._id)
                window.location.href = "http://127.0.0.1:5500/03.%20Data%20and%20Authentication%20-%20Exercise/05.Fisher-Game/src/index.html"
            })
            .catch((err) => {
                console.log(err)
            })
    }
})


