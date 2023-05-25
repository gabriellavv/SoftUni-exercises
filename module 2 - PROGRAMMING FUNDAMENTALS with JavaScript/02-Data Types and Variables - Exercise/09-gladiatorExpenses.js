function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetDamage = 0;
    let swordDamage = 0;
    let shieldDamage = 0;
    let armorDamage = 0;

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 === 0) {
            helmetDamage++;
        }

        if(i % 3 === 0) {
            swordDamage++;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            shieldDamage++;
        }

        if (shieldDamage % 2 === 0 && shieldDamage != 0 && i % 2 === 0 && i % 3 === 0) {
            armorDamage++;
        }
    }

    let price = (helmetDamage*helmetPrice) + (swordDamage*swordPrice) + (shieldDamage*shieldPrice) + (armorDamage*armorPrice);

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}

gladiatorExpenses(
    23,
12.50,
21.50,
40,
200);