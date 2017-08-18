var x = $('textarea').html();
console.log(x);

var y = ('function typing(e) {\n  typed=String.fromCharCode(e.which);\n  for(var i = 0; i &lt; spans.length; i++) {');
console.log(y);

console.log(y === x);
