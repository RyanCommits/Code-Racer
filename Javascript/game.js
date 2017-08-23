// buttons chooses language
$(document).ready(function () {
  $('.jsinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).toggleClass( "hide" )
    $(".title h1").html("You have 60 seconds");
    codeArray(randomCode);
    typeCheck(splitArray);
    createSpanStructure(splitArray);
    countDown();
  });
  $('.cssinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).toggleClass( "hide" )
    $(".title h1").html("You have 60 seconds");
    codeArray(csCode);
    typeCheck(cssArray);
    createSpanStructure(cssArray);
    countDown();
  });
  $('.htmlinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).toggleClass( "hide" )
    $(".title h1").html("You have 60 seconds");
    codeArray(htmlCode);
    typeCheck(htmlArray);
    createSpanStructure(htmlArray);
    countDown();
  });
});
// Modal reloads page
$(document).ready(function () {
  $('.restart').click(function () {
    location.reload();
  });
});

$(document).one('keypress',function(event) {
  $('.start').addClass('hide');
});

// instructions toggle
$('.btn-danger').click(function () {
$('.btn-danger').popover('toggle');
});

// Finish report
function speedPerMin(speed) {
  if(speed <= 199) {
    $('.rank').text("Your rank: noob.");
    $('.nextrank').text("Next rank at at 200 CPM");
    $('.rankgif').attr('src', './images/noob.gif');
  } else if (speed <= 239) {
    $('.rank').text("Your rank: Grandpa calling IT support.");
    $('.nextrank').text("Next rank at 240 CPM");
    $('.rankgif').attr('src', './images/grandpa.gif');
  } else if (speed <= 279) {
    $('.rank').text("Your rank: Average Joe being average.");
    $('.nextrank').text("Next rank at 280 CPM");
    $('.rankgif').attr('src', './images/notgood.gif');
  } else if (speed <= 329) {
    $('.rank').text("Your rank: Looking somewhat busy.");
    $('.nextrank').text("Next rank at 330 CPM");
    $('.rankgif').attr('src', './images/busy.gif');
  } else if (speed <= 399) {
    $('.rank').text("Your rank: Jim Carrey in that one movie.");
    $('.nextrank').text("Next rank at 400 CPM");
    $('.rankgif').attr('src', './images/jim.gif');
  } else {
    $('.rank').text("Your rank: Korean gamer playing StarCraft.");
    $('.nextrank').text("");
    $('.rankgif').attr('src', './images/korean.gif');
  }
}
