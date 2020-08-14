const recipes = [{
    category: 'appetizer',
    name: 'quick omelette',
    ingredients: [
        'eggs',
        'milk',
        'salt',
    ],
    steps: [
        'crack eggs'
    ]
}, {
    category: 'entree',
    name: 'quick hamburgers',
    ingredients: [
        'ground beef',
        'tomato',
    ],
    steps: [
        'smash patties'
    ]
}]
const isEditing = false;
const recipeSelectEl = document.getElementById('RecipeSelect')
for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    console.log('recipe', recipe)
    const el = document.createElement(
        "OPTION"
    );
    el.value = recipe.name
    el.text = recipe.name
    recipeSelectEl.appendChild(el);
}
console.log('recipe', recipeSelectEl.value)

function selectRecipe() {
    const recipeSelectEl = document.getElementById('RecipeSelect')
    const selectedRecipe = recipes.find(
        (item) => item.name === recipeSelectEl.value
    )
    console.log('selectedRecipe', selectedRecipe)
    document.getElementById('Recipe Name').value = selectedRecipe.name;
}

function onEdit(){
    isEditing = true;
}
function onAdd(ev) {
    ev.preventDefault();
    console.log('onEnter')
    const ingredientsEl = document.getElementById('Ingredients')
    recipes.push({
        name: 'tbd',
        ingredients: ingredientsEl.value,
        steps: 'tbd',
        prepTime: 'tbd',
    })
    console.log('new recipes', recipes);
}