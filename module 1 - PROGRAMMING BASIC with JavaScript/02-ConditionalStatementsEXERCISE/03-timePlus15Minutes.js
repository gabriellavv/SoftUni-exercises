function timePlus15Minutes (input) {

    let oclock = Number(input[0]);
    let minutes = Number(input[1]);
    let extra15 = 15;

   let totalMinutes = (oclock * 60) + minutes + extra15;
   let hours = Math.floor(totalMinutes / 60);
   let mins = totalMinutes % 60;

   if (hours == 24) {
    hours = 0;
   }

   if (mins < 10 ) {
    console.log (`${hours}:0${mins}`);
   } else {
    console.log (`${hours}:${mins}`);
   }

}

timePlus15Minutes (["23", "59"]);