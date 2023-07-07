function movies(inputArray) {

    let moviesArr = [];

    for (let line of inputArray) {

        let currentLine = line.split(" ");

        if (currentLine.includes("addMovie")) {
            currentLine.shift();
            let movieName = currentLine.join(" ");
            moviesArr.push({ name: movieName });

        } else if (currentLine.includes("directedBy")) {
            let movieName = currentLine.slice(0, currentLine.indexOf("directedBy")).join(" ");
            let movieDirector = currentLine.slice(currentLine.indexOf("directedBy") + 1).join(" ");

            for (let element of moviesArr) {
                if (movieName === element.name) {
                    element.director = movieDirector;
                }
            }

        } else if (currentLine.includes("onDate")) {
            let movieName = currentLine.slice(0, currentLine.indexOf("onDate")).join(" ");
            let movieDate = currentLine.pop();

            for (let element of moviesArr) {
                if (movieName === element.name) {
                    element.date = movieDate;
                }
            }
        }
    }

    for (let object of moviesArr) {
        if (object.name && object.director && object.date) {
            console.log(JSON.stringify(object));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])