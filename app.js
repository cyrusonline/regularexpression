let reSlash = /^matchthis$/i
let reConstructor = new RegExp("^matchthis$","i")
let pattern = "^matchthis$"
let flags = "i"
reConstructor = new RegExp(pattern,flags)
// console.log(reConstructor.test("MATCHTHIS"))

let theSpecialChars = "[({})]\\^$.!?*+"
let reMatchTheSpecialChars = /\[\(\{\}\)\]\\\^\$\.\!\?\*\+/
console.log(reMatchTheSpecialChars.test(theSpecialChars))
let pattern2 = /a{6}/g
let text = 'aaaaaaa'
console.log(text.match(pattern2))
var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
console.log(found);
