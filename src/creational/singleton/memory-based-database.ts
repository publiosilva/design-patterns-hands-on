class MemoryBasedDatabase {
  private static instance: MemoryBasedDatabase;

  private readonly data: string[];

  private constructor() {
    this.data = [];
  }

  public static getInstance(): MemoryBasedDatabase {
    if (!MemoryBasedDatabase.instance) {
      MemoryBasedDatabase.instance = new MemoryBasedDatabase();
    }

    return MemoryBasedDatabase.instance;
  }

  public getData(): string {
    return this.data.join('\n');
  }

  public setData(data: string): void {
    this.data.push(data);
  }
}

(() => {
  const db1 = MemoryBasedDatabase.getInstance();
  db1.setData('Hello');
  console.log(db1.getData());

  const db2 = MemoryBasedDatabase.getInstance();
  db2.setData('World');
  console.log(db2.getData());

  console.log(db1 === db2);
})();
