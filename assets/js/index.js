$(function () {
  'use strict';
  // var flip=true;
  var storage = null;
  var foot = $("input");
  // var arrayHolder = [];

  $(".card").on('click', function () {

    if($(".clicked").length % 2 === 0){
      storage=$(this).attr("id");
      console.log(storage);
    }

    if($(".clicked").length < 19){
      $(this).addClass("clicked");
      console.log($(".clicked").length);
    }

    if($(".clicked").length % 2 === 0){
      console.log("IM COUNTING!");
      if($(this).attr("id") === storage){
        storage=null;
        // arrayHolder.length = $(".clicked").length;
        // console.log(arrayHolder.length)
      }
      else{
        storage=null;
        for(var i = 0; i<$(".clicked").length; i++){
          $(".clicked").removeClass("clicked");
          $('.modal').addClass('showing');
        }
      }
  }
    else{
      console.log("IM NOT COUNTING!")
    }




















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
