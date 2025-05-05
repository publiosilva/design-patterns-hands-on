interface Recipe {
    getIngredients(): string[];
}

class CakeRecipe implements Recipe {
    getIngredients(): string[] {
        return ["flour", "sugar", "eggs", "milk"];
    }
}

class RecipeDecorator implements Recipe {
    private readonly recipe: Recipe;

    constructor(recipe: Recipe) {
        this.recipe = recipe;
    }

    getIngredients(): string[] {
        return this.recipe.getIngredients();
    }
}

class ChocolateRecipeDecorator extends RecipeDecorator {
    getIngredients(): string[] {
        return super.getIngredients().concat(["chocolate"]);
    }
}

class ChantillyRecipeDecorator extends RecipeDecorator {
    getIngredients(): string[] {
        return super.getIngredients().concat(["cream"]);
    }
}

const chantillyChocolateCakeRecipe = new ChantillyRecipeDecorator(
    new ChocolateRecipeDecorator(
        new CakeRecipe()
    )
);
console.log(chantillyChocolateCakeRecipe.getIngredients());

export { };
