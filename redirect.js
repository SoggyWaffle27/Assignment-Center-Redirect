function redirect() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    
    // Check if the random number is less than 1/3
    if (randomNumber <= 1) {
        window.location.href = "newtab.html";

    } else {
        window.location.href = "https://www.google.co.uk/";
    }
}

window.onload = redirect;