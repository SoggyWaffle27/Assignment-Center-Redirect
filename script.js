function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function setImgs(img, n) {
    var imageUrl = img;
    var n = document.getElementById(n);
    n.src = imageUrl;
}

function readImgs(folderName) {
    // Loop to create <img> elements for each image in the folder
    for (let i = 1; i <= 9; i++) {
        setImgs(`Image_Sets/${folderName}/image${i}.png`, i)
    }
    message(folderName)
};

function message(variableName) {

    // Select the paragraph element
    var paragraph = document.getElementById("message");
  
    // Update its text content
    variableName = variableName.replace(/_/gi, ' ');
    paragraph.textContent = "Please click on all instances of " + variableName;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all images with class "image"
    var images = document.querySelectorAll(".image");

    // Attach click event listener to each image
    images.forEach(function(image) {
        image.addEventListener("click", function() {
        // Toggle the "selected" class on the clicked image
        image.classList.toggle("selected");
        });
    });
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

console.log('Script.js is loaded.');

// Add any additional functionality you need here
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed.');
    // Your additional code here
});

function firstClick() {
    
}

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    var folders = ['shoes_', 'speakers_', 'the color cyan', 'lightning', 'speakers', 'a_recaptcha_test', 'a_rock', 'cars____', 'cars___', 'stoplights', "the_statement_'This_statement_is_false'_being_true", 'taxi_cabs', 'cars______', 'sandwiches', 'sandwiches_', 'cars_____', 'traffic_signs', 'soup', 'soup_', 'shoes', 'cars_', 'cars__', 'lamp_posts']
    
    name = getRandomItem(folders)

    readImgs(name);
    console.log('Form Is Running');
}

function refresh() {
    openForm();
}

//verification code
function verify(event) {
    event.preventDefault();
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    if (randomNumber <= 1/2) {
        const randomNumber = Math.random();
        if (randomNumber <= 1/2) {
            alert("Incorrect Selection, Try Again!")
    
        } else {
            alert("An Error Occured While Validating. Please Try Again...")
        }

    } else {
        window.location.href = "https://www.google.co.uk/";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('verify');
    form.addEventListener('click', verify);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', refresh);
});

//startup
function startUp() {
    openForm();
}

window.onload = startUp;

