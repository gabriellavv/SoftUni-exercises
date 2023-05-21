function login(input) {

    let username = input[0];

    let correctPassword = "";
    let index = username.length;

    for(let i = index - 1; i >= 0; i--) {
        correctPassword += username[i];
    }

    let index2 = 1;
    let counter = 0;
    
    while(input[index2] !== correctPassword) {

        counter++;

        if (counter > 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.")
        index2++;
        
    }

    if (input[index2] === correctPassword) {
        console.log(`User ${username} logged in.`);
    }
   
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);