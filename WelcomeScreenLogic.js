// Logic for the welcome screen


// The custom name text field
var customNameTextField;

// Start the game
function startGame() {
    
    var nameTextFieldString = document.getElementById("customNameTextField").value;

    // Save the selected user name
    sessionStorage.setItem("SavedCEOName", nameTextFieldString);

    // Go to the question screen
    location.href = "QuestionScreen.html";
}


// Initialize the page
function initializePage() {

    customNameTextField = document.getElementById("customNameTextField");
    customNameTextField.value = "";
}

// Custom name text field input handle
function nameTextFieldInputHandle(event) {
    event.preventDefault();

    if (event.keyCode == 13) {
        startGame();
    }
}
