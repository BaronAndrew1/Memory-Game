
// I received substantial help from Dennis on concepts prior to programming


$(function () {

  // Declare an empty storage variable, set a start time for comparison in the timer, and declare a boolean to disable clicking.
  'use strict';
  var storage = null;
  var start = new Date().getTime();
  var clickDisabled = false;


  //Timer
  function appendZero(z) {
      return ( z < 10 ? "0" : "" ) + z;
    }

  setInterval(function() {
    var counter = Math.round((new Date().getTime() - start) / 1000);

    var hours = Math.floor(counter / 3600);
    counter = counter % 3600;

    var minutes = Math.floor(counter / 60);
    counter = counter % 60;

    var seconds = Math.floor(counter);

    hours = appendZero(hours);
    minutes = appendZero(minutes);
    seconds = appendZero(seconds);

    var timer = hours + ":" + minutes + ":" + seconds;

    $('.timer').text(timer);
  }, 1000);

  //Click Event

  $(".card").on('click', function () {

    if(clickDisabled)
      return;

    //Store Click Value

    if($(".clicked").length % 2 === 0){
      storage=$(this).attr("id");
    }

    //Flip the clicked card

    if($(".clicked").length < 2){
      $(this).addClass("clicked");
    }

    //If two tiles are flipped compare

    if($(".clicked").length % 2 === 0){

      //If the id is the same add a new clicked class and wipe storage.

      if($(this).attr("id") === storage){
        storage=null;
        ($(".clicked").addClass("clicked2").removeClass("clicked"));
      }

      //If two tiles do not match wipe the storage  and remove the clicked class

      else{
        storage=null;
        $(".heart:last-child").remove();
        for(var i = 0; i<$(".clicked").length; i++){

          //Set delay on the class removal to allow the second card to flip first.
          clickDisabled = true;
          setTimeout(function() {
            $(".clicked").removeClass("clicked");
            clickDisabled = false;
          }, 1000);
        }
      }
    }
  });

  //Check to see if the user wins or loses.

  window.setInterval(function(){

  //Display win screen if all tiles are matched

  if($(".clicked2").length > 17){
    $(".modal2").addClass("showing");
  }

  //Display lose screen if hearts go empty

  if($(".heart").length === 0){
    $(".modal").addClass("showing");
  }
},200);
});
