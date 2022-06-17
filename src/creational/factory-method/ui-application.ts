abstract class AbstractDialog {
  protected readonly components: string[];

  constructor() {
    this.components = [];
  }

  render() {
    this.addButton('Cancel');
    this.addButton('OK');

    return this.components.join('\t');
  }

  abstract addButton(label: string): void;
}

class WinDialog extends AbstractDialog {
  addButton(label: string) {
    this.components.push(`[WIN-BUTTON]${label}[WIN-BUTTON]`);
  }
}

class MacDialog extends AbstractDialog {
  addButton(label: string) {
    this.components.push(`[MAC-BUTTON]${label}[MAC-BUTTON]`);
  }
}

class LinuxDialog extends AbstractDialog {
  addButton(label: string) {
    this.components.push(`[LINUX-BUTTON]${label}[LINUX-BUTTON]`);
  }
}

(() => {
  const winDialog = new WinDialog();
  console.log('WinDialog:', winDialog.render());

  const macDialog = new MacDialog();
  console.log('MacDialog:', macDialog.render());

  const linuxDialog = new LinuxDialog();
  console.log('LinuxDialog:', linuxDialog.render());
})();
