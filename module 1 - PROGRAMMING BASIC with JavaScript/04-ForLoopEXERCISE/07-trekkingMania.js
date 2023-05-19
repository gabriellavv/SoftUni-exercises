function trekkingMania(input) {

    let groups = Number(input[0]);

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let people = 0;

    for (let i = 1; i <= groups; i++) {

        people += Number(input[i]);

        if (input[i] <= 5) {
            musala += Number(input[i]);
        } else if (input[i] <= 12) {
            montBlanc += Number(input[i]);
        } else if (input[i] <= 25) {
            kilimanjaro += Number(input[i]);
        } else if (input[i] <= 40) {
            k2 += Number(input[i]);
        } else {
            everest += Number(input[i]);
        }
    }


    console.log((100/people * musala).toFixed(2) + "%");
    console.log((100/people * montBlanc).toFixed(2) + "%");
    console.log((100/people * kilimanjaro).toFixed(2) + "%");
    console.log((100/people * k2).toFixed(2) + "%");
    console.log((100/people * everest).toFixed(2) + "%");
}

trekkingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])