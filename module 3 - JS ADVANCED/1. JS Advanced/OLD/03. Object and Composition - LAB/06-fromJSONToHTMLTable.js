function fromJSONToHTMLTable(json) {

    let array = JSON.parse(json);

    let result = "<table>\n";

    let keys = Object.keys(array[0]);

    function escape(par) {
        return par.replace(/[&<>" –—©®™≈≠£€°]/g, (result) => {
            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&quot;",
                " ": "&nbsp;",
                "-": "&ndash;",
                "—": "&mdash;",
                "©": "&copy;",
                "®": "&reg;",
                "™": "&trade;",
                "≈": "&asymp;",
                "≠": "&ne;",
                "£": "&pound;",
                "€": "&euro;",
                "°": "&deg;",
            }
            if (map[result]) {
                return map[result];
            }
            return result;
        })
    }

    let heading = keys.map(el => {
        el = escape(el);
        let col = `<th>${el}</th>`
        return col;
    });

    let firstRow = `   <tr>${heading.join("")}</tr>`;
    result += firstRow;

    for (let obj of array) {
        let value = Object.values(obj);
        let row = value.map(el => {
            if (typeof el === "string") {
                el = escape(el);
            }
            let col = `<td>${el}</td>`;
            return col;
        });
        let nextRow = `   <tr>${row.join("")}</tr>`;
        result += `\n${nextRow}`;
    }

    result += "\n</table>";

    return result;
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));