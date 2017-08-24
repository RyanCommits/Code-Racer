// buttons chooses language
$(document).ready(function () {
  $('.jsinit').click(function () {
    mode = 'js';
    $( ".language" ).toggleClass( "hide" )
    $( ".tabjs" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).html( "Type when you're ready..." )
    $(".title h1").html("You have 60 seconds");
    codeArray(randomCode);
    typeCheck(splitArray);
    createSpanStructure(splitArray);
    countDown();
  });
  $('.cssinit').click(function () {
    mode = 'css';
    $( ".language" ).toggleClass( "hide" )
    $( ".tabcss" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).html( "Type when you're ready..." )
    $(".title h1").html("You have 60 seconds");
    codeArray(csCode);
    typeCheck(cssArray);
    createSpanStructure(cssArray);
    countDown();
  });
  $('.htmlinit').click(function () {
    mode = 'html';
    $( ".language" ).toggleClass( "hide" )
    $( ".tabindex" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    $( ".title h2" ).html( "Type when you're ready..." )
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
  $( ".title h2" ).addClass( "disappear" );
});

// instructions toggle
$('.btn-danger').click(function () {
$('.btn-danger').popover('toggle');
});
//results button toggle
$(document).ready(function () {
  $('.results').click(function () {
    $('#myModal').modal('show');
  });
});
// Finish report
function speedPerMin(speed) {
  if(speed <= 149) {
    $('.rank').text("Your rank: Noob.");
    $('.nextrank').text("Next rank at 150 CPM");
    $('.rankgif').attr('src', './images/noob.gif');
  } else if (speed <= 169) {
    $('.rank').text("Your rank: Grandpa calling IT support.");
    $('.nextrank').text("Next rank at 170 CPM");
    $('.rankgif').attr('src', './images/grandpa.gif');
  } else if (speed <= 199) {
    $('.rank').text("Your rank: Average Joe being average.");
    $('.nextrank').text("Next rank at 200 CPM");
    $('.rankgif').attr('src', './images/notgood.gif');
  } else if (speed <= 229) {
    $('.rank').text("Your rank: Looking somewhat busy.");
    $('.nextrank').text("Next rank at 230 CPM");
    $('.rankgif').attr('src', './images/busy.gif');
  } else if (speed <= 249) {
    $('.rank').text("Your rank: Jim Carrey in that one movie.");
    $('.nextrank').text("Next rank at 250 CPM");
    $('.rankgif').attr('src', './images/jim.gif');
  } else {
    $('.rank').text("Your rank: Korean gamer playing StarCraft.");
    $('.nextrank').text("");
    $('.rankgif').attr('src', './images/korean.gif');
  }
  statistics(speed);
}

// statistics modal local storage
function statistics(speed) {
  if (mode === "html") {
    if (speed > localStorage.htmlSpeed) {
    localStorage.removeItem("htmlSpeed");
    localStorage.removeItem("htmlRank");
    localStorage.setItem("htmlRank", $('.rank').text().slice(11));
    localStorage.setItem("htmlSpeed", speed);
    }
  } else if (mode === "css") {
    if (speed > localStorage.cssSpeed) {
    localStorage.removeItem("cssSpeed");
    localStorage.removeItem("cssRank");
    localStorage.setItem("cssRank", $('.rank').text().slice(11));
    localStorage.setItem("cssSpeed", speed);
    }
  } else if (mode === "js") {
    if (speed > localStorage.jsSpeed) {
    localStorage.removeItem("jsSpeed");
    localStorage.removeItem("jsRank");
    localStorage.setItem("jsRank", $('.rank').text().slice(11));
    localStorage.setItem("jsSpeed", speed);
    }
  }
}

$('.htmlrank').text(localStorage.htmlRank);
$('.htmlspeed').text(localStorage.htmlSpeed);
$('.cssrank').text(localStorage.cssRank);
$('.cssspeed').text(localStorage.cssSpeed);
$('.jsrank').text(localStorage.jsRank);
$('.jsspeed').text(localStorage.jsSpeed);

var mode = "";
