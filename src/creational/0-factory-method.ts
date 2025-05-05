interface Button {
    render(): string;
}

class WindowsButton implements Button {
    render(): string {
        return "Windows button";
    }
}

class LinuxButton implements Button {
    render(): string {
        return "Linux button";
    }
}

class Dialog {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    render(): string {
        let button: Button;

        if (this.type === "windows") {
            button = new WindowsButton();
        } else if (this.type === "linux") {
            button = new LinuxButton();
        } else {
            throw new Error("Invalid dialog type");
        }

        return `[${button.render()}]`;
    }
}

const windowsDialog = new Dialog("windows");
console.log(windowsDialog.render());

const linuxDialog = new Dialog("linux");
console.log(linuxDialog.render());

export { };
