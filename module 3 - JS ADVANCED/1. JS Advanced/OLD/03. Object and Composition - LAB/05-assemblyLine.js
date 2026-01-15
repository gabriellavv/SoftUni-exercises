function createAssemblyLine() {

    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    obj.temp++;
                } else if (car.temp > car.tempSettings) {
                    obj.temp--;
                }
            };
        },

        hasAudio(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = () => {
                if (currentTrack) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },


        hasParktronic(obj) {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }
    }

}


assemblyLine();