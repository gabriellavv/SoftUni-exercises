// информация подадена в условието:
function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const inputData = `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`;



// решение с apply: 

function solve(area, vol, input) {

    const objects = JSON.parse(input);
    let output = [];

    objects.forEach(obj => {    // прилагаме area и vol на всеки един обект от подадения като инпут масив от обекти:
        const cubeArea = area.apply(obj);   // така се сменя контекста на this-а и прави изчисления за всеки подаден обект по отделно.
        const cubeVol = vol.apply(obj);

        output.push({           // Към масива, в който събираме изходните данни, добавяме обект със получените стойностти.
            area: cubeArea,
            volume: cubeVol
        })
    });

    return output;
}

console.log(solve(area, vol, inputData));


// решение с call:

// function solve(area, vol, input) {
//     let objects = JSON.parse(input);
//     function calc(obj) {
//         let areaObj = Math.abs(area.call(obj));
//         let volumeObj = Math.abs(vol.call(obj));
//         return { area: areaObj, volume: volumeObj }
//     }
//     return objects.map(calc);
// }



