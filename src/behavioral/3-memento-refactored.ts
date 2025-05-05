class TextFile {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    addLine(line: string) {
        this.content += line + "\n";
    }

    save(): TextFileMemento {
        return new TextFileMemento(this.content);
    }

    restore(memento: TextFileMemento) {
        this.content = memento.getContent();
    }
}

class TextFileMemento {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class TextEditor {
    private textFile: TextFile;

    private mementos: TextFileMemento[] = [];

    constructor(textFile: TextFile) {
        this.textFile = textFile;
    }

    addLine(line: string) {
        this.mementos.push(this.textFile.save());
        this.textFile.addLine(line);
    }

    undo() {
        if (this.mementos.length > 0) {
            const memento = this.mementos.pop();

            if (memento) {
                this.textFile.restore(memento);
            }
        }
    }

    getContent() {
        return this.textFile.getContent();
    }
}

const textFile = new TextFile("");
const textEditor = new TextEditor(textFile);

textEditor.addLine("Hello, world 1!");
textEditor.addLine("Hello, world 2!");
textEditor.addLine("Hello, world 3!");

console.log("Before undo:");
console.log(textEditor.getContent());

textEditor.undo();

console.log("After undo:");
console.log(textEditor.getContent());

export { };