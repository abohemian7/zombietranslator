$(document).ready(function(){
  $('#zombie-to-english-btn').click(function(event){
    if(!($('#english').val())){unzombify();}
    console.log("clicked zombie to english");
    return false;
  });

  $('#english-to-zombie-btn').click(function(event){
    zombify();
    console.log("clicked english to zombie");
    return false;
  });

  var zombieWords = $('#zombie').val();
  var englishWords = $('#english').val();
  var zombieMemory = "";

// 1. lower-case "r" at the end of words replaced with "rh".
  var ruleOne = function(position){
    if(new RegExp(/^[r]\b/).test(englishWords.substr(position,2))){return true;}
    return false;
  }

// 2. an "a" or "A" will be replaced with "hra".
  var ruleTwo = function(position){
      if(new RegExp(/[a]/i).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
//   ".!?", followed by a space, followed by a letter.)
  var ruleThree = function(position){
    if(new RegExp(/[.!?]\s\w/).test(englishWords.substr(position,3))){return true;}
    return false;
  }

// 4. "e" or "E" is replaced by "rr"
  var ruleFour = function(position){
    if(new RegExp(/[eE]/).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 5. "i" or "I" is replaced by "rrRr"
  var ruleFive = function(position){
    if(new RegExp(/[iI]/).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 6. "o" or "O" is replaced by "rrrRr"
  var ruleSix = function(position){
    if(new RegExp(/[oO]/).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 7. "u" or "U" is replaced by "rrrrRr"
  var ruleSeven = function(position){
    if(new RegExp(/[uU]/).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 8. "r" or "R' is replaced by "RR"
  var ruleEight = function(position){
    if(new RegExp(/[rR]/).test(englishWords.substr(position,1))){return true;}
    return false;
  }

// 9. if the last character is not alphanumeric, end with " ... unggggghhh"
  var ruleNine = function(aWord){
    if(new RegExp(/\W/).test(aWord.substr(-1,1))){return true;}
    return false;
  }


// translate from zombie to english
  // whatever is in the english box
  function zombify(){
    englishWords = $('#english').val();
    zombieWords = "";
    var spaces = 0;
    $('#zombie').val("");

  for(var i = 0; i < englishWords.length; i++){
      // rule 10
      if(englishWords[i]===" "){
        spaces++;
        zombieWords += englishWords[i];
        if(spaces%4 === 0){
          zombieWords += " ... brains ... "
        }
      }
      // rule 1
      else if(ruleOne(i)){
        zombieWords += "rh";}
      // rule 2
      else if(ruleTwo(i)){
        zombieWords += "hra";}
      // rule 3
      else if (ruleThree(i)){
        zombieWords += englishWords.substr(i,3).toUpperCase();
        i += 2;}
      // rule 4
      else if (ruleFour(i)){
        zombieWords += "rr";}
      // rule 5
      else if (ruleFive(i)){
        zombieWords += "rrRr";}
      // rule 6
      else if (ruleSix(i)){
        zombieWords += "rrrRr";}
      // rule 7
      else if (ruleSeven(i)){
        zombieWords += "rrrrRr";}
      // rule 8
      else if (ruleEight(i)){
        zombieWords += "RR";}
      else {zombieWords += englishWords[i]}
    }

    // rule 9
    if(ruleNine(englishWords)){zombieWords +=" ... unggggghhh";}

        $('#zombie').val(zombieWords);

  }

  // translate from Zombie to English
  // whatever is in the zombie box
  function unzombify(){

    zombieWords = $('#zombie').val();
    $('#zombie').val(zombieWords);

    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/ ... unggggghhh/g,"");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrrrRr/g,"u");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrrRr/g,"o");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rrRr/g,"i");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rr/g,"e");
    console.log("zombieWords: " + zombieWords);
    zombieWords = zombieWords.replace(/RR/g,"r");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/hra/g,"a");
    console.log("zombieWords: " + zombieWords)
    zombieWords = zombieWords.replace(/rh\b/g,"r ");
    console.log("zombieWords: " + zombieWords)

    $('#english').val(zombieWords);

  }

  $('#english').on("keyup", zombify);
  $('#zombie').on("keyup",unzombify)

});
