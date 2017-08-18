function findRandomCode () {
  const codeList = ['function typing(e) {\n  typed=String.fromCharCode(e.which);\n  for(var i = 0; i &lt; spans.length; i++) {', 'public partial class CSharpCodeParser : TokenizerBackedParser<CSharpTokenizer, CSharpSymbol, CSharpSymbolType>\n{']
  let randomNumber = Math.floor(Math.random() * codeList.length);
  $('textarea').html(codeList[randomNumber]);
  return codeList[randomNumber];
}

function createSpanStructure() {
  	  let code = findRandomCode();
      let codeArray = code.split('');
      codeArray.forEach(function (character){ $('<span></span>').appendTo('textarea');
      $('span:last-of-type').html(character);
      });
  	}
