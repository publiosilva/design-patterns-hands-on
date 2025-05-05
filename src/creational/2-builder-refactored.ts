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

interface HamburgerBuilder {
    reset(): void;
    buildBread(breadType: string): HamburgerBuilder;
    buildMeat(numberOfMeat: number): HamburgerBuilder;
    buildCheese(): HamburgerBuilder;
    buildLettuce(): HamburgerBuilder;
    buildTomato(): HamburgerBuilder;
    getResult(): Hamburger;
}

class VeganHamburgerBuilder implements HamburgerBuilder {
    private hamburger: Hamburger = new Hamburger();

    reset(): void {
        this.hamburger = new Hamburger();
    }

    buildBread(breadType: string): HamburgerBuilder {
        this.hamburger.bread = true;
        this.hamburger.breadType = breadType;
        return this;
    }

    buildMeat(numberOfMeat: number): HamburgerBuilder {
        this.hamburger.meat = true;
        this.hamburger.meatType = "vegan";
        this.hamburger.numberOfMeat = numberOfMeat;
        return this;
    }

    buildCheese(): HamburgerBuilder {
        this.hamburger.cheese = true;
        this.hamburger.cheeseType = "vegan";
        return this;
    }

    buildLettuce(): HamburgerBuilder {
        this.hamburger.lettuce = true;
        return this;
    }

    buildTomato(): HamburgerBuilder {
        this.hamburger.tomato = true;
        return this;
    }

    getResult(): Hamburger {
        const result = this.hamburger;
        this.reset();
        return result;
    }
}

class RegularHamburgerBuilder implements HamburgerBuilder {
    private hamburger: Hamburger = new Hamburger();

    reset(): void {
        this.hamburger = new Hamburger();
    }

    buildBread(breadType: string): HamburgerBuilder {
        this.hamburger.bread = true;
        this.hamburger.breadType = breadType;
        return this;
    }

    buildMeat(numberOfMeat: number): HamburgerBuilder {
        this.hamburger.meat = true;
        this.hamburger.meatType = "regular";
        this.hamburger.numberOfMeat = numberOfMeat;
        return this;
    }

    buildCheese(): HamburgerBuilder {
        this.hamburger.cheese = true;
        this.hamburger.cheeseType = "regular";
        return this;
    }

    buildLettuce(): HamburgerBuilder {
        this.hamburger.lettuce = true;
        return this;
    }

    buildTomato(): HamburgerBuilder {
        this.hamburger.tomato = true;
        return this;
    }

    getResult(): Hamburger {
        const result = this.hamburger;
        this.reset();
        return result;
    }
}

class HamburgerDirector {
    private regularBuilder: HamburgerBuilder;
    private veganBuilder: HamburgerBuilder;

    constructor(regularBuilder: HamburgerBuilder, veganBuilder: HamburgerBuilder) {
        this.regularBuilder = regularBuilder;
        this.veganBuilder = veganBuilder;
    }

    buildVeganHamburger(): Hamburger {
        return this.veganBuilder.buildBread("sesame")
            .buildMeat(1)
            .buildCheese()
            .buildLettuce()
            .buildTomato()
            .getResult();
    }

    buildVeganHamburgerWithoutCheese(): Hamburger {
        return this.veganBuilder.buildBread("sesame")
            .buildMeat(1)
            .buildLettuce()
            .buildTomato()
            .getResult();
    }

    buildRegularHamburger(): Hamburger {
        return this.regularBuilder.buildBread("sesame")
            .buildMeat(1)
            .buildCheese()
            .buildLettuce()
            .buildTomato()
            .getResult();
    }

    buildRegularHamburgerWithoutCheese(): Hamburger {
        return this.regularBuilder.buildBread("sesame")
            .buildMeat(1)
            .buildLettuce()
            .buildTomato()
            .getResult();
    }

    buildRegularHamburgerWithDoubleMeat(): Hamburger {
        return this.regularBuilder.buildBread("sesame")
            .buildMeat(2)
            .buildCheese()
            .buildLettuce()
            .buildTomato()
            .getResult();
    }
}

const type: "vegan"
    | "vegan_without_cheese"
    | "regular"
    | "regular_without_cheese"
    | "regular_with_double_meat" = "vegan_without_cheese";
let hamburger: Hamburger | undefined;
const hamburgerDirector = new HamburgerDirector(new VeganHamburgerBuilder(), new RegularHamburgerBuilder());

if (type === "vegan_without_cheese") {
    hamburger = hamburgerDirector.buildVeganHamburgerWithoutCheese();
} else if (type === "vegan") {
    hamburger = hamburgerDirector.buildVeganHamburger();
} else if (type === "regular_without_cheese") {
    hamburger = hamburgerDirector.buildRegularHamburgerWithoutCheese();
} else if (type === "regular") {
    hamburger = hamburgerDirector.buildRegularHamburger();
} else if (type === "regular_with_double_meat") {
    hamburger = hamburgerDirector.buildRegularHamburgerWithDoubleMeat();
}

console.log(hamburger);

export { };