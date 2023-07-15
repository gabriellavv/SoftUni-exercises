function addressBook(input) {

    let addressBook = {};

    for (let element of input) {
        let [name, address] = element.split(":"); 

        addressBook[name] = address;
    }

    let sortingArray = Object.entries(addressBook).sort(([a], [b]) => a.localeCompare([b]));

    for(let [key, value] of sortingArray) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);