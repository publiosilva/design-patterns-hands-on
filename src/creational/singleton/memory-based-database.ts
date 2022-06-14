class FileBasedDatabase {
  private static instance: FileBasedDatabase;

  private readonly data: string[];

  private constructor() {
    this.data = [];
  }

  public static getInstance(): FileBasedDatabase {
    if (!FileBasedDatabase.instance) {
      FileBasedDatabase.instance = new FileBasedDatabase();
    }

    return FileBasedDatabase.instance;
  }

  public getData(): string {
    return this.data.join('\n');
  }

  public setData(data: string): void {
    this.data.push(data);
  }
}

(() => {
  const db1 = FileBasedDatabase.getInstance();
  db1.setData('Hello');
  console.log(db1.getData());

  const db2 = FileBasedDatabase.getInstance();
  db2.setData('World');
  console.log(db2.getData());

  console.log(db1 === db2);
})();
