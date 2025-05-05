interface Recipe {
    getIngredients(): string[];
}

class CakeRecipe implements Recipe {
    getIngredients(): string[] {
        return ["flour", "sugar", "eggs", "milk"];
    }
}

class ChocolateCakeRecipe extends CakeRecipe {
    getIngredients(): string[] {
        return super.getIngredients().concat(["chocolate"]);
    }
}

class ChantillyChocolateCakeRecipe extends ChocolateCakeRecipe {
    getIngredients(): string[] {
        return super.getIngredients().concat(["cream"]);
    }
}

const chantillyChocolateCakeRecipe = new ChantillyChocolateCakeRecipe();
console.log(chantillyChocolateCakeRecipe.getIngredients());

export { };
