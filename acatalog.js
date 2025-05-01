const mainDialog = document.getElementById('main-dialog');
const backHomeButton = document.getElementById('back-home');

// Define your redirect URL here in the JavaScript
const redirectURL = "https://drive.google.com/drive/folders/1BwPS4YIlBITnk0s5LjK0V7FOMyKirLMY?usp=drive_link"; // Replace with your actual URL
console.log("Redirect URL:", redirectURL); // Log the URL

if (mainDialog) {
    console.log("mainDialog element found.");
    mainDialog.addEventListener('click', () => {
        console.log("mainDialog clicked.");
        console.log("Attempting redirect to:", redirectURL);
        window.location.href = redirectURL;
    });
} else {
    console.error("mainDialog element not found!");
}

backHomeButton.addEventListener('click', function() {
    console.log("Voltar button clicked.");
    window.location.href = 'categories.html';
});