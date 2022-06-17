abstract class AveragePriceExtractor {
  extract(): number {
    const prices = this.getPrices();
    const sum = prices.reduce((acc, price) => acc + price, 0);

    return sum / prices.length;
  }

  abstract getPrices(): number[];
}

class CSVAveragePriceExtractor extends AveragePriceExtractor {
  getPrices(): number[] {
    const csv = 'water,3\nbread,5\nmeat,20\nbutter,4';

    return csv.split('\n').map((line) => {
      const [, price] = line.split(',');
      return parseFloat(price);
    });
  }
}

class JSONAveragePriceExtractor extends AveragePriceExtractor {
  getPrices(): number[] {
    const products = JSON.parse('[{ "name": "water", "price": "3" },{ "name": "bread", "price": "5" },{ "name": "meat", "price": "20" },{ "name": "butter", "price": "4" }]');

    return products.map((product: { name: string, price: string }) => parseFloat(product.price));
  }
}

(() => {
  const csvExtractor = new CSVAveragePriceExtractor();
  console.log('Average price of products (CSV):', csvExtractor.extract());

  const jsonExtractor = new JSONAveragePriceExtractor();
  console.log('Average price of products (JSON):', jsonExtractor.extract());
})();
