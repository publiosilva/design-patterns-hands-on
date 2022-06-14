import fs from 'fs';

class FileBasedDatabase {
  private static instance: FileBasedDatabase;

  private constructor() {
    fs.writeFileSync('data.txt', '', { encoding: 'utf8', flag: 'w+' });
  }

  public static getInstance(): FileBasedDatabase {
    if (!FileBasedDatabase.instance) {
      FileBasedDatabase.instance = new FileBasedDatabase();
    }

    return FileBasedDatabase.instance;
  }

  public getData(): string {
    return fs.readFileSync('data.txt', 'utf8');
  }

  public setData(data: string): void {
    fs.appendFileSync('data.txt', `${data}\n`, { encoding: 'utf8' });
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
