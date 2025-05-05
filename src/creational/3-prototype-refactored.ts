abstract class Shape {
    x?: number;
    y?: number;
    color?: string;

    abstract clone(): Shape;
}

class Circle extends Shape {
    radius?: number;

    clone(): Shape {
        const clone = new Circle();
        clone.x = this.x;
        clone.y = this.y;
        clone.color = this.color;
        clone.radius = this.radius;

        return clone;
    }
}

class Square extends Shape {
    side?: number;

    clone(): Shape {
        const clone = new Square();
        clone.x = this.x;
        clone.y = this.y;
        clone.color = this.color;
        clone.side = this.side;

        return clone;
    }
}

const myShape: Shape = new Circle();
myShape.x = 10;
myShape.y = 20;
myShape.color = "red";
(myShape as Circle).radius = 5;

let myClone: Shape = myShape.clone();

console.log(myClone);

export { };
