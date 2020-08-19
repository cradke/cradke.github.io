/* *************************************
 *  ACME Site Javascript
 ************************************* */

console.log('My javascript is being read.');



// Get data from the Json file
function getData() {
    const URL = "/acme-project/js/acme.json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
            console.log('Json object from getData function:');
            console.log(data);
        return data;
        })
        .catch(error => console.log('There was an error: ', error))
}

// Hide content from the ACME home page
function hideContent(){
    document.getElementById("main").className = "hide";
}

// Display content on items
function displayContent(){
    document.getElementById("image").className = "show"
    document.getElementById("itemInfo").className = "show"
}

home.onclick = function(event) {
    console.log("Home Link has been clicked");

    // Display home page content
    document.getElementById("main").className = "show";
    header.innerHTML = "Welcome to ACME!";

    // Hide itemContent
    document.getElementById("image").className = "hide"
    document.getElementById("itemInfo").className = "hide"
}

anvils.onclick = function(event) {
    console.log("Anvils has been clicked");
    hideContent();

    const URL = "/acme-project/js/acme.json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        anvil(data);
    })
        .catch(error => console.log('There was an error: ', error))

}

function anvil(data) {
  //  console.log(data);
    const NAME = data.Anvils.name;
  //  console.log("name is " + NAME);
    // Change header to Anvil
    header.innerHTML = NAME;

    // Display anvil image
    const PATH = data.Anvils.path;
    document.getElementById("image").src = PATH;

    // Display anvil description
    const DESCRIPTION = data.Anvils.description;
    description.innerHTML = DESCRIPTION;

    //Display anvil manufacturer
    const MANUFACTURER = data.Anvils.manufacturer;
    manufacturer.innerHTML = MANUFACTURER;

    //Display anvil price
    const PRICE = data.Anvils.price;
    price.innerHTML = PRICE;

    //Display anvil reviews
    const REVIEWS = data.Anvils.reviews;
    itemReviews.innerHTML = REVIEWS;

    // Display Content on screen
    displayContent();
}

explosives.onclick = function(event) {
    console.log("Explosives has been clicked");
    hideContent();

    const URL = "/acme-project/js/acme.json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        explosive(data);
    })
        .catch(error => console.log('There was an error: ', error))
}

function explosive(data) {
    //  console.log(data);
    const NAME = data.Explosives.name;
    //  console.log("name is " + NAME);
    // Change header to Anvil
    header.innerHTML = NAME;

    // Display anvil image
    const PATH = data.Explosives.path;
    document.getElementById("image").src = PATH;

    // Display anvil description
    const DESCRIPTION = data.Explosives.description;
    description.innerHTML = DESCRIPTION;

    //Display anvil manufacturer
    const MANUFACTURER = data.Explosives.manufacturer;
    manufacturer.innerHTML = MANUFACTURER;

    //Display anvil price
    const PRICE = data.Explosives.price;
    price.innerHTML = PRICE;

    //Display anvil reviews
    const REVIEWS = data.Explosives.reviews;
    itemReviews.innerHTML = REVIEWS;

    // Display Content on screen
    displayContent();
}



decoys.onclick = function(event) {
    console.log("Decoys has been clicked");
    hideContent();

    const URL = "/acme-project/js/acme.json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        decoy(data);
    })
        .catch(error => console.log('There was an error: ', error))
}

function decoy(data) {
    //  console.log(data);
    const NAME = data.Decoys.name;
    //  console.log("name is " + NAME);
    // Change header to Anvil
    header.innerHTML = NAME;

    // Display anvil image
    const PATH = data.Decoys.path;
    document.getElementById("image").src = PATH;

    // Display anvil description
    const DESCRIPTION = data.Decoys.description;
    description.innerHTML = DESCRIPTION;

    //Display anvil manufacturer
    const MANUFACTURER = data.Decoys.manufacturer;
    manufacturer.innerHTML = MANUFACTURER;

    //Display anvil price
    const PRICE = data.Decoys.price;
    price.innerHTML = PRICE;

    //Display anvil reviews
    const REVIEWS = data.Decoys.reviews;
    itemReviews.innerHTML = REVIEWS;

    // Display Content on screen
    displayContent();
}

traps.onclick = function(event) {
    console.log("Traps has been clicked");
    hideContent();

    const URL = "/acme-project/js/acme.json";
    fetch(URL)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        trap(data);
    })
        .catch(error => console.log('There was an error: ', error))
}

function trap(data) {
    const NAME = data.Traps.name;
    // Change header to Traps
    header.innerHTML = NAME;

    // Display trap image
    const PATH = data.Traps.path;
    document.getElementById("image").src = PATH;

    // Display traps description
    const DESCRIPTION = data.Traps.description;
    description.innerHTML = DESCRIPTION;

    //Display traps manufacturer
    const MANUFACTURER = data.Traps.manufacturer;
    manufacturer.innerHTML = MANUFACTURER;

    //Display traps price
    const PRICE = data.Traps.price;
    price.innerHTML = PRICE;

    //Display trap reviews
    const REVIEWS = data.Traps.reviews;
    itemReviews.innerHTML = REVIEWS;

    // Display Content on screen
    displayContent();
}
