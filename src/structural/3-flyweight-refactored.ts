interface Sprite {
    getImageData(): Uint8Array;
}

class ShipSprite implements Sprite {
    private imageData: Uint8Array;

    constructor() {
        this.imageData = new Uint8Array([
            0xFF, 0x00, 0x00,
            0x00, 0xFF, 0x00,
            0x00, 0x00, 0xFF
        ]);
    }

    public getImageData(): Uint8Array {
        return this.imageData;
    }
}

class AsteroidSprite implements Sprite {
    private imageData: Uint8Array;

    constructor() {
        this.imageData = new Uint8Array([
            0x80, 0x80, 0x80,
            0x40, 0x40, 0x40,
            0xC0, 0xC0, 0xC0
        ]);
    }

    public getImageData(): Uint8Array {
        return this.imageData;
    }
}

class SpriteFactory {
    private static sprites: Map<string, Sprite> = new Map();

    public static getSprite(type: string): Sprite {
        if (!SpriteFactory.sprites.has(type)) {
            if (type === "ship") {
                SpriteFactory.sprites.set(type, new ShipSprite());
            } else if (type === "asteroid") {
                SpriteFactory.sprites.set(type, new AsteroidSprite());
            }
        }

        return SpriteFactory.sprites.get(type)!;
    }
}

class GameObject {
    private sprite: Sprite;
    public x: number;
    public y: number;
    public vx: number;
    public vy: number;

    constructor(type: string, x: number, y: number, vx: number, vy: number) {
        this.sprite = SpriteFactory.getSprite(type);
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
        console.log(`Position: (${this.x}, ${this.y}) ${this.sprite.getImageData()}`);
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
