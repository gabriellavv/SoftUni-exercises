function loadRepos() {

	// Your task is to write a JS function that executes an AJAX request with Fetch API 
	// and loads all user github repositories by a given username (taken from an input field with id "username")
	//  into a list (each repository as a list-item) with id "repos".
	const usernameRef = document.getElementById("username");
	const reposListRef = document.getElementById("repos");

	fetch(`https://api.github.com/users/${usernameRef.value}/repos`, {
		method: "GET"
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
			reposListRef.innerHTML = "";
			//  Use the properties full_name and html_url of the returned objects to create a link to each repo’s GitHub page.
			data.forEach(element => {

				let liEl = document.createElement('li');
				let a = document.createElement("a");

				a.textContent = element.full_name;
				a.href = element.html_url;

				liEl.appendChild(a);
				reposListRef.appendChild(liEl)
			});
		})
		// If an error occurs(like 404 “Not Found”), append to the list a list - item with text the current instead.
		.catch((err) => {
			reposListRef.innerHTML = "";
			let liEl = document.createElement('li');
			liEl.textContent = err;
			reposListRef.appendChild(liEl);
		})
	//Clear the contents of the list before any new content is appended.See the highlighted lines of the skeleton for formatting details of each list item.

}




// ДРУГО РЕШЕНИЕ:
// async function loadRepos() {
// 	const html = {
// 		nameField: document.getElementById(`username`),
// 		resultE: document.getElementById(`repos`),
// 	}

// 	const data = await fetch(`https://api.github.com/users/${html.nameField.value}/repos`)
// 	const deserilized = await data.json()

// 	html.resultE.innerHTML = ''

// 	deserilized.forEach(({ full_name, html_url }) => {
// 		const li = document.createElement('li')
// 		const a = document.createElement('a')
// 		a.innerHTML = full_name
// 		a.href = html_url

// 		li.appendChild(a)
// 		html.resultE.appendChild(li)
// 	})
// }