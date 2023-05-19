function moving(input) {

    let index = 0;
    let width = Number(input[index++]);
    let lenght = Number(input[index++]);
    let height = Number(input[index++]);
    let freeSpace = width * lenght * height;

    while (input[index] !== "Done") {
        let boxes = Number(input[index++]);
        freeSpace -= boxes;

        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }

    }

    if (input[index] === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

moving([
    "10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);