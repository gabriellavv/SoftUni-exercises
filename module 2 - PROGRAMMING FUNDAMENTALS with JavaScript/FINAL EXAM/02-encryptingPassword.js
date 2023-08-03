function encryptingPassword(input) {

    let count = Number(input[0]);

    let validExample = "$$$>312|dfe|KFE|@!#<$$$";
    let validLength = validExample.length;

    let pattern = /(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^><]{3})<\1/

    for (let i = 1; i <= count; i++) {

        let currentPass = input[i];

        let isValidPass = pattern.test(currentPass);

        if (isValidPass) {

            let matches = pattern.exec(currentPass);

            console.log("Password: " + matches[2] + matches[3] + matches[4] + matches[5]);

        } else {
            console.log("Try another password!");
        }
    }

}

encryptingPassword((["3",

    "##>00|no|NO|!!!?<###",

    "##>123|yes|YES|!!!<##",

    "$$<111|noo|NOPE|<<>$$"]));