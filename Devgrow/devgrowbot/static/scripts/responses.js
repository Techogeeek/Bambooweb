function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }


    if (input == "hello") {
        return "Hello there!";
    }
    else if (input == "how to use project"){
        return "Go to the Project Section";
    }
    else if (input == "how to use e tender"){
        return "Click on the E tender link on the nav bar and then you will be redirected on the login page ";
    }
    else if (input == "how to apply for new project"){
        return "Go to the Project Section and click on the apply here button and then you can fill the form to apply";
    }
    else if (input == "What is the most profitable bamboo market other than production"){
        return "As of now Bamboo Handicrafts is the most profitable bamboo market";
    }
    else if (input == "Who all can use the Portal"){
        return "The portal is open for all the farmers and bussinesses that deal in bamboo and cane sector";
    }
   
     else if (input == "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}
