interface Button {
    render(): string;
}

class WindowsButton implements Button {
    render(): string {
        return "Windows button";
    }
}   

class WebButton implements Button {
    render(): string {
        return "Web button";
    }
}

abstract class Dialog {
    abstract createButton(): Button;
    
    render(): string {
        const button = this.createButton();
        return `[${button.render()}]`;
    }
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }

    // Other methods Windows related methods...
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new WebButton();
    }

    // Other methods Web related methods...
}   

const windowsDialog = new WindowsDialog();
console.log(windowsDialog.render());

const webDialog = new WebDialog();
console.log(webDialog.render());

export {};
