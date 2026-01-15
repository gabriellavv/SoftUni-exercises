function colorize() {
    // document.querySelector("table tr:nth-child(2)")
    // .style.background = "teal";

    // document.querySelector("table tr:nth-child(4)")
    // .style.background = "teal";

    let rows = document.querySelectorAll("table tr");

    let index = 0;

    for (let row of rows) {
        index++;
        if (index % 2 == 0)
            row.style.background = "teal";
    }
}



