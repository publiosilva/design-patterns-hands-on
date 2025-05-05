class Hamburger {
    bread?: boolean;
    breadType?: string;
    meat?: boolean;
    meatType?: string;
    numberOfMeat?: number;
    cheese?: boolean;
    cheeseType?: string;
    lettuce?: boolean;
    tomato?: boolean;

    constructor(
        bread?: boolean,
        breadType?: string,
        meat?: boolean,
        meatType?: string,
        numberOfMeat?: number,
        cheese?: boolean,
        cheeseType?: string,
        lettuce?: boolean,
        tomato?: boolean
    ) {
        this.bread = bread;
        this.breadType = breadType;
        this.meat = meat;
        this.meatType = meatType;
        this.numberOfMeat = numberOfMeat;
        this.cheese = cheese;
        this.cheeseType = cheeseType;
        this.lettuce = lettuce;
        this.tomato = tomato;
    }
}


const type: "vegan"
    | "vegan_without_cheese"
    | "regular"
    | "regular_without_cheese"
    | "regular_with_double_meat" = "vegan_without_cheese";
let hamburger: Hamburger | undefined;

if (type === "vegan_without_cheese") {
    hamburger = new Hamburger(true, "sesame", true, "vegan", 1, false, undefined, false, true);
} else if (type === "vegan") {
    hamburger = new Hamburger(true, "sesame", true, "vegan", 1, true, "vegan", true, true);
} else if (type === "regular_without_cheese") {
    hamburger = new Hamburger(true, "sesame", true, "regular", 1, false, undefined, false, true);
} else if (type === "regular") {
    hamburger = new Hamburger(true, "sesame", true, "regular", 1, true, "regular", false, true);
} else if (type === "regular_with_double_meat") {
    hamburger = new Hamburger(true, "sesame", true, "regular", 2, true, "regular", false, true);
}

console.log(hamburger);

export {};