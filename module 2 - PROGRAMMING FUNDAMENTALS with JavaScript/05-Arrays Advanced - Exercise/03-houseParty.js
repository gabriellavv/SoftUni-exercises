function houseParty(array) {

    let print = [];
    for(let i = 0; i < array.length; i++) {

        let command = array[i].split(" ");

        if (command.length === 3) {

            if(!print.includes(command[0])) {
                print.push(command[0]);
            } else {
                console.log(`${command[0]} is already in the list!`);
            }


        } else if (command.length === 4) {

            if(print.includes(command[0])) {
                let index = print.indexOf(command[0], 0);
                print.splice(index, 1);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }

    console.log(print.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);

