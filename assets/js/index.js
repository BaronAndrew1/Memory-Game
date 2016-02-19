$(function () {
  'use strict';
  // var flip=true;
  var storage = null;
  // var foot = $("input");
  // var arrayHolder = [];
  var start = new Date().getTime();





  function appendZero(z) {
      return ( z < 10 ? "0" : "" ) + z;
    }

  setInterval(function() {
    var counter = Math.round((new Date - start) / 1000);

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




  // seconds = 0;
  // minutes = 0;
  // hours = 0;
  //
  // setInterval(function() {
  //     $('.Timer').text((new Date - start) / 1000 + " Seconds");
  // }, 1000);





  $(".card").on('click', function () {

    if($(".clicked").length % 2 === 0){
      storage=$(this).attr("id");
      // console.log(storage);
    }

    if($(".clicked").length < 19){
      $(this).addClass("clicked");
      console.log($(".clicked2").length);
      console.log($(".heart").length);
    }

    if($(".clicked2").length > 17){
      $(".modal2").addClass("showing");
    }

    if($(".heart").length === 0){
      $(".modal").addClass("showing");
    }

    if($(".clicked").length % 2 === 0){
      // console.log("IM COUNTING!");
      if($(this).attr("id") === storage){
        storage=null;
        ($(".clicked").addClass("clicked2"));
        // arrayHolder.length = $(".clicked").length;
        // console.log(arrayHolder.length)
      }

      else{
        storage=null;
        $(".heart:last-child").remove();
        for(var i = 0; i<$(".clicked").length; i++){
          //New Version!
          setTimeout(function() {
            $(".clicked").removeClass("clicked");
          }, 1000);


          // $(".clicked").removeClass("clicked"); Original version;
        }
      }
  }
    else{
      // console.log("IM NOT COUNTING!")
    }











    //  Method unworkable
    // if($("input:checked").length = 1){
    //    console.log("NO!!!!!")
    //   if($(this).attr("id") === storage){
    //     storage=null;
    //     for(var i = 0; i<foot.length; i++){
    //        "input" = false;
    //        console.log("15");
    //        console.log($("input:checked").length);
    //       foot.val=true;
    //     }
    //   }
    //   else{
    //     console.log("FREEEEE")
    //   }
    //
    //      console.log("gogogo");
    //      storage=null;
    //      $(this).attr("id").removeClass("clicked");
    //   }
    //
    // if($("input:checked").length < 2){
    //    console.log("yes!");
    //    console.log($("input:checked").length);
    //   $(this).addClass("clicked");
    // }
    // if($("input:checked").length < 1){
    //   storage = $(this).attr("id")
    //    console.log(storage)
    //    console.log($("input:checked").length);
    //   console.log($(".clicked").length);
    // }








    //Interesting Concept
    // $(this).addClass("clicked");
    // storage = $(this);
    //
    // if($(this).is(storage)){
    //   console.log("foo");
    // }






    // NOT WORKING
    // var clicked = ".clicked";
    //
    // if ($(this.contains(clicked))){
    //   $(this).removeClass("clicked");
    // }
    // else{
    //   $(this).addClass("clicked");
    // }



    // NOT WORKING
    // if($(this).not(".clicked")){
    //   $(this).removeClass("clicked");
    // }
    //
    // if ($(this).class !== "clicked"){
    //   $(this).addClass("clicked");
    //   console.log("buzz");
    //   }




    //NOT WORKING!!
    // if(flip===true){
    //   !$(this).addClass("clicked");
    //   flip=false;
    // }
    // else if(flip===false){
    //   !$(this).removeClass("clicked");
    //   flip=true;
    // }


  });
});

  // var hours = 0;
  // var minutes = 0;
  // var seconds = 0;
  // var pastHours = undefined;
  // var pastMinutes = undefined;
  // var pastSeconds = undefined;
  // var timeUpdate;
  //
  //
  // window.onload = function updateTime(pastHours, pastMinutes, pastSeconds){
  //       var startTime = new Date();    // fetch current time
  //
  //       timeUpdate = setInterval(function () {
  //           var timeElapsed = new Date().getTime() - startTime.getTime();    // calculate the time elapsed in milliseconds
  //
  //           // calculate hours
  //           hours = parseInt(timeElapsed / 1000 / 60 / 60) + pastHours;
  //
  //           // calculate minutes
  //           minutes = parseInt(timeElapsed / 1000 / 60) + pastMinutes;
  //           if (minutes > 60) minutes %= 60;
  //
  //           // calculate seconds
  //           seconds = parseInt(timeElapsed / 1000) + pastSeconds;
  //           if (seconds > 60) seconds %= 60;
  //
  //           // set the stopwatch
  //           setStopwatch(hours, minutes, seconds);
  //
  //           console.log("f");
  //
  //       }, 1000); // update time in stopwatch after every 25ms
  //
  //   }

    // Set the time in stopwatch
    // window.onload = function setStopwatch(hours, minutes, seconds){
    //     $("#hours").html(hours);
    //     $("#minutes").html(minutes);
    //     $("#seconds").html(seconds);
    // }

    // Prepend zeros to the digits in stopwatch
    // window.onload = function prependZero(time, length) {
    //     time = new String(time);    // stringify time
    //     return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
    // }
