// The logic for the thank you screen

// The offer answer text elements
var offerAnswerTextElements = new Array(5);

// The rep result text elements
var repResultTextElements = new Array(5);

// The player's reputation
var playerReputation = 0;


// Initialize the page
function initializePage() {

    // Get document references
    getDocumentReferences();

    // Set the answer text content
    setTheAnswerTextContent();

    // Set the player's reputation
    setPlayerReputation();
}

// Get document references
function getDocumentReferences() {

    // Get the offer answer text elements
    offerAnswerTextElements[0] = document.getElementById("offer1Answer");
    offerAnswerTextElements[1] = document.getElementById("offer2Answer");
    offerAnswerTextElements[2] = document.getElementById("offer3Answer");
    offerAnswerTextElements[3] = document.getElementById("offer4Answer");
    offerAnswerTextElements[4] = document.getElementById("offer5Answer");

    // Get the rep result text elements
    repResultTextElements[0] = document.getElementById("offer1RepResult");
    repResultTextElements[1] = document.getElementById("offer2RepResult");
    repResultTextElements[2] = document.getElementById("offer3RepResult");
    repResultTextElements[3] = document.getElementById("offer4RepResult");
    repResultTextElements[4] = document.getElementById("offer5RepResult");
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
    checkOffer(1, -2, -5);
}

// Check the first offer
// PARAM 1: The question number you want to check
// PARAM 2: The rep value when the offer is authorized
// PARAM 3: The rep value when the offer is denied
function checkOffer(questionNum, questionAuthorizedRepValue, questionDeniedRepValue) {

    // Result rep values
    var authorizedRepValue = questionAuthorizedRepValue;
    var deniedRepValue = questionDeniedRepValue;

    // If the offer was not answered
    if (sessionStorage.getItem("q1SavedAnswer") === "n" || sessionStorage.getItem("q1SavedAnswer") === null) {

        // Set the text of the selected question rep result element to be 0
        repResultTextElements[(questionNum - 1)].innerHTML = "0";

    }

    // If the offer was answered
    if (sessionStorage.getItem("q1SavedAnswer") !== "n") {

        // If the offer was authorized
        if (sessionStorage.getItem("q1SavedAnswer") === "a") {

            // Add to the player's reputation based on the authorized rep value
            playerReputation += authorizedRepValue;

            // Set the text of the of the selected rep result element to be the same as the authorized rep value
            repResultTextElements[(questionNum - 1)].innerHTML = authorizedRepValue;
        }

        // If the offer was denied
        if (sessionStorage.getItem("q1SavedAnswer") === "d") {

            // Add to the player's reputation based on the denied rep value
            playerReputation += deniedRepValue;

            // Set the text of the selected question rep result element to be the same as the denied rep value 
            repResultTextElements[(questionNum - 1)].innerHTML = deniedRepValue;
        }

    }
}