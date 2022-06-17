interface Button {
  render(): string;
}

class WinButton implements Button {
  render(): string {
    return '[WIN-BUTTON]';
  }
}

class MacButton implements Button {
  render(): string {
    return '[MAC-BUTTON]';
  }
}

class LinuxButton implements Button {
  render(): string {
    return '[LINUX-BUTTON]';
  }
}

interface GUIFactory {
  createButton(): Button;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
}

class LinuxFactory implements GUIFactory {
  createButton(): Button {
    return new LinuxButton();
  }
}

class Dialog {
  private readonly guiFactory: GUIFactory;

  protected readonly components: string[];

  constructor(guiFactory: GUIFactory) {
    this.guiFactory = guiFactory;
    this.components = [];
  }

  render() {
    this.components.push(this.guiFactory.createButton().render());

    return this.components.join('\t');
  }
}

(() => {
  const winFactory = new WinFactory();
  const winDialog = new Dialog(winFactory);
  console.log('WinDialog:', winDialog.render());

  const macFactory = new MacFactory();
  const macDialog = new Dialog(macFactory);
  console.log('MacDialog:', macDialog.render());

  const linuxFactory = new LinuxFactory();
  const linuxDialog = new Dialog(linuxFactory);
  console.log('LinuxDialog:', linuxDialog.render());
})();
