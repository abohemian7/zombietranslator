$(document).ready(function(){
  $('#zombie-to-english-btn').click(function(event){
    unzombify();
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

  var ruleOne = function(position){

    if(
      new RegExp(/[r]+\b/).test(englishWords.substr(position,position+1))
        ){
      return true;
    }
    return false;
  }

  // for each, return false if no match otherwise return the new character.
  // consider a generic function?
  // consider using an include and this logic in a different file

  function zombify(){
    englishWords = $('#english').val();
    zombieWords = "";
    //zombieWords = englishWords;
    // 1. lower-case "r" at the end of words replaced with "rh".
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    // 4. "e" or "E" is replaced by "rr"
    // 5. "i" or "I" is replaced by "rrRr"
    // 6. "o" or "O" is replaced by "rrrRr"
    // 7. "u" or "U" is replaced by "rrrrRr"
    // 8. "r" or "R' is replaced by "RR"
    // 9. end appended with " ... ungggghhh"
    // 10. every fourth space is replaced with ellipsis + "brains" + ellipsis
    //$('#zombie').val($('#english').val());
  for(var i = 0; i < englishWords.length; i++){
      if(ruleOne(i)){
            zombieWords += "rh"
          }

      else {zombieWord += englishWords[i]}

      }

    $('#zombie').val(zombieWords);
  }

  function unzombify(){

    $('#zombie').val(englishWords);
    console.log("end of unzombify")

  }

  $('#english').on("keyup", zombify);

});
