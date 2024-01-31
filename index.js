let albums = [];
let photos = [];

async function getAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    albums = await response.json();
    initAlbums();
}

async function getPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    photos = await response.json();
    initPhotos();
}

function createAlbumCard(album) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mb-3');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.textContent = album.title;

    const userIdElement = document.createElement('p');
    userIdElement.classList.add('card-text');
    userIdElement.textContent = `User ID: ${album.userId}`;

    cardBodyElement.appendChild(titleElement);
    cardBodyElement.appendChild(userIdElement);

    cardElement.appendChild(cardBodyElement);

    return cardElement;
}

function createPhotoCard(photo) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mb-3');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.textContent = photo.title;

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-img-top');
    imgElement.src = photo.thumbnailUrl;
    imgElement.style.maxWidth = '100%';
    imgElement.style.height = 'auto';

    cardBodyElement.appendChild(titleElement);
    cardBodyElement.appendChild(imgElement);

    cardElement.appendChild(cardBodyElement);

    return cardElement;
}

const albumContainer = document.getElementById('album-container');
const photoContainer = document.getElementById('photo-container');

function initAlbums() {
    albumContainer.innerHTML = '';
    albums.forEach((album) => {
        const cardElement = createAlbumCard(album);
        albumContainer.appendChild(cardElement);
    });
    getPhotos();
}

function initPhotos() {
    photoContainer.innerHTML = '';
    photos.forEach((photo) => {
        const cardElement = createPhotoCard(photo);
        photoContainer.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', getAlbums);
