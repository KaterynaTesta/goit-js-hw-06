const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientEl = document.querySelector('#ingredients');
const listofIngredients = ingredients.forEach(ingredient => {
    const newItem = document.createElement('li');
    newItem.classList.add('.item');
    console.log(newItem);
    newItem.textContent = ingredient;
    console.log(newItem.textContent);
    ingredientEl.appendChild(newItem);
});
console.log(ingredients);
