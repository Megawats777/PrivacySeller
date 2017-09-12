// The logic for the thank you screen

// The offer answer text elements
var offerAnswerTextElements = new Array(5);

// The player's reputation
var playerReputation = 0;

// The reputation increase value
var repIncreaseValue = 5;

// The reputation decrease value
var repDecreaseValue = -5;

// Initialize the page
function initializePage() {

    // Get document references
    getDocumentReferences();

    // Set the answer text content
    setTheAnswerTextContent();
}

// Get document references
function getDocumentReferences() {

    // Get the offer answer text elements
    offerAnswerTextElements[0] = document.getElementById("offer1Answer");
    offerAnswerTextElements[1] = document.getElementById("offer2Answer");
    offerAnswerTextElements[2] = document.getElementById("offer3Answer");
    offerAnswerTextElements[3] = document.getElementById("offer4Answer");
    offerAnswerTextElements[4] = document.getElementById("offer5Answer");

}

// Set the answer text content
function setTheAnswerTextContent() {

    for (var i = 0; i < offerAnswerTextElements.length; i++) {

        var currentAnswerResult = sessionStorage.getItem("q" + (i + 1) + "SavedAnswer");

        // Depending on the current answer set the content of the current answer text element
        if (currentAnswerResult === "n" || currentAnswerResult === null) {

            offerAnswerTextElements[i].innerHTML = "Not Answered";
        }

        else if (currentAnswerResult === "a") {

            offerAnswerTextElements[i].innerHTML = "Authorized";
        }

        else if (currentAnswerResult === "d") {

            offerAnswerTextElements[i].innerHTML = "Denied";
        }

    }
}

// Set the player's reputation
function setPlayerReputation() {
    // Check the first offer

    // If the first offer was not answered

        // Set the text of the offer1RepResult element to be 0

        // Do not add to the player's reputation
}