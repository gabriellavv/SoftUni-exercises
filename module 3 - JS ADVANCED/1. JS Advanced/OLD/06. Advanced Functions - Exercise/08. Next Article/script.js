function getArticleGenerator(articles) {      // jQuery !

    // Write a JS program that sequentially displays articles on a web page when the user clicks a button.
    // You will receive an array of strings that will initialize the program. 
    // You need to return a function that keeps the initial array in its closure 
    // and every time it’s called, it takes the first element from the array and displays it on the web page,
    // inside "article", in div with ID "content".
    
    let container = $('div#content');

    return function () {
        if (articles.length > 0) {         // If there are no more elements left, your function should do nothing.
            container.append($('<article>').text(articles.shift()));
        }
    };
}