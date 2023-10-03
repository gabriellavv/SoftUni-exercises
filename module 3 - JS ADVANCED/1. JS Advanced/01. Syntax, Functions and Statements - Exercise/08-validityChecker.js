function validityChecker(x1, y1, x2, y2) {

    function distance(_x1, _y1, _x2, _y2) {
        let dist = Math.sqrt(((_x2 - _x1) ** 2) + ((_y2 - _y1) ** 2));
        return Number.isInteger(dist);
    }

    if (distance(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (distance(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (distance(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1);