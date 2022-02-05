import { getToken, hasTokenExpired } from './models.js';
import { getFormData } from './models.js';
import { searchForPets } from './models.js';
import { renderHtml } from './views.js';
import { deleteChildren } from './views.js';
import { likeOrDislikeBtn } from './models.js';
import { toggleElement } from './views.js';
import { deleteFavorite } from './models.js';

const searchBtn = document.getElementById('btn-search');
const resultsContainer = document.getElementById('results-container');
const toggleFavoritesBtn = document.getElementById('btn-toggle-favorites');
const favoritesList = document.getElementById('favorites-list');

init();

function init() {
    getToken();
}

searchBtn.addEventListener('click', () => {
    hasTokenExpired();
    deleteChildren(resultsContainer);
    getFormData();
    searchForPets(renderHtml, resultsContainer);
});

resultsContainer.addEventListener('click', likeOrDislikeBtn, false);

toggleFavoritesBtn.addEventListener('click', () => {
    toggleElement(favoritesList);
});

// add listener to favoritesList, call deleteFavorite
favoritesList.addEventListener('click', deleteFavorite, false);