function inventory(array) {

    let heroesRegister = [];

    for (let line of array) {
        let [name, level, items] = line.split(" / ");

        let heroObj = {
            name: name,
            level: Number(level),
            items: items,
        }

        heroesRegister.push(heroObj);
    }

    heroesRegister.sort((a, b) => a.level - b.level);

    for (let hero of heroesRegister) {

        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);