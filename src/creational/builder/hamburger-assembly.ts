/**
 * Abstract Builder
 */
interface BurgerBuilder {
  setBread(): BurgerBuilder;

  setCheese(): BurgerBuilder;

  setMeat(): BurgerBuilder;

  setSalad(): BurgerBuilder;

  setSauce(): BurgerBuilder;

  getResult(): string;
}

/**
 * Concrete Builder
 */
class RegularBurgerBuilder implements BurgerBuilder {
  private readonly burger: string[];

  constructor() {
    this.burger = [];
  }

  setBread(): BurgerBuilder {
    this.burger.push('bread');

    return this;
  }

  setCheese(): BurgerBuilder {
    this.burger.push('cheese');

    return this;
  }

  setMeat(): BurgerBuilder {
    this.burger.push('meat');

    return this;
  }

  setSalad(): BurgerBuilder {
    this.burger.push('salad');

    return this;
  }

  setSauce(): BurgerBuilder {
    this.burger.push('sauce');

    return this;
  }

  getResult(): string {
    return this.burger.join(' + ');
  }
}

/**
 * Concrete Builder
 */
class VeganBurgerBuilder implements BurgerBuilder {
  private readonly burger: string[];

  constructor() {
    this.burger = [];
  }

  setBread(): BurgerBuilder {
    this.burger.push('vegan bread');

    return this;
  }

  setCheese(): BurgerBuilder {
    this.burger.push('vegan cheese');

    return this;
  }

  setMeat(): BurgerBuilder {
    this.burger.push('vegan meat');

    return this;
  }

  setSalad(): BurgerBuilder {
    this.burger.push('vegan salad');

    return this;
  }

  setSauce(): BurgerBuilder {
    this.burger.push('vegan sauce');

    return this;
  }

  getResult(): string {
    return this.burger.join(' + ');
  }
}

/**
 * Director
 */
class BurgerBuilderDiretor {
  private builder: BurgerBuilder;

  constructor(builder: BurgerBuilder) {
    this.builder = builder;
  }

  buildSimpleBurguer(): void {
    this.builder
      .setBread()
      .setSauce()
      .setMeat()
      .setSalad()
      .setBread();
  }

  buildTwoMeatBurguer(): void {
    this.builder
      .setBread()
      .setSauce()
      .setMeat()
      .setSalad()
      .setMeat()
      .setBread();
  }
}

(() => {
  const regularBurgerBuilder = new RegularBurgerBuilder();
  const regularBurgerBuilderDiretor = new BurgerBuilderDiretor(regularBurgerBuilder);

  regularBurgerBuilderDiretor.buildSimpleBurguer();

  const regularBurger = regularBurgerBuilder.getResult();

  console.log({ regularBurger });

  const veganBurgerBuilder = new VeganBurgerBuilder();
  const veganBurgerBuilderDiretor = new BurgerBuilderDiretor(veganBurgerBuilder);

  veganBurgerBuilderDiretor.buildSimpleBurguer();

  const veganBurger = veganBurgerBuilder.getResult();

  console.log({ veganBurger });
})();
