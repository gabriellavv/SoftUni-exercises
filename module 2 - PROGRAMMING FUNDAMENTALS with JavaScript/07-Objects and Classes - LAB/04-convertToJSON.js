function convertToJSON(firstName, lastName, hairColor) {

    let object = {

        name: firstName,
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(object));
}

convertToJSON('George', 'Jones', 'Brown');