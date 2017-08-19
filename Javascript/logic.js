function findRandomCode () {
  const codeList = ['f\nunction typing(e) {\n  typed=String.fromCharCode(e.which);\n  for(var i = 0; i &lt; spans.length; i++) {', 'public partial class CSharpCodeParser : TokenizerBackedParser<CSharpTokenizer, CSharpSymbol, CSharpSymbolType>\n{','var runtil = /Until$/,\n    rparentsprev = /^(?:parents|prev(?:Until|All))/,\n    isSimple = /^.[^:#\[\.,]*$/,\n    POS = jQuery.expr.match.globalPOS,    // methods guaranteed to produce a unique set when starting from a unique set\n    guaranteedUnique = {\n        children: true,\n        contents: true,\n        next: true,\n       prev: true\n    };']
  let randomNumber = Math.floor(Math.random() * codeList.length);
  let randomCode = codeList[randomNumber];
  return randomCode;
}

var randomCode = findRandomCode();

function codeArray(randomCode) {
  let codeArray = randomCode.split('');
  return codeArray;
}

const splitArray = codeArray(randomCode);

function createSpanStructure(splitArray) {
  splitArray.forEach(function (character){
    if (character == '\n') {
      $('<span class="before return"></span>').appendTo('pre');
      $('span:last-of-type').html('<br>');
    } else {
      $('<span class="before"></span>').appendTo('pre');
      $('span:last-of-type').html(character);
    }
  });
}

function typeCheck(splitArray) {
  let i = 0;
  $(document).keypress(function(event) {
    let typed = String.fromCharCode(event.which);

    if (typed == splitArray[i]) {
      $('.before').eq(i).addClass('correct');
      i += 1;
    }
    else if (event.which === 13 && splitArray[i] === '\n' ) {
      $('.before').eq(i).addClass('correct');
      i += 1;
    }

  });
}
codeArray(randomCode);
typeCheck(splitArray);
createSpanStructure(splitArray);
