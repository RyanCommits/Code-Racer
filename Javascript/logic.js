function findRandomCode () {
  const codeList = ['funct\nion typing(e) {\n  typed=String.fromCharCode(e.which);\n  for(var i = 0; i &lt; spans.length; i++) {', 'public partial class CSharpCodeParser : TokenizerBackedParser<CSharpTokenizer, CSharpSymbol, CSharpSymbolType>\n{']
  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

var randomCode = findRandomCode();

function codeArray(randomCode) {
  console.log(randomCode);
  let codeArray = randomCode.split('');
  return codeArray;
}

const splitArray = codeArray(randomCode);

function createSpanStructure(codeArray) {
  codeArray.forEach(function (character){ $('<span class="before"></span>').appendTo('p');
  $('span:last-of-type').html(character);
  });
}

// checks if user input matches character in codeArray //
function typeCheck(codeArray) {
  var i = 0;
  $(document).keydown(function(event) {
    var typed = event.which;
    if (String.fromCharCode(typed).toLowerCase() == codeArray[i]) {
      $('.before').eq(i).addClass('correct');
      i += 1;

// checks for line breaks
    } else if (typed === 13 && codeArray[i] === '\n' ) {
      $('.before').eq(i).addClass('correct');
      i += 1;
    }

  });
}
