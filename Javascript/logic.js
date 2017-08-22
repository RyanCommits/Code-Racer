// Generates random HTML code
function findHTMLCode () {
  const codeList = ['<div class=\"container statistics\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <div class=\"errors\">Errors: 0</div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"accuracy\">Accuracy: 100%</div>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"clock\">60 seconds</div>', `<nav class="navbar navbar-light bg-light">\n  <div class="container">\n    <div class="row">\n      <div class="navbar-header col-sm-2">\n        <a class="navbar-brand" href="#">\n          minute<div>coder</div>\n        </a>\n      </div>\n    </div>\n  </div>`, `<body>\n  <div class="container-fluid text-center title">\n    <h1>60 Second Challenge!</h1>\n    <h2>Can you code 10 lines in 60 seconds?</h2>\n  </div>\n  <div class="container">\n<!-- Choose language -->\n    <div class="language">\n     <h2>Choose your language</h2>\n        <button class="btn btn-primary btn-lg" role="button" aria-pressed="true">HTML</button>`, `<div class="console hide">\n  <div class = "tabjs">\n  <img src="./images/javascript-icon.png" />\n  <img class="closeiconjs" src="./images/close.png" />\n  </div>\n  <div class = "tabindex">\n  <img src="./images/html.png" />\n  <img class="closeicon" src="./images/close.png" />\n  </div>\n  <div class="tabs">`, `<div class="tabs">\n  <div class="tab"><div class="tab-box activetab"></div></div>\n</div>\n<div class="row">\n  <div class="col-sm-1">\n    <p id="first">1</p>\n    <p>2</p>\n    <p>3</p>\n    <p>4</p>\n    <p>5</p>`, `<div class="container statistics">\n  <div class="row">\n    <div class="col-sm-2">\n      <div class="errors">Errors: 0</div>\n    </div>\n    <div class="col-sm-3">\n      <div class="accuracy">Accuracy: 100%</div>\n    </div>\n    <div class="col-sm-2">\n      <div class="clock">60 seconds</div>`, `<!-- Finish Modal -->\n<div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel">Finish!</h5>\n      </div>\n      <div class="modal-body">\n        <div class="container-fluid">\n          <div class="row">`];

  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

// Generates random CSS code
function findCSSCode () {
  const codeList = ['pre {\n  color: #fdf6e3;\n  background-color: #002b36;\n  border: 5px solid #292929;\n  margin-bottom: 0;\n  height: 400px;\n}\n  body {\n  background-color: #f8f9fa;\n}'];

  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

// Generates random JS code

function findJsCode () {
  const codeList = ['function createSpanStructure(splitArray) {\n  splitArray.forEach(function (character){\n    if (character == \'n\') {\n      $(\'<span class=\"before\"></span>\').appendTo(\'pre\');\n      $(\'span:last-of-type\').html(\<br>\);\n    } else {\n      $(\'<span class=\"before\"></span>\').appendTo(\'pre\');\n      $(\'span:last-of-type\').html(character);\n    }\n    $(\'span:first-of-type\').addClass(\'active\')\;', 'function typeCheck(splitArray) {\n  let i = 0;\n  let error = 0;\n  $(document).keydown(function(event) {\n    if(event.which === 8 && i > 0) {\n    $(\'.before\').eq(i).removeClass(\'active\');\n    $(\'.before\').eq(i).removeClass(\'correct\');\n    i--;\n    $(\'.before\').eq(i).addClass(\'active\');\n    $(\'.before\').eq(i).addClass(\'active\');', `$(document).keypress(function(event) {\n  let typed = String.fromCharCode(event.which);\n  totalCorrect(error);\n//prevents space from scrolling\n  if (event.which == 32){\n    event.preventDefault();\n  }\n  if (typed == splitArray[i]) {\n    $('.before').eq(i).removeClass('incorrect');\n    $('.before').eq(i).removeClass('active');`, `else if (event.which === 13 && splitArray[i] === '\\n' ) {\n  $('.before').eq(i).removeClass('incorrect');\n  $('.before').eq(i).removeClass('active');\n  $('.before').eq(i).removeClass('return');\n  $('.before').eq(i).addClass('correct');\n  i += 1;\n  while (splitArray[i] === ' ')\n  i++;\n  $('.before').eq(i).addClass('active');\n  } else {`, `// Calculates accuracy of input\nfunction totalCorrect(error) {\n  $(document).keydown(function(event) {\n    let correct = $('.correct').length;\n    let accuracy = Math.round(correct * 10000/(correct+error) / 100);\n    if (isNaN(accuracy)) {\n      $('.accuracy').text('Accuracy: 100%');\n    } else {\n      $('.accuracy').text("Accuracy: " + accuracy + "%");\n    }`, `function countDown() {\n  let count = 0;\n  $(document).one('keypress',function(event) {\n    var seconds = 60, timer = setInterval(function() {\n    $(".clock").html(seconds-- + " seconds");\n    count++;\n    charPerMin(count);\n    if(seconds === -1) {\n      clearInterval(timer);\n      $('.accreport').text($('.accuracy').text());`, `function charPerMin(count) {\n  let charTyped = $('.correct').length;\n  let speed = Math.round(charTyped / count * 60);\n  $('.speed').text("Characters Per Minute: " + speed);\n  $('.speedreport').text($('.speed').text());\n}\n// Modal reloads page\n$(document).ready(function () {\n  $('.restart').click(function () {\n    location.reload();`, `// buttons chooses language\n$(document).ready(function () {\n  $('.jsinit').click(function () {\n    $( ".language" ).toggleClass( "hide" )\n    $( ".console" ).toggleClass( "hide" )\n    codeArray(randomCode);\n    typeCheck(splitArray);\n    createSpanStructure(splitArray);\n    countDown();\n  });`]

  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

// splits random code into array of characters

function codeArray(code) {
  let codeArray = code.split('');
  return codeArray;
}


// creates html span structure

function createSpanStructure(splitArray) {
  splitArray.forEach(function (character){
    if (character == '\n') {
      $('<span class="before"></span>').appendTo('pre');
      $('span:last-of-type').html('<br>');
    } else {
      $('<span class="before"></span>').appendTo('pre');
      $('span:last-of-type').html(character);
    }
  $('pre span:first-of-type').addClass('active');
  });
}

// checks user input

function typeCheck(splitArray) {
  let i = 0;
  let error = 0;
// backspace function
  $(document).keydown(function(event) {
      if (event.which === 8 && i > 0) {
      $('.before').eq(i).removeClass('active');
      $('.before').eq(i).removeClass('correct');
      i--;
      $('.before').eq(i).addClass('active');
      $('.before').eq(i).removeClass('incorrect');
    }
  });

//checking for all regular characters
  $(document).keypress(function(event) {
    let typed = String.fromCharCode(event.which);
    totalCorrect(error);
//prevents space from scrolling
    if (event.which == 32){
      event.preventDefault();
    }
    if (typed == splitArray[i]) {
      $('.before').eq(i).removeClass('incorrect');
      $('.before').eq(i).removeClass('active');
      $('.before').eq(i).addClass('correct');
      i += 1;
      $('.before').eq(i).addClass('active');
      if (splitArray[i] === '\n') {
        $('.before').eq(i).addClass('return');
      }
    }
    else if (event.which === 13 && splitArray[i] === '\n' ) {
      $('.before').eq(i).removeClass('incorrect');
      $('.before').eq(i).removeClass('active');
      $('.before').eq(i).removeClass('return');
      $('.before').eq(i).addClass('correct');
      i += 1;

// when hitting return, auto indent next line
      while (splitArray[i] === ' ')
      i++;
      $('.before').eq(i).addClass('active');

    } else {
      $('.before').eq(i).addClass('incorrect');
      $('.before').eq(i).removeClass('active');
      i++;
      $('.before').eq(i).addClass('active');

// counts character errors;
      error++;
      $('.errors').text('Errors: ' + error);
    }
  });
}

// Calculates accuracy of input
function totalCorrect(error) {
  $(document).keydown(function(event) {
    let correct = $('.correct').length;
    let accuracy = Math.round(correct * 10000/(correct+error) / 100);
    if (isNaN(accuracy)) {
      $('.accuracy').text('Accuracy: 100%');
    } else {
      $('.accuracy').text("Accuracy: " + accuracy + "%");
    }
  });
}

function countDown() {
  let count = 0;
  $(document).one('keypress',function(event) {
    var seconds = 60, timer = setInterval(function() {
    $(".clock").html(seconds-- + " seconds");
    count++;
    charPerMin(count);
    if(seconds === -1) {
      clearInterval(timer);
      $('.accreport').text($('.accuracy').text());
      $('#myModal').modal('show');
      }
    }, 1000);
  });
}

// characters per minute

function charPerMin(count) {
  let charTyped = $('.correct').length;
  let speed = Math.round(charTyped / count * 60);
  $('.speed').text("Characters Per Minute: " + speed);
  $('.speedreport').text($('.speed').text());
}

// Modal reloads page
$(document).ready(function () {
  $('.restart').click(function () {
    location.reload();
  });
});


// buttons chooses language
$(document).ready(function () {
  $('.jsinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    codeArray(randomCode);
    typeCheck(splitArray);
    createSpanStructure(splitArray);
    countDown();
  });
  $('.cssinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    codeArray(csCode);
    typeCheck(cssArray);
    createSpanStructure(cssArray);
    countDown();
  });
  $('.htmlinit').click(function () {
    $( ".language" ).toggleClass( "hide" )
    $( ".console" ).toggleClass( "hide" )
    codeArray(htmlCode);
    typeCheck(htmlArray);
    createSpanStructure(htmlArray);
    countDown();
  });
});

var csCode = findCSSCode();
var randomCode = findJsCode();
var htmlCode = findHTMLCode();
const cssArray = codeArray(csCode);
const splitArray = codeArray(randomCode);
const htmlArray = codeArray(htmlCode);
