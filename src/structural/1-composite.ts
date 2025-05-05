class NameValidator {
    validate(object: any) {
        if (object.name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }
    }
}

class EmailValidator {
    validate(object: any) {
        if (!object.email.includes("@")) {
            throw new Error("Email must contain an @ symbol");
        }
    }
}

class PasswordValidator {
    validate(object: any) {
        if (object.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
    }
}

class User {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const nameValidator = new NameValidator();
const emailValidator = new EmailValidator();
const passwordValidator = new PasswordValidator();

const user = new User("John Doe", "john.doe@example.com", "password123");
nameValidator.validate(user);
emailValidator.validate(user);
passwordValidator.validate(user);

export { };
