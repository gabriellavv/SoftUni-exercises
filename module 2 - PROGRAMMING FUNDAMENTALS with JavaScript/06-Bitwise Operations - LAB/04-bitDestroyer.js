function bitDestroyer(number, position) {

    let newNumber = 0;
    
    number = number & ~(1 << position) | (newNumber << position)

    console.log(number)

}

bitDestroyer(1313, 5);