import { KEY } from './config.js';
import { SECRET } from './config.js';
import { getToken, trackWhenTokenExpires, hasTokenExpired } from './models.js';
import { getFormData } from './models.js';
import { searchForPets } from './models.js';

const searchBtn = document.getElementById('btn-search');

init();

function init() {
    getToken();
}

searchBtn.addEventListener('click', () => {

    // check if token has expired
    hasTokenExpired();
    getFormData();
    searchForPets();
});