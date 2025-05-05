class Shape {
    x?: number;
    y?: number;
    color?: string;
}

class Circle extends Shape {
    radius?: number;
}

class Square extends Shape {
    side?: number;
}

const myShape: Shape = new Circle();
myShape.x = 10;
myShape.y = 20;
myShape.color = "red";
(myShape as Circle).radius = 5;

let myClone: Shape | undefined;

if (myShape instanceof Circle) {
    myClone = new Circle();
    myClone.x = myShape.x;
    myClone.y = myShape.y;
    myClone.color = myShape.color;
    (myClone as Circle).radius = myShape.radius;
} else if (myShape instanceof Square) {
    myClone = new Square();
    myClone.x = myShape.x;
    myClone.y = myShape.y;
    myClone.color = myShape.color;
    (myClone as Square).side = myShape.side;
}

console.log(myClone);

export {};
