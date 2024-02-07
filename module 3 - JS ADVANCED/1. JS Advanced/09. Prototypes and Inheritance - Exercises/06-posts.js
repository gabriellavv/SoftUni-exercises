function solution() {

    // You need to create several classes for Posts.
    // Implement the following classes:

    // 	Post, which is initialized with the title (String) and content (String)
    //	The 2 arguments should be public members
    //	The Post class should also have toString() function which returns the following result:
    // "Post: {postTitle}"
    // "Content: {postContent}"
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        };

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        };
    };


    // 	SocialMediaPost, which inherits the Post class and 
    // should be initialized with 2 additional arguments - likes (Number) and dislikes (Number). 
    // The class should hold:	
    // comments(Strings) -  an array of strings
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        // 	addComment(comment)- a function, which adds comments to that array
        addComment(comment) {
            this.comments.push(comment);
        };

        // 	The class should extend the toString() function of the Post class, and should return the following result:
        toString() {
            let postResult = super.toString();
            let rating = `Rating: ${this.likes - this.dislikes}`

            // In case there are no comments, return information only about the title, content, and rating of the post.
            let comments = this.comments.length > 0 ? `Comments:\n${this.comments.map(comment => ` * ${comment}`).join(`\n`)}` : "";

            return [postResult, rating, comments].join("\n").trim();
        };
    };


    //  BlogPost, which inherits the Post class:
    // The BlogPost class should be initialized with 1 additional argument - views(Number).
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        };

        // The BlogPost class should hold view() - which increments the views of the object with 1, every time it is called. 
        // The function should return the object so that chaining is supported.
        view() {
            this.views++;
            return this;
        };

        // The BlogPost class should extend the toString() function of the Post class, and should return the following result:
        // "Post: {postTitle}"
        // "Content: {postContent}"
        // "Views: {postViews}"
        toString() {
            let postResult = super.toString();
            let viewsResult = `Views: ${this.views}`;

            return [postResult, viewsResult].join("\n");
        }
    };

    // Submit a function (NOT IIFE), which holds all classes, and returns them as an object.
    return { Post, SocialMediaPost, BlogPost };
};

solution();