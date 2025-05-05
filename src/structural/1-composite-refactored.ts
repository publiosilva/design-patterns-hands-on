interface Validator {
    validate(object: any): void;
}

class NameValidator implements Validator {
    validate(object: any) {
        if (object.name.length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }
    }
}

class EmailValidator implements Validator {
    validate(email: string) {
        if (!email.includes("@")) {
            throw new Error("Email must contain an @ symbol");
        }
    }
}

class PasswordValidator implements Validator {
    validate(object: any) {
        if (object.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
    }
}

class CompositeValidator implements Validator {
    private validators: Validator[] = [];

    add(validator: Validator) {
        this.validators.push(validator);
    }

    validate(object: any) {
        for (const validator of this.validators) {
            validator.validate(object);
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

const compositeValidator = new CompositeValidator();
compositeValidator.add(new NameValidator());
compositeValidator.add(new EmailValidator());
compositeValidator.add(new PasswordValidator());

const user = new User("John Doe", "john.doe@example.com", "password123");
compositeValidator.validate(user);

export { };
