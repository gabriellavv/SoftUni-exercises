function loadCommits() {
    // The loadCommits() function should get the username and repository from the HTML textboxes 
    // with IDs "username" and "repo" and make a GET request to the Github API:
    let usernameRef = document.getElementById("username");
    let repoRef = document.getElementById("repo");
    let commitsRef = document.getElementById("commits");

    // Swap <username> and <repository> with the ones from the HTML:
    fetch(`https://api.github.com/repos/${usernameRef.value}/${repoRef.value}/commits`, {
        method: "GET"
    })
        .then((res) => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })

        // •	In case of success, for each entry add a list item (<li>) in the unordered list (<ul>) with id "commits" with text in the following format:
        // "<commit.author.name>: <commit.message>" 
        .then((data) => {
            data.forEach(element => {
                let li = document.createElement("li");
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                commitsRef.appendChild(li);
            });
        })
        // •	In case of an error, add a single list item (<li>) with text in the following format:
        // "Error: <error.status> (Not Found)"
        .catch((err) => {
            let li = document.createElement("li");
            li.textContent = `Error: ${err.status} (Not Found)`;
            commitsRef.appendChild(li);
        })



}