function accountBalance(input) {

    let index = 0
    let deposit = input[index];
    index++;
    let total = 0;
    
    while (deposit !== "NoMoreMoney") {

        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${Number(deposit).toFixed(2)}`);
        total += Number(deposit);
        deposit = input[index];
        index++;
    }

        console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance([
    "120", "45.55", "-150"]);