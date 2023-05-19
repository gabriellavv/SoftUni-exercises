function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = "";
    let accomodation = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        switch(season){
            case "summer": price = budget * 0.3; 
            accomodation = "Camp"; 
            break;
            case "winter": price = budget * 0.7; 
            accomodation = "Hotel";
            break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch(season){
            case "summer": price = budget * 0.4; 
            accomodation = "Camp"; 
            break;
            case "winter": price = budget * 0.8; 
            accomodation = "Hotel";
            break;
        }
    } else {
        destination = "Europe";
        price = budget * 0.9;
        accomodation = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);