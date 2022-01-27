// 1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let mixedLetters = 'ddd@bbb@ccc';
let changeLetters = mixedLetters.replace(/@/g, '!');
console.log(changeLetters);
