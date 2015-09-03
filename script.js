$(function(){
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
//     tags: "flower fields"
//   },
//   dataType: "json",
//   success: function(r){
//     var randomPhoto = _.sample(r.photos.photo);          
//       if(r.response==="False") {           
//         alert("Bad response! please try again.");         
//       } else {                    
//         userId = randomPhoto.id;           
//         secret = randomPhoto.secret;           
//         server = randomPhoto.server;            
//         $('#test123').append('<img src="https://c1.staticflickr.com/1/'+server+'/'+userId+'_'+secret+'_b.jpg">');
//       }
//    }
// });

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

function pageLoad(){
  $("#title").toggle(); $("#about").toggle(); $("#start").toggle(); $("#explanation").toggle(); $("#explanation2").toggle();
  $("#title").fadeIn(3000); $("#about").fadeIn(5000); $("#start").fadeIn(5000);
}

function startApp(){
  $("#start").on("click", function(){
    $("#image").fadeOut(2000);
  });
}