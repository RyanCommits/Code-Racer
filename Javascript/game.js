// checks if user input matches character in codeArray
// function typeCheck(splitArray) {
//   let i = 0;
//   $(document).keydown(function(event) {
//     let typed = event.which;
//
// // checks for lowercase letters
//     if (String.fromCharCode(typed).toLowerCase() == splitArray[i]) {
//       $('.before').eq(i).addClass('correct');
//       i += 1;
//
// // checks for line breaks
//     } else if (typed === 13 && splitArray[i] === '\n' ) {
//       $('.before').eq(i).addClass('correct');
//       i += 1;
//
// // checks for UPPERCASE letters
//     } else if (event.shiftKey && String.fromCharCode(typed) === splitArray[i]) {
//       $('.before').eq(i).addClass('correct');
//       i += 1;
//
// // check for special characters
//     } else if (typed === 187 && splitArray[i] === '=' ) {
//       $('.before').eq(i).addClass('correct');
//       i += 1;
//     }
//
//   });
// }

// function createKeyCodeArray(splitArray) {
//   console.log(splitArray);
//   var keyCodeArray = splitArray.map(function (character) {
//     return character.replace(character, character.charCodeAt(character));
//   });
//   console.log(keyCodeArray);
// }
// createKeyCodeArray(splitArray);
