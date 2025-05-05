class GameObject {
    private spriteImageData: Uint8Array;
    public x: number;
    public y: number;
    public vx: number;
    public vy: number;

    constructor(type: string, x: number, y: number, vx: number, vy: number) {
        if (type === "ship") {
            this.spriteImageData = new Uint8Array([
                0xFF, 0x00, 0x00,
                0x00, 0xFF, 0x00,
                0x00, 0x00, 0xFF
            ]);
        } else if (type === "asteroid") {
            this.spriteImageData = new Uint8Array([
                0x80, 0x80, 0x80,
                0x40, 0x40, 0x40,
                0xC0, 0xC0, 0xC0
            ]);
        } else {
            throw new Error("Invalid game object type");
        }
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    public update(): void {
        this.x += this.vx;
        this.y += this.vy;
    }

    public display(): void {
        console.log(`Position: (${this.x}, ${this.y}) ${this.spriteImageData}`);
    }
}

function game() {
    const gameObjects: GameObject[] = [];

    gameObjects.push(new GameObject("ship", 10, 20, 2, 3));
    gameObjects.push(new GameObject("ship", 30, 40, 3, 1));
    gameObjects.push(new GameObject("asteroid", 50, 60, -1, -2));
    gameObjects.push(new GameObject("asteroid", 70, 80, 0, -1));

    for (let i = 0; i < 5; i++) {
        console.log(`\nGame tick ${i + 1}:`);
        gameObjects.forEach(obj => {
            obj.update();
            obj.display();
        });
    }
}

game();

export { };
