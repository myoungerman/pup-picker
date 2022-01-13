export { getToken };
export { getFormData };
export { searchForPets };
export { hasTokenExpired };
export { trackWhenTokenExpires };

let whenTokenExpires = 0;
let token = "";
let jsonString = "";

const getToken = async function() {
    try {
        let res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=VolA8e7Orq9dDfwn91VnKL1NApICUBTXYPoM5vZE0Ceeo52DID&client_secret=Kf8eksZUhsTsMOoasD70ICQ2hETdAH970MBaBs17`,
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
    let forms = document.forms;
     let formData = {
        gender: "",
        age: "",
        size: "",
        coat: ""
    }; 
    const categories = ['age', 'gender', 'size', 'coat'];
    let formsArr = Array.from(forms);

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

                                // Add comma if this isn't the first value
                                 if (formData[petProperty] !== "") {
                                    formData[petProperty] += `, ${inputValue}`;
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
   jsonString = `/?gender=${formData.gender}&age=${formData.age}&size=${formData.size}&coat=${formData.coat}`;
}

const searchForPets = async function () {
    console.log(`searching for: https://api.petfinder.com/v2/animals${jsonString} with token ${token}`);
    try {
        let res = await fetch(`https://api.petfinder.com/v2/animals${jsonString}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        console.log(data);
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