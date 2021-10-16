const listOfCategory = document.querySelectorAll('.item');

const countCategory = selector => console.log(`Number of categories: ${listOfCategory.length}`);

const categoryItems = () => {
    listOfCategory.forEach(item => {
        console.log(`Category: ${item.querySelector('h2').textContent},
Elements: ${item.querySelectorAll('ul li').length}`);
    });
};

countCategory();
categoryItems();
