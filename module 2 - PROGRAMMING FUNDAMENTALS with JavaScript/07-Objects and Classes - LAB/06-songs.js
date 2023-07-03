function songs(array) {

    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
        printName() {
            console.log(`${this.name}`);
        }
    }

    let numberOfSongs = Number(array.shift());
    let typeList = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split("_");
        let currentSong = new Songs(type, name, time);

        if (typeList === "all") {
            currentSong.printName();
        } else if (typeList === type) {
            currentSong.printName();
        }
    }
}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);