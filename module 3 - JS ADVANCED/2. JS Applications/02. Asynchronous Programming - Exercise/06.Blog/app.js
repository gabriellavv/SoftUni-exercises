function attachEvents() {
    // Write a program for reading blog content. 
    // It needs to make requests to the server and display all blog posts and their comments.
    // Request URL’s:
    // Posts - http://localhost:3030/jsonstore/blog/posts
    // Comments - http://localhost:3030/jsonstore/blog/comments

    document.querySelector('#btnLoadPosts').addEventListener('click', loadPostsBtnFn);
    document.querySelector('#btnViewPost').addEventListener('click', viewBtnFn);
    let posts = [];

    // The button with ID "btnLoadPosts" should make a GET request to "/posts". 
    // The response from the server will be an Object of objects.
    // Each object will be in the following format:
    // {
    //     body: {postBody},
    //     id: {postId},
    //     title: {postTitle} 
    //   }
    async function loadPostsBtnFn() {
        let data = await getData('http://localhost:3030/jsonstore/blog/posts');
        posts = [...Object.values(data)];

        // Create an <option> for each post using its object key(еднакво е с object.id) as value
        // and current object title property as text inside the node with ID "posts".
        let selectElement = document.querySelector('#posts');
        selectElement.innerHTML = "";
        Object.values(data).forEach(post => {
            let option = createOption(post);
            selectElement.appendChild(option);
        });
    }



    // When the button with ID "btnViewPost" is clicked, a GET request should be made to:
    // •	"/comments/:id" to obtain the selected post (from the dropdown menu with ID "posts") - The following request will return a single object as described above.
    // •	"/comments - to obtain all comments. The request will return a Object of objects.
    // Each object will be in the following format: 
    // { 
    //     id: {commentId},
    //     postId: {postId},
    //     text: {commentText}
    //   }
    async function viewBtnFn(e) {
        //You have to find this comments that are for the current post (check the postId property)
        let select = e.target.previousElementSibling;
        let id = select.options[select.selectedIndex].value;

        let post = posts.find(currPost => currPost.id === id);

        // Display the post title inside h1 with ID "post-title" 
        //and the post content inside p with ID "post-body". 
        let postTitle = document.querySelector('#post-title');
        postTitle.textContent = post.title;

        let postBody = document.querySelector('#post-body');
        postBody.textContent = post.body;

        // Display each comment as a <li> inside ul with ID "post-comments". 
        // Do not forget to clear its content beforehand.
        let comments = document.querySelector('#post-comments');
        comments.innerHTML = "";

        let data = await getData('http://localhost:3030/jsonstore/blog/comments');
        Object.values(data).filter(x => x.postId === id).forEach(currComment => {
            let comment = createComment(currComment);
            comments.appendChild(comment);
        });
    }

    async function getData(url) {
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }

    function createComment(comment) {
        let liCommentElement = document.createElement('li');
        liCommentElement.id = comment.id;
        liCommentElement.textContent = comment.text;

        return liCommentElement;
    }


    function createOption(post) {
        let option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;

        return option;
    }
}

attachEvents();