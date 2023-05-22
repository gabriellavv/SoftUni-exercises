function gramophone(band, album, song) {

    
    let songDurationInSec = (album.length * band.length) * song.length / 2;
    let rotations = songDurationInSec / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');