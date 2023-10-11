function heroicInventory(input) {

let register = [];

for(let i = 0; i < input.length; i++) { 
    let [name, heroLevel, items] = input[i].split(" / ");
    
    heroLevel = Number(heroLevel);

    items = items ? items.split(", ") : [];
    
    let currentResult = {
        name,
        "level": heroLevel,
        items,
    }

    register.push(currentResult);
}

console.log(JSON.stringify(register));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);