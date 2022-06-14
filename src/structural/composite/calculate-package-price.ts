interface BoxItem {
  getPrice(): number;
}

class Product implements BoxItem {
  private readonly price: number;

  constructor(price: number) {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}

class Box implements BoxItem {
  private readonly items: Array<BoxItem>;

  constructor() {
    this.items = [];
  }

  addItem(item: BoxItem) {
    this.items.push(item);
  }

  getPrice(): number {
    return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
  }
}

(() => {
  const smallBox = new Box();
  smallBox.addItem(new Product(10));

  const mediumBox = new Box();
  mediumBox.addItem(smallBox);
  mediumBox.addItem(new Product(20));

  const bigBox = new Box();
  bigBox.addItem(mediumBox);
  bigBox.addItem(new Product(30));
  bigBox.addItem(new Product(40));
  bigBox.addItem(new Product(50));

  console.log({ bigBoxPrice: bigBox.getPrice() });
})();
