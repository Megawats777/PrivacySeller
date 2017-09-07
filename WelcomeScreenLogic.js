// Logic for the welcome screen

function startGame()
{
    var nameTextFieldString = document.getElementById("customNameTextField").value;

    
    location.href = "QuestionScreen.html";

    // Save the selected user name
    sessionStorage.setItem("SavedCEOName", nameTextFieldString);
}