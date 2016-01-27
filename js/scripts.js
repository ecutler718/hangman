//back end business logic

var generatedWord = function() {
  var mysteryWord = randWord();
  var underscoreArray = underscore(mysteryWord);

  return randWord();
};

var randWord = function() {
  var item = ["lawton", "cow", "portland", "why", "snake", "eyedrop", "avacado", "tron", "bruise", "staple"];
  var mysteryWord = item[Math.floor(Math.random() * 10)];
  // debugger;
  return mysteryWord;
};
//
var underscore = function(mysteryWord) {
  var underscoreArray = [];

  for(var i = 0; i < mysteryWord.length; i++) {
    underscoreArray.push('_');
  }

  return underscoreArray.join("");
}

  // check user input for correct letter

var wordCheck = function(userInput, mysteryWord){
    for(var i = 0; i < mysteryWord.length; i++){
      if(userInput === mysteryWord[i]) {
        return true;
      }
    }
    return false;
}

  //if correct replace dash with wletter

  var letterCompare = function(userInput, mysteryWord, underscoreArray){
    for (var i = 0; i < mysteryWord.length; i++) {
      if(userInput === mysteryWord[i]) {
        underscoreArray[i] = userInput;
      }
    }
    return underscoreArray.join("");
}
  // checks if player wins or loses game

  var gameOverCheck = function(mysteryWord, underscoreArray, bodyCount){
    if(mysteryWord === underscoreArray || bodyCount >= 6 ){
      return true
    }
    return false
}

  var messageCheck = function(bodyCount){
    if(bodyCount >= 6){
      return "YOU LOSE!";
    }
    return "YOU WIN!"
  }


//front end logic

 $(function() {
   $("form").submit(function(event) {
     event.preventDefault();

     var userInput = $("form");
     var lives = 0;

   });
 });
