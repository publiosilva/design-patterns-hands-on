class SupportTeamMember {
    handle(requestType: string, request: string): string {
        if (requestType === "question") {
            return `Support team member solving ${request}`;
        }

        return "Cannot handle request";
    }
}

class DeveloperTeamMember {
    handle(requestType: string, request: string): string {
        if (requestType === "problem") {
            return `Developer team member solving ${request}`;
        }

        return "Cannot handle request";
    }
}

class ProductTeamMember {
    handle(requestType: string, request: string): string {
        if (requestType === "feature request") {
            return `Product team member solving ${request}`;
        }

        return "Cannot handle request";
    }
}

const supportRequestType = "question"; // question, problem, feature request
const supportRequest = "I have a problem with my account";

const supportTeamMember = new SupportTeamMember();
const developerTeamMember = new DeveloperTeamMember();
const productTeamMember = new ProductTeamMember();

if (supportRequestType === "question") {
    supportTeamMember.handle(supportRequestType, supportRequest);
} else if (supportRequestType === "problem") {
    developerTeamMember.handle(supportRequestType, supportRequest);
} else if (supportRequestType === "feature request") {
    productTeamMember.handle(supportRequestType, supportRequest);
}

export { };
