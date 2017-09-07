// Logic for the welcome screen

function startGame()
{
    var nameTextFieldString = document.getElementById("customNameTextField").value;

    // Save the selected user name
    sessionStorage.setItem("SavedCEOName", nameTextFieldString);
    alert(sessionStorage.getItem("SavedCEOName"));
}