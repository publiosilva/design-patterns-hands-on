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
}

class TextEditor {
    private textFile: TextFile;

    constructor(textFile: TextFile) {
        this.textFile = textFile;
    }

    addLine(line: string) {
        this.textFile.addLine(line);
    }

    getContent() {
        return this.textFile.getContent();
    }

    undo() {

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
