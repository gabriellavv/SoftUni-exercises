class Point {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    static distance(a, b) {
        let x = b.x - a.x;
        let y = b.y - a.y;
        let result = Math.sqrt(x ** 2 + y ** 2);
        return result;
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
