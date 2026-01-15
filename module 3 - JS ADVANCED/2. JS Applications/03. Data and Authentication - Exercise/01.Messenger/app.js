function attachEvents() {

    const url = "http://localhost:3030/jsonstore/messenger"

    const textareaRef = document.getElementById("messages");
    const sendBtnRef = document.getElementById("submit");
    const refreshBtnRef = document.getElementById("refresh");
    const [authorRef, contentRef] = document.querySelectorAll("#controls input[type='text']");



    sendBtnRef.addEventListener("click", (event) => {
        let newObj = { "author": authorRef.value, "content": contentRef.value }

        fetch(url, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newObj)
        })

        authorRef.value = "";
        contentRef.value = "";
    })



    refreshBtnRef.addEventListener("click", async(n) => {

        const response = await fetch(url)
        const data = await response.json()

        let messagesArr = Object.values(data);
        let result = [];

        messagesArr.forEach(element => {
            result.push(`${element.author}: ${element.content}`)
        });

        textareaRef.textContent = result.join("\n");
    })
}

attachEvents();

