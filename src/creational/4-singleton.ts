class MemoryDatabase {
    private data: string[] = [];

    add(item: string) {
        this.data.push(item);
    }

    get(index: number) {
        return this.data[index];
    }
}

const memoryDatabase1 = new MemoryDatabase();
memoryDatabase1.add("item1");
memoryDatabase1.add("item2");

const memoryDatabase2 = new MemoryDatabase();
console.log(memoryDatabase2.get(0));
console.log(memoryDatabase2.get(1));

export { };
