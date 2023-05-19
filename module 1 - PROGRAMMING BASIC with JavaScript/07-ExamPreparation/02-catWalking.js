function catWalking(input) {

    let minutesWalking = input[0];
    let walkingsCount = input[1];
    let calories = input[2];

    let caloriesBurnt =(walkingsCount * minutesWalking) * 5; 

    if ((caloriesBurnt * 2) >= calories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`);
    }
}

catWalking(["30",
"3",
"600"])


