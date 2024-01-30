function classHierarchy() {

// Figure:
// •	Should have property units ("m", "cm", "mm") with default value "cm"
// •	Should have a getter area
// •	Has method changeUnits that sets different units for that figure 
// •	Has method toString, which returns: `Figures units: {units}`
class Figure {
    constructor(units = "cm") {
        this.units = units;
    }

    get area() {
        return
    }

    changeUnits(newUnits) {
        this.units = newUnits;
    }

    toString() {
        return `Figures units: ${this.units}`
    }


    transformMetric(valInCm) {
        // return this.units === 'm' ?
        //     valInCm / 100 : this.units === 'mm' ? valInCm * 10 : valInCm;

        if (this.units === "m") {
            return valInCm / 100;
        } else if (this.units === "mm") {
            return valInCm * 10;
        } else if (this.units === "cm") {
            return valInCm;
        }
    }
}




//     Circle:
// •	Extends Figure
// •	Has a property radius
// •	Overrides area getter to return the area of the Circle (PI * r * r)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - radius: {radius}`

class Circle extends Figure {
    constructor(radius, units) {
        super(units);
        this.radius = radius;
    }

    get area() {
        const radius = this.transformMetric(this.radius);
        return Math.PI * radius * radius;
    }

    toString() {
        const radius = this.transformMetric(this.radius);
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`
    }
}


//     Rectangle:
// •	Extends Figure
// •	Has properties width, height, and units (extended from the class Figure)
// •	Overrides area getter to return the area of the Rectangle (width * height)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - width: {width}, height: {height}`
class Rectangle extends Figure {
    constructor(width, height, units) {
        super(units);
        this.width = width;
        this.height = height;
    }

    get area() {
        const width = this.transformMetric(this.width);
        const height = this.transformMetric(this.height);
        return width * height;
    }

    toString() {
        const width = this.transformMetric(this.width);
        const height = this.transformMetric(this.height);
        return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
}


    return {
        Figure,
        Circle,
        Rectangle
    }
}






