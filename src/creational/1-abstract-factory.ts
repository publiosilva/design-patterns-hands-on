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

interface Footer {
    render(): string;
}

class WindowsFooter implements Footer {
    render(): string {
        return "Windows footer";
    }
}   

class LinuxFooter implements Footer {
    render(): string {
        return "Linux footer";
    }
}

class Dialog {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    render(): string {
        let button: Button;
        let footer: Footer;

        if (this.type === "windows") {
            button = new WindowsButton();
            footer = new WindowsFooter();
        } else if (this.type === "linux") {
            button = new LinuxButton();
            footer = new LinuxFooter();
        } else {
            throw new Error("Invalid dialog type");
        }

        return `[${button.render()}]\n[${footer.render()}]`;
    }
}

const windowsDialog = new Dialog("windows");
console.log(windowsDialog.render());

const linuxDialog = new Dialog("linux");
console.log(linuxDialog.render());

export {};
