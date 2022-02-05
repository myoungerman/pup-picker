import { all } from "prelude-ls";
import { KEY, SECRET } from "./config";
import { renderHtml } from "./views";

export { getToken };
export { getFormData };
export { searchForPets };
export { hasTokenExpired };
export { trackWhenTokenExpires };
export { likeOrDislikeBtn };
export { deleteFavorite };

let whenTokenExpires = 0;
let token = "";
let jsonString = "";
let searchResults;

const getToken = async function() {
    try {
        let res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${KEY}&client_secret=${SECRET}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        let data = await res.json();
        token = data.access_token;
        trackWhenTokenExpires();
    } catch (err) {
        console.log(err);
    }
}

function getFormData() {
    console.log('getting data');
    let forms = document.forms;
     let formData = {
        gender: "",
        age: "",
        size: "",
        coat: ""
    }; 
    const categories = ['age', 'gender', 'size', 'coat'];
    let formsArr = Array.from(forms);

    /*
    This paragraph of code comments describes how to check the user's choices if the forms are hard-coded in the HTML.
    */
   // Put the form names in an array

   // Each el in the array is a form name. For each el, look that DOM element up using getElementById. 

   // For that DOM element, get its children that have a type of 'input' and record in an array how many of those children there are.

   // For each child, see if it's selected.

   // Need to finish documenting this

    // Iterate through each form in the HTML
   formsArr.forEach((form) => {
       let missingInput = true;
       // Check each form to see if the user clicked any of its checkboxes
       for (i = 0; i < form.length; i++) {
            if (form[i].checked === true) {
                missingInput = false;
                // See which word from the categories array is in the checkboxes's ID. That's the property the input value will go to.
                for (el of categories) {
                    if (form[i].id.includes(el)) {
                        // Pass the input's value to the matching object property
                        for (petProperty in formData) {
                            if (form[i].id.includes(petProperty)) {
                                const inputValue = form[i].value.toLowerCase();
                                // Add comma if this isn't the first value of that property
                                 if (formData[petProperty] !== "") {
                                    formData[petProperty] += `,${inputValue}`;
                                } else {
                                    formData[petProperty] += inputValue;
                                } 
                            }
                        }
                    }
                } 
            }
       }
       if (missingInput) { console.log("Input is missing!"); }
   });
   jsonString = `/?type=dog&gender=${formData.gender}&age=${formData.age}&size=${formData.size}&coat=${formData.coat}`;
}

const searchForPets = async function (renderHtml, resultsContainer) {
    try {
        let res = await fetch(`https://api.petfinder.com/v2/animals${jsonString}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        searchResults = await res.json();
        let allDogs = createHtmlforResults();
        renderHtml(allDogs, resultsContainer, "beforeEnd");
        // add event listeners for buttons
    } catch (err) {
        console.log(err);
    }
}

function trackWhenTokenExpires() {
    const currTime = Date.now();
    whenTokenExpires = currTime + 3600;
}

function hasTokenExpired() {
    const currTime = Date.now();
    if (currTime >= whenTokenExpires) { getToken(); }
}

function createHtmlforResults() {
    let allDogs = [];

    for (let i = 0; i < searchResults.animals.length; i++) {
        let currDog = searchResults.animals;

        let templateCopy = `<div id="result-${i}" class="result">
        <img src="${currDog[i].primary_photo_cropped.full}" class="result-img" alt="">
        <div class="result-text">
            <p class="name">${currDog[i].name}</p>
            <p class="description">${currDog[i].description}</p>
        </div>
        <div class="btn-rate-result">
        <img src="images/heart.png" id="favorite-btn-${i}" class="result-icons" alt="Favorite button">
        <img src="images/dislike.png" id="dislike-btn-${i}" class="result-icons" alt="Dislike button">
        </div>
        </div>
        `;
        allDogs.push(templateCopy);
    }
    return allDogs;
}

function likeOrDislikeBtn(e) {
    let btn = e.target;

    // Find what div this button is in so we can pull data from it to our favorites panel
    if (btn.id.includes("favorite-btn")) {
        let parentResult = btn.closest("div.result");

        addToFavorites(parentResult);
    }

    e.stopPropagation();
}

function addToFavorites(parentResult) {
    /*
    get image and name of the element, then create the html to pass to renderHtml()
    */
   let favoritesContainer = document.getElementById("favorites-list");
   let parentImg = parentResult.querySelector(".result-img").src;
   let parentName = parentResult.querySelector(".name").textContent;
   let html = [`<div id="favorite-${i}" class="favorite">
   <img src="${parentImg}" class="favorite-img" alt="">
   <div class="favorite-text">
       <p class="name">${parentName}</p>
   </div>
   <img src="images/close.png" id="delete-btn-${i}" class="delete-icon" alt="Delete button">
   </div>`];

   renderHtml(html, favoritesContainer, "beforeEnd");
}

function deleteFavorite() {
    console.log("im favorite");
}