$(function(){
  hideEverything();
  pageLoad();
  startApp();
  about();
});

// $.ajax({
//   type: "GET",
//   url: "https://api.flickr.com/services/rest/?",
//   data: {
//     method: "flickr.photos.search",
//     api_key: "571d32d4d12abeea7e521a6fd1f70669",
//     format: "json",
//     nojsoncallback: "1",
//     safe_search: "1",
//     tags: "scenic, landmark",
//   },
//   dataType: "json",
//   success: function(r){
//     var randomPhoto = _.sample(r.photos.photo);                           
//       userId = randomPhoto.id;           
//       secret = randomPhoto.secret;           
//       server = randomPhoto.server;    
//       console.log(r);        
//       $('#test').append('<img id="test123" src="https://c1.staticflickr.com/1/'+server+'/'+userId+'_'+secret+'_b.jpg">');
//   }
// });


// function responseButtons(){
//   $
// }

// function continentSwitcher(){
//   while (true) {

//   }
// }

function handlerIn(){
  $("#explanation").fadeIn(500);
  $("#explanation2").fadeIn(500);

}

function handlerOut(){
  $("#explanation").fadeOut(500);
  $("#explanation2").fadeOut(500);
}

function about(){
  $("#about").hover(handlerIn, handlerOut);
}

function hideEverything(){
  $("#title").toggle();
  $("#about").toggle();
  $("#start").toggle();
  $("#explanation").toggle();
  $("#explanation2").toggle();

  $("#step1Background").toggle();
  $("#step1Title").toggle();
  $("#question").toggle();
  $("#continent").toggle();
  $("#responses").toggle();
}

function pageLoad(){
  $("#title").fadeIn(3000);
  $("#about").fadeIn(4000);
  $("#start").fadeIn(4000);
}

var step1 = function step1(){
  $("#step1Background").fadeIn(1500);
  $("#step1Title").fadeIn(3000);
  $("#question").fadeIn(3000);
  $("#continent").fadeIn(5000);
  $("#responses").fadeIn(7000);
};

function startApp(){
  $("#start").on("click", function(){
    $("#frontPage").fadeOut(1000);
    $("#frontPage").promise().done(step1);
  });
}








