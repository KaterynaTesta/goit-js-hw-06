const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const galleryEl = document.querySelector('.gallery');

console.log(galleryEl);
const imageMarkUp = ({ url, alt }) =>
    `<li class="item"><img src="${url}" alt="${alt}" class="photo"></li>`;
const imageEl = images.map(img => imageMarkUp(img)).join('');

galleryEl.insertAdjacentHTML('afterbegin', imageEl);

galleryEl.style.listStyle = 'none';
galleryEl.style.display = 'flex';
galleryEl.style.flexDirection = 'column';
galleryEl.style.justifyContent = 'center';
galleryEl.style.paddingBottom = '10';
