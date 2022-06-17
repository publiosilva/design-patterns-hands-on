interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;

  handle(request: string): string | null;
}

abstract class AbstractSuportHandler implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;

    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class QuestionSupportHandler extends AbstractSuportHandler {
  handle(request: string): string | null {
    if (request === 'question') {
      return 'I\'ll answer your question';
    }

    return super.handle(request);
  }
}

class BugSupportHandler extends AbstractSuportHandler {
  handle(request: string): string | null {
    if (request === 'bug') {
      return 'I\'ll fix your bug';
    }

    return super.handle(request);
  }
}

class FeatureSupportHandler extends AbstractSuportHandler {
  handle(request: string): string | null {
    if (request === 'feature') {
      return 'I\'ll implement your feature';
    }

    return super.handle(request);
  }
}

(() => {
  const questionHandler = new QuestionSupportHandler();
  const bugHandler = new BugSupportHandler();
  const featureHandler = new FeatureSupportHandler();

  questionHandler.setNext(bugHandler).setNext(featureHandler);

  const resultQuestion = questionHandler.handle('question');
  console.log({ resultQuestion });

  const resultBug = questionHandler.handle('bug');
  console.log({ resultBug });

  const resultFeature = questionHandler.handle('feature');
  console.log({ resultFeature });

  const resultUnknown = questionHandler.handle('unknown');
  console.log({ resultUnknown });
})();
