// Take a string, split it into characters, sort it in alphabetic order, reverse it,
// combine it as a string, ignore numbers and punctuations(only keep letters)

const revAlphaString = str => str.split('').sort().reverse().join('').replace(/[^a-zA-Z]/g, "")

console.log(`Reverse alphabetically string of supercalifr++ag??ili999sticexpialidocious is: ${revAlphaString("supercalifr++ag??ilisticexpialidocious")}`);
console.log(`Reverse alphabetically string of exi1oi is: ${revAlphaString("exioi")}`);