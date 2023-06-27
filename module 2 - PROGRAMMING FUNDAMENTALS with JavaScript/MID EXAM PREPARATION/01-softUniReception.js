function softUniReception(input) {

    input = input.map(Number);

    let studentsPerHour = input[0] + input[1] + input[2];
    let sutdentsCount = input[3];
    let hoursCount = 0;

    while (sutdentsCount > 0) {

        sutdentsCount -= studentsPerHour;
        hoursCount++;

        if (hoursCount % 4 === 0) {
            hoursCount++;
        }
    }

    console.log(`Time needed: ${hoursCount}h.`);
}

softUniReception(['1', '2', '3', '45']);