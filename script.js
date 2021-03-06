$(function(){
  hideEverything();
  pageLoad();
  startApp();
  about();
  responseButtons();
  restartButton();
  showMe();
  finished();
  likeIt();
  ehh();
  finishedSession();
  displayTag();
  restartButton2();
});

function restartButton2(){
  $("#restartButton2").on("click", function(){
    $("#picturePage").fadeOut(1000);
    $("#picturePage").promise().done(function(){
      location.reload();
    });
  });
}

var display = function display(){
  $("#listTags").append('<div class="listTag">'+likedTag[$(".pSizing").index($(this))]+'</div>');
};

function displayTag(){
  $("#pDiv").on("click", ".pSizing", display);
}

var picturePage = function picturePage(){
  $("#step2").fadeOut(1000);
  $("#picturePage").fadeIn(2000);
  var x = likedTag.length;

  for (i=0; i<likedTag.length; i++) {
    $("#pDiv").append('<img class="pSizing" src="https://c1.staticflickr.com/1/'+likedServer[i]+'/'+likedUserId[i]+'_'+likedSecret[i]+'_b.jpg">');
  }
};

function finishedSession(){
  $("#finishedSession").on("click", picturePage);
}

var nextPhoto = function nextPhoto(){
  $("#travelImageDiv").fadeOut(1000);
  $("#travelImageDiv").empty();
  ajax();
  $("#travelImageDiv").toggle().fadeIn(1000);
};

function ehh(){
  $("#nextPhoto").on("click", nextPhoto);
}

var server;
var userId;
var secret;
var randomTag;
var likedServer = [];
var likedUserId = [];
var likedSecret = [];
var likedTag = [];

var storeAndNext = function storeAndNext(){
  likedServer.push(server);
  likedUserId.push(userId);
  likedSecret.push(secret);
  likedTag.push(randomTag);
  $("#travelImageDiv").fadeOut(1000);
  $("#travelImageDiv").empty();
  ajax();
  $("#travelImageDiv").toggle().fadeIn(1000);
};

function likeIt(){
  $("#likeIt").on("click", storeAndNext);
}

function handlerIn2(){
  $("#explanation3").fadeIn(500);
}

function handlerOut2(){
  $("#explanation3").fadeOut(500);
}

function finished(){
  $("#finishedSession").hover(handlerIn2, handlerOut2);
}

var ajax = function ajax(){
  $("#showMeButton").fadeOut(1000);
  $("#likeIt").fadeIn(2000);
  $("#nextPhoto").fadeIn(2000);
  $("#finishedSession").fadeIn(2000);
  randomTag = _.sample(pickedContinents);
  
  $.ajax({
  type: "GET",
  url: "https://api.flickr.com/services/rest/?",
  data: {
    method: "flickr.photos.search",
    api_key: "571d32d4d12abeea7e521a6fd1f70669",
    format: "json",
    nojsoncallback: "1",
    safe_search: "1",
    tags: randomTag,
  },
  dataType: "json",
  success: function(r){
    var randomPhoto = _.sample(r.photos.photo);                           
      server = randomPhoto.server;
      userId = randomPhoto.id;         
      secret = randomPhoto.secret;
      $('#travelImageDiv').append('<img id="travelImage" src="https://c1.staticflickr.com/1/'+server+'/'+userId+'_'+secret+'_b.jpg">');
  }
  });
};

function showMe(){
  $("#showMeButton").on("click", ajax);
}

var places = {
  "africa": ["Great Sphinx", "Sahara Desert", "Nile River","Egypt Pyramid", "Fish River Canyon", "Victoria Falls", "Valley of the Kings", "Okavango Delta", "Serengeti", "Sossusvlei", "Masai Mara"],
  "antartica": ["Iceburg Calving", "South Pole", "Paradise Harbor", "Neumayer Channel", "Lemaire Channel", "Deception Island", "Ross Ice Shelf", "Mount Erebus", "Polar Ice Cap", "Emperor Penguins"],
  "asia": ["Ha Long Bay", "Taal Volcano", "Puerto Princesa Underground River", "Zhangye Danxia Landform", "Jiuzhaigou Valley", "Pangong Tso Lake", "Shilin Stone Forest", "Mt. Sanqing", "Arashiyama Bamboo Forest", "Great Wall", "St Basil's Cathedral", "MtEverest", "Taj Mahal", "Furano", "Hong Kong Peak", "Qutub Minar", "Petra", "Azadi Tower", "Forbidden City", "Great Buddha", "Sultan Ahmed Mosque"],
  "australia": ["Shark Bay", "Bondi Beach", "Port Arthur", "Heart Reef", "Uluru", "Sydney Opera House", "Great Barrier Reef", "Harbor Bridge"],
  "europe": ["Tower of London", "La Sagrada Familia", "Schonbrunn Palace", "Neuschwanstein Castle", "Mont-St-Michel", "Duomo Italy", "Alhambra Spain", "Acropolis Athens", "Big Ben", "Eiffel Tower", "Roman Colosseum", "Grand Canal", "Leaning Tower of Pisa"],
  "north america": ["L'Anse Aux Meadows", "CN Tower", "Panama Canal", "Lincoln Memorial", "Statue of Liberty", "Golden Gate Bridge", "Niagara Falls"],
  "south america": ["Angel Falls", "Caño Cristales River", "Vale Da Lua", "Lençóis Maranhenses", "Iguazu Falls", "Perito Moreno Glacier", "Machu Picchu", "Chichen Itza", "Easter Island"],
};

var pickedContinents = [];

var continents = ["ANTARTICA?", "ASIA?", "AUSTRALIA?", "EUROPE?", "NORTH AMERICA?", "SOUTH AMERICA?"];

var counter = 0;

function restartButton(){
  $("#restartButton").on("click", function(){
    location.reload();
  });
}

var continentSwitcher = function continentSwitcher(){
  if (continents[counter] === undefined) {
    if ($(this)[0].id === "yes") {
      pickedContinents = pickedContinents.concat(places[$("#continent")[0].innerText.split("?")[0].toLowerCase()]);
    }
    $("#step1").fadeOut(500);
    $("#step1").promise().done(function(){
      if (pickedContinents.length === 0) {
        $("#oops").fadeIn(800);
        $("#restartButton").fadeIn(2000);
      } else {
        $("#step2Title").fadeIn(2000);
        $("#showMeButton").fadeIn(2000);
      }
    });
    return false;
  }
  $("#continent").fadeOut(500);
  if ($(this)[0].id === "yes") {
    pickedContinents = pickedContinents.concat(places[$("#continent")[0].innerText.split("?")[0].toLowerCase()]);
  }
  $("#responses").off("click", "span", continentSwitcher);
  $("#continent")[0].innerText = continents[counter];
  $("#continent").toggle().fadeIn(800);
  counter++;
  $("#responses").on("click", "span", continentSwitcher);
};

function responseButtons(){
  $("#responses").on("click", "span", continentSwitcher);
}

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

  $("#step2Title").toggle();
  $("#oops").toggle();
  $("#restartButton").toggle();
  $("#showMeButton").toggle();
  $("#likeIt").toggle();
  $("#nextPhoto").toggle();
  $("#finishedSession").toggle();
  $("#explanation3").toggle();

  $("#picturePage").toggle();
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
  $("#continent").fadeIn(4000);
  $("#responses").fadeIn(5000);
};

function startApp(){
  $("#start").on("click", function(){
    $("#frontPage").fadeOut(1000);
    $("#frontPage").promise().done(step1);
  });
}