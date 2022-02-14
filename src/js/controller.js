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
const loadingIcon = document.getElementById('loading-icon');

// Gets API token on startup
init();

function init() {
    getToken();
}

// Handles the Search button (clearing currently loaded results, then loading new results and rendering them)
searchBtn.addEventListener('click', () => {
    hasTokenExpired();
    deleteChildren(resultsContainer);
    getFormData();
    toggleElement(loadingIcon);
    searchForPets(renderHtml, resultsContainer);
});

// Handles the Like and Dislike button in each search result
resultsContainer.addEventListener('click', likeOrDislikeBtn, false);

// Toggles the visibility of the favorites list
toggleFavoritesBtn.addEventListener('click', () => {
    toggleElement(favoritesList);
});

// Deletes the selected favorite from the favorites list
favoritesList.addEventListener('click', deleteFavorite, false);