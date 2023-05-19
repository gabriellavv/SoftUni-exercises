function depositCalculator (input) {

    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let lihvenProcent = Number(input[2]);

    let natrupanaLihva = deposit * (lihvenProcent / 100);
    let lihvaZa1Mesec = natrupanaLihva / 12;
    let sum = deposit + (months * lihvaZa1Mesec);

    console.log (sum);
}

depositCalculator (["2350", "6", "7"]);