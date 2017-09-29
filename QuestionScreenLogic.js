// The results for question 1
// Index 0 is the authorized transaction result
// Index 1 is the denied transaction result
var question1Results = new Array(2);
question1Results[0] = "Telsik now holds 70% of all house addresses in Voltavia. "
    + "Telsik was recently contracted by the government to crack down on anybody "
    + "speaking out against the government. Most rebel leaders were caught and the revolution "
    + "is starting to fade away.";

question1Results[1] = "A cyber weapon by the rebels was stolen from the hacker group Absorber "
    + "and was used on your servers. Now all house addresses on your system have been "
    + "compromised and have been stolen. What the information will be used for is currently unknown.";



// The results for question 2
// Index 0 is the authorized transaction result
// Index 1 is the denied transaction result
var question2Results = new Array(2);
question2Results[0] = "Your company won the bid and 80% of your image data has been sent to their testing "
    + "facilities on the outskirts of Voltavia. Aline’s technology became successful "
    + "and you as well as Aline are making record profits. "
    + "However the deal between the two companies has been leaked and your "
    + "company is now under investigation by the government.";

question2Results[1] = "Your competitor Pocal won the bid. "
    + "Aline’s technology became a hit and both companies are making record profits. "
    + "However the deal between the two companies was leaked and Pocal is under investigation from the government. "
    + "At the end of investigation Pocal’s CEO was arrested and soon after Pocal was closed down.";


// The results for quesiton 3
// Index 0 is the authorized transaction result
// Index 1 is the denied transaction result
var question3Results = new Array(2);
question3Results[0] = "Both your systems as well as Turiel’s have been combined to one large storage server. "
    + "Your company has become the premier destination for cloud storage in the business world. "
    + "However due to the company’s notorious leaking history 50% of images, house addresses, "
    + "as well as medical records from your customers has been transferred to the hacker group Absorber. "
    + "90% of your customers left your company and you are on the brink of bankruptcy.";

question3Results[1] = "Turiel Storage became bankrupt and your relationship with businesses is still mediocre. "
    + "No further action is required.";



// The results for question 4
// Index 0 is the authorized transaction result
// Index 1 is the denied transaction result
var question4Results = new Array(2);
question4Results[0] = "You transfer 30% of your customer’s medical records to Upaska. "
    + "Upaska has a breakthrough and now their medicine is being deployed around the world. "
    + "The deal between you and Upaska has been leaked. But "
    + "your company has been praised for using your customer's information for good.";

question4Results[1] = "Upaska is no longer able to progress with their research. "
    + "However Aline Systems acquires them and Upaska is now able to continue with their research. "
    + "The request to your company has been leaked. "
    + "However by denying the deal you were both congratulated for rejecting the deal "
    + "but were criticized by some by not lending over some of your customer’s medical records in the name of science.";



// The results for question 5 
// Index 0 is the authorized transaction result
// Index 1 is the denied transaction result
var question5Results = new Array(2);
question5Results[0] = "You transferred 50% of your video content to Arcia. Arcia repurposes the videos for promotional material. "
    + "However some of your customers recognize that some of their videos were used in Arcia’s commercials. "
    + "As of which 20% of your existing customers have unsubscribed from your service.";

question5Results[1] = "Arcia turns to Ragal Media for video content. You did not make any losses. No further action is required.";


// Document element references
var questionNavigationPoints = new Array(5);
var continueButtonList = new Array(5);
var pageTopElement;
var resultTextObjects = new Array(5);
var resultTextDefaultTextContent;


// Initialize the page
function initializePage() {

    // Get document references    
    getDocumentReferences();

    // Set welcome text content
    setWelcomeTextContent();

    // Reset saved question answers
    resetSavedQuestionAnswers();

    // Get the default text for the result text objects
    resultTextDefaultTextContent = resultTextObjects[0].innerHTML;
}


// Get document references
function getDocumentReferences() {

    // Get question navigation point references
    questionNavigationPoints[0] = document.getElementById("questionNavPoint_01");
    questionNavigationPoints[1] = document.getElementById("questionNavPoint_02");
    questionNavigationPoints[2] = document.getElementById("questionNavPoint_03");
    questionNavigationPoints[3] = document.getElementById("questionNavPoint_04");
    questionNavigationPoints[4] = document.getElementById("questionNavPoint_05");

    // Get all continue buttons
    continueButtonList = document.getElementsByClassName("continueButtonTrigger");

    // Get the page top element
    pageTopElement = document.getElementById("ResetNavPoint");

    // Get the result text objects
    resultTextObjects[0] = document.getElementById("q1ResultText");
    resultTextObjects[1] = document.getElementById("q2ResultText");
    resultTextObjects[2] = document.getElementById("q3ResultText");
    resultTextObjects[3] = document.getElementById("q4ResultText");
    resultTextObjects[4] = document.getElementById("q5ResultText");
}

// Set welcome text content
function setWelcomeTextContent() {

    var welcomeText = document.getElementById("welcomeText");

    // Set the welcome text to include the saved CEO name
    welcomeText.innerHTML = "Welcome... " + sessionStorage.getItem("SavedCEOName");
}

// Reset saved question answers
function resetSavedQuestionAnswers() {

    sessionStorage.setItem("q1SavedAnswer", "n");
    sessionStorage.setItem("q2SavedAnswer", "n");
    sessionStorage.setItem("q3SavedAnswer", "n");
    sessionStorage.setItem("q4SavedAnswer", "n");
    sessionStorage.setItem("q5SavedAnswer", "n");

}


// Answer a question
// Param 1: answerType (The type of answer given, 0 = authroized and 1 = denied)
// Param 2: questionNum (The question player is answering)
function answerQuestion(answerType, questionNum) {

    // Unfocus the currently active element
    document.activeElement.blur();

    // If the answer type is authorized
    if (answerType === 0)
        answerQuestionAsAuthorized(questionNum)

    // If the answer type is denied
    else if (answerType === 1)
        answerQuestionAsDenied(questionNum)

}

// Answer question as authorized
// This is to be used in the function "answerQuestion()"
function answerQuestionAsAuthorized(questionNum) {

    // Depending of the quesiton show the appropriate result
    // Save the answer of the appropriate result
    switch (questionNum) {

        case 1:
            resultTextObjects[0].innerHTML = question1Results[0];
            resultTextObjects[0].style.textAlign = "justify";

            sessionStorage.setItem("q1SavedAnswer", "a");
            break;

        case 2:
            resultTextObjects[1].innerHTML = question2Results[0];
            resultTextObjects[1].style.textAlign = "justify";

            sessionStorage.setItem("q2SavedAnswer", "a");
            break;

        case 3:
            resultTextObjects[2].innerHTML = question3Results[0];
            resultTextObjects[2].style.textAlign = "justify";

            sessionStorage.setItem("q3SavedAnswer", "a");
            break;

        case 4:
            resultTextObjects[3].innerHTML = question4Results[0];
            resultTextObjects[3].style.textAlign = "justify";

            sessionStorage.setItem("q4SavedAnswer", "a");
            break;

        case 5:
            resultTextObjects[4].innerHTML = question5Results[0];
            resultTextObjects[4].style.textAlign = "justify";

            sessionStorage.setItem("q5SavedAnswer", "a");
            break;
    }
}

// Answer question as denied
// To be used in function "answerQuestion()"
function answerQuestionAsDenied(questionNum) {

    // Depending of the quesiton show the appropriate result
    switch (questionNum) {

        case 1:
            resultTextObjects[0].innerHTML = question1Results[1];
            resultTextObjects[0].style.textAlign = "justify";

            sessionStorage.setItem("q1SavedAnswer", "d");
            break;

        case 2:
            resultTextObjects[1].innerHTML = question2Results[1];
            resultTextObjects[1].style.textAlign = "justify";

            sessionStorage.setItem("q2SavedAnswer", "d");
            break;

        case 3:
            resultTextObjects[2].innerHTML = question3Results[1];
            resultTextObjects[2].style.textAlign = "justify";

            sessionStorage.setItem("q3SavedAnswer", "d");
            break;

        case 4:
            resultTextObjects[3].innerHTML = question4Results[1];
            resultTextObjects[3].style.textAlign = "justify";

            sessionStorage.setItem("q4SavedAnswer", "d");
            break;

        case 5:
            resultTextObjects[4].innerHTML = question5Results[1];
            resultTextObjects[4].style.textAlign = "justify";

            sessionStorage.setItem("q5SavedAnswer", "d");
            break;
    }
}

// Transition to question
// Param 1: destination(The question you want to navigate to)
function transitionToQuestion(destination) {

    // Scrolling speed
    // Lower values = faster speed
    var scrollingSpeed = 800;

    // Depending on the given destination
    // Scroll to a certain nav point
    window.smoothScroll(questionNavigationPoints[destination - 1], scrollingSpeed);

    // Unfocus the currently focused element
    document.activeElement.blur();
}

// Reset the game
function resetGame() {

    // Scrolling speed
    // Lower values = faster speed
    var scrollingSpeed = 500;

    // Scroll to the top of the page
    window.smoothScroll(pageTopElement, scrollingSpeed);

    // Reset the result text objects to their default text content
    for (var i = 0; i < resultTextObjects.length; i++) {
        resultTextObjects[i].innerHTML = resultTextDefaultTextContent;
        resultTextObjects[i].style = "text-align: center";
    }

    // Reset saved question answers
    resetSavedQuestionAnswers();

    // Unfocus the currently focused element
    document.activeElement.blur();
}


