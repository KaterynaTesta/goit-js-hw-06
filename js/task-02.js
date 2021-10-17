const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientEl = document.querySelector('#ingredients');
const listofIngredients = ingredients.map(ingredient => {
    const newItem = document.createElement('li');
    newItem.classList.add('.item');
    console.log(newItem);
    newItem.textContent = ingredient;
    console.log(newItem.textContent);
    return newItem;
});

ingredientEl.append(...listofIngredients);

console.log(ingredients);
