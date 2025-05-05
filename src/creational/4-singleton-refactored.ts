class MemoryDatabase {
    private data: string[] = [];

    private static instance: MemoryDatabase;

    private constructor() { }

    public static getInstance(): MemoryDatabase {
        if (!MemoryDatabase.instance) {
            MemoryDatabase.instance = new MemoryDatabase();
        }

        return MemoryDatabase.instance;
    }

    add(item: string) {
        this.data.push(item);
    }

    get(index: number) {
        return this.data[index];
    }
}

const memoryDatabase1 = MemoryDatabase.getInstance();
memoryDatabase1.add("item1");
memoryDatabase1.add("item2");

const memoryDatabase2 = MemoryDatabase.getInstance();
console.log(memoryDatabase2.get(0));
console.log(memoryDatabase2.get(1));

export { };
