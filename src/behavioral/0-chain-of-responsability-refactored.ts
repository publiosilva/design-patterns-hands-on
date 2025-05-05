interface SupportRequestHandler {
    setNext(handler: SupportRequestHandler): SupportRequestHandler;

    handle(requestType: string, request: string): string;
}

class SupportTeamMember implements SupportRequestHandler {
    private nextHandler: SupportRequestHandler | null = null;

    setNext(handler: SupportRequestHandler): SupportRequestHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(requestType: string, request: string): string {
        if (requestType === "question") {
            return `Support team member solving ${request}`;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(requestType, request);
        }

        return "No handler found";
    }
}

class DeveloperTeamMember implements SupportRequestHandler {
    private nextHandler: SupportRequestHandler | null = null;

    setNext(handler: SupportRequestHandler): SupportRequestHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(requestType: string, request: string): string {
        if (requestType === "problem") {
            return `Developer team member solving ${request}`;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(requestType, request);
        }

        return "No handler found";
    }
}

class ProductTeamMember implements SupportRequestHandler {
    private nextHandler: SupportRequestHandler | null = null;

    setNext(handler: SupportRequestHandler): SupportRequestHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(requestType: string, request: string): string {
        if (requestType === "feature request") {
            return `Product team member solving ${request}`;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(requestType, request);
        }

        return "No handler found";
    }
}

const supportRequestType = "question"; // question, problem, feature request
const supportRequest = "I have a problem with my account";

const supportTeamMember = new SupportTeamMember();
const developerTeamMember = new DeveloperTeamMember();
const productTeamMember = new ProductTeamMember();

supportTeamMember.setNext(developerTeamMember).setNext(productTeamMember);

supportTeamMember.handle(supportRequestType, supportRequest);

export { };
