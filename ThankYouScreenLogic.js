// The logic for the thank you screen

// Document element references
var offerAnswerTextElements = new Array(5);
var repResultTextElements = new Array(5);
var ceoNameTextElement;
var repTotalTextNumberElement;


// Player properties
var playerReputation = 0;
var playerRank;



// Initialize the page
function initializePage() {

    // Get document references
    getDocumentReferences();

    // Set the answer text content
    setTheAnswerTextContent();

    // Set the player's reputation
    setPlayerReputation();

    // Display total player reputation
    repTotalTextNumberElement.innerHTML = playerReputation;

    // Calculate player rank
    calculatePlayerRank();

    // Set the text for the ceo name text element
    setCeoNameTextElementContent();

    // Set the colour of the rep total text element
    setRepTotalTextColour();
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

    // Get the CEO name text element
    ceoNameTextElement = document.getElementById("CEONameDisplayText");

    // Get the rep total text element
    repTotalTextNumberElement = document.getElementById("repTotalTextNumber");
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
    checkOffer(1, -20, -50);

    // Check the second offer
    checkOffer(2, -50, 50);

    // Check the third offer
    checkOffer(3, -50, 20);

    // Check the fourth offer
    checkOffer(4, 50, 20);

    // Check the fifth offer
    checkOffer(5, -50, 20);
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
    if (sessionStorage.getItem("q" + questionNum + "SavedAnswer") === "n" || sessionStorage.getItem("q" + questionNum + "SavedAnswer") === null) {

        // Set the text of the selected question rep result element to be 0
        repResultTextElements[(questionNum - 1)].innerHTML = "No Change";

    }

    // If the offer was answered
    else if (sessionStorage.getItem("q" + questionNum + "SavedAnswer") !== "n") {

        // If the offer was authorized
        if (sessionStorage.getItem("q" + questionNum + "SavedAnswer") === "a") {

            // Add to the player's reputation based on the authorized rep value
            playerReputation += authorizedRepValue;

            // Set the text of the of the selected rep result element to be the same as the authorized rep value
            repResultTextElements[(questionNum - 1)].innerHTML = getRepResultText(authorizedRepValue);
        }

        // If the offer was denied
        if (sessionStorage.getItem("q" + questionNum + "SavedAnswer") === "d") {

            // Add to the player's reputation based on the denied rep value
            playerReputation += deniedRepValue;

            // Set the text of the selected question rep result element to be the same as the denied rep value 
            repResultTextElements[(questionNum - 1)].innerHTML = getRepResultText(deniedRepValue);
        }
    }
}

// Get rep result text
function getRepResultText(repValue) {

    var finalText;

    // If the rep value passed on is greater than 0
    // Set the final text string to be "+(repValue)"
    if (repValue > 0) {
        finalText = "+" + repValue;
    }

    // If the rep value passed on is less than 0
    // Set the final text string to be just the rep value
    else if (repValue < 0) {
        finalText = repValue;
    }

    return finalText;
}

// Calculate player rank
function calculatePlayerRank() {

    // If the player's rep value is equal to 0
    // Set their rank to be "Random CEO"
    if (playerReputation === 0) {
        playerRank = "Random CEO";
    }

    // If the player's rep value is less than 0
    // Set the their rank to be "Jerk CEO"
    else if (playerReputation < 0) {
        playerRank = "Jerk CEO";
    }

    // If the player's rep value is greater than 0
    // Set their rank to be "Respectable CEO"
    else if (playerReputation > 0) {
        playerRank = "Respectable CEO";
    }


    // Display the player's rank
    document.getElementById("rankText").innerHTML = "Rank: " + playerRank;

}

// Set the text for the ceo name text element
function setCeoNameTextElementContent() {

    // If no ceo name has been set
    // Set the content to be "No Name"
    if (sessionStorage.getItem("SavedCEOName") === null) {
        ceoNameTextElement.innerHTML = "CEO: " + "No Name";
    }

    // Otherwise
    // Set the content to be the saved CEO name
    else {
        ceoNameTextElement.innerHTML = "CEO: " + sessionStorage.getItem("SavedCEOName");
    }
}

// Set the colour of the rep total text element
function setRepTotalTextColour() {

    // If the player's reputation is greater than 0
    // Set the colour to be green
    if (playerReputation > 0) {
        repTotalTextNumberElement.style = "color: green;";
    }

    // If the player's reputation is less than 0
    // Set the colour to be red
    else if (playerReputation < 0) {
        repTotalTextNumberElement.style = "color: red;"
    }

    // Otherwise
    // Set the colour to be white
    else {
        repResultTextElements.style = "color: black;"
    }
}