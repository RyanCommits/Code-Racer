// Grabs random code from the code list

function findRandomCode () {
  const codeList = ['function createSpanStructure(splitArray) {\n  splitArray.forEach(function (character){\n    if (character == \'n\') {\n      $(\'<span class=\"before\"></span>\').appendTo(\'pre\');\n      $(\'span:last-of-type\').html(\'<br>\');\n    } else {\n      $(\'<span class="before"></span>\').appendTo(\'pre\');\n      $(\'span:last-of-type\').html(character);\n    }\n    $(\'span:first-of-type\').addClass(\'active\');']

  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

// splits random code into array of characters

var randomCode = findRandomCode();

function codeArray(randomCode) {
  let codeArray = randomCode.split('');
  return codeArray;
}

const splitArray = codeArray(randomCode);

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
    }
  });
}

// Calculates accuracy of input
function totalCorrect() {

  $(document).keydown(function(event) {
    let correct = $('.correct').length;
    let incorrect = $('.incorrect').length;
    let accuracy = Math.round(correct * 10000/(correct+incorrect) / 100);
    if (isNaN(accuracy)) {
      $('.accuracy').text('Accuracy: 100%');
    } else {
      $('.accuracy').text("Accuracy: " + accuracy + "%");
    }
  });
}

// 60 second countdown & report

function countDown() {
  $(document).one('keypress',function(event) {
    if ($(".clock").text() === '60 seconds') {
      var count = 5, timer = setInterval(function() {
      $(".clock").html(count-- + " seconds");
      if(count === -1) {
        clearInterval(timer);
        $('.accreport').text($('.accuracy').text());
        $('#myModal').modal('show');
        }
      }, 1000);
    }
  });
}

codeArray(randomCode);
typeCheck(splitArray);
createSpanStructure(splitArray);
totalCorrect();
countDown();
