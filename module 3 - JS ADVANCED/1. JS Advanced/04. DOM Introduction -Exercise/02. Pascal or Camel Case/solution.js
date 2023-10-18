function solve() {
  let input = document.getElementById("text").value.toLowerCase().split(" ");
  let type = document.getElementById("naming-convention").value;

  let result = "";
  switch (type) {

    case "Camel Case":
      result += input.shift();
      for (let el of input) {
        let capLetter = el[0].toUpperCase();
        result += capLetter;
        result += el.slice(1);
      } break;

    case "Pascal Case": 
    for (let el of input) {
      let capLetter = el[0].toUpperCase();
      result += capLetter;
      result += el.slice(1);
    }; break;

    default: result = "Error!";
  }

  document.getElementById("result").textContent = result;
}