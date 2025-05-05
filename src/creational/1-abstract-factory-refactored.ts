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

interface Footer {
    render(): string;
}

class WindowsFooter implements Footer {
    render(): string {
        return "Windows footer";
    }
}   

class WebFooter implements Footer {
    render(): string {
        return "Web footer";
    }
}

interface GUIFactory {
    createButton(): Button;
    createFooter(): Footer;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createFooter(): Footer {
        return new WindowsFooter();
    }
}

class WebFactory implements GUIFactory {
    createButton(): Button {
        return new WebButton();
    }

    createFooter(): Footer {
        return new WebFooter();
    }
}

class Dialog {
    private factory: GUIFactory;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    render(): string {
        const button = this.factory.createButton();
        const footer = this.factory.createFooter();
        return `[${button.render()}]\n[${footer.render()}]`;
    }
}

class WindowsDialog extends Dialog {
    constructor() {
        super(new WindowsFactory());
    }
}

class WebDialog extends Dialog {
    constructor() {
        super(new WebFactory());
    }
}

const windowsDialog = new WindowsDialog();
console.log(windowsDialog.render());

const webDialog = new WebDialog();
console.log(webDialog.render());

export {};
