function timeToWalk(steps, meterPerFootprint, speedKmPerHour) {
// да изчислим колко време е нужно да изминем зададеното разстояние според дадените параметри:


    let distanceInM = steps * meterPerFootprint;            
    let speedMperSec = speedKmPerHour / 3.6;                
    let breakInSec = Math.floor(distanceInM / 500) * 60;    // на всеки 500 метра има 1 минута почивка
    let totalTimeInSec = distanceInM / speedMperSec + breakInSec;

    let hours = Math.floor(totalTimeInSec / 3600);      
    let minutes = Math.floor(totalTimeInSec / 60);
    let seconds = Math.round(totalTimeInSec % 60);

    // създаваме шаблони с водеща нула, където е нужна, за да отпечатаме в нужния формат.
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minsToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${hoursToPrint}:${minsToPrint}:${secToPrint}`);
}

timeToWalk(4000, 0.60, 5);    //00:32:48
timeToWalk(2564, 0.70, 5.5);  //00:22:35


