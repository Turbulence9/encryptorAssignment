function encryptB(inputStr) {
  let outLeft = [];
  let outRight = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (i % 2 === 0) {
      outLeft.unshift(inputStr.charAt(i));
    } else {
      outRight.push(inputStr.charAt(i));
    }
  }
  let output = outRight.concat(outLeft);
  return output.join('');
}


function decrypt(inputStr) {
  let inArr = inputStr.split('');
  let output = '';
  for (let i = 0; i < inputStr.length; i++) {
    if (i % 2 === 0) {
      output += inArr.pop();
    } else {
      output += inArr.shift();
    }
  }
  return output;
}

let symbolKey = {
  a: '@',
  b: '#',
  c: '!',
  d: '$',
  e: '&',
  f: '^',
  g: '%',
  h: '(',
  i: ')',
  j: '*',
  k: '-',
  l: ',',
  m: '.',
  n: '/',
  o: '<',
  p: '?',
  q: '|',
  r: '}',
  s: '[',
  t: '>',
  u: '+',
  v: '{',
  w: '=',
  x: '_',
  y: '~',
  z: '`',
  ' ': ' '
}

let numKey = {
  '@': '12.',
  '#': '3.',
  '!': '7.',
  '$': '2.',
  '&': '5.',
  '^': '13.',
  '%': '25.',
  '(': '19.',
  ')': '10.',
  '*': '4.',
  '-': '17.',
  ',': '20.',
  '.': '487.',
  '/': '36.',
  '<': '21.',
  '?': '54.',
  '|': '120.',
  '}': '32.',
  '[': '90.',
  '>': '100.',
  '+': '87.',
  '{': '89.',
  '=': '91.',
  '_': '97.',
  '~': '37.',
  '`': '91.',
  ' ': ' .'
}

let letterKey = {
  '12': 'p',
  '3':  'l',
  '7': 'k',
  '2': 'a',
  '5': 'i',
  '13': 'w',
  '25': 't',
  '19': 's',
  '10': 'q',
  '4': 'b',
  '17': 'g',
  '20': 'c',
  '487': 'x',
  '36': 'd',
  '21': 'n',
  '54': 'f',
  '120': 'm',
  '32': 'z',
  '90': 'h',
  '100': 'y',
  '87': 'j',
  '89': 'o',
  '91': 'u',
  '97': 'v',
  '37': 'r',
  '91': 'e',
  ' ': ' '
}

function encryptA(str) {
  let symStr = "";
  let numStr = "";
  let letterStr = "";
  let array = [];
  let lower = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    symStr += symbolKey[str[i]];
  }
  for (let i = 0; i < symStr.length; i++) {
    numStr += numKey[symStr[i]]
    array = numStr.split('.');
  }
  for (let i = 0; i < array.length-1; i++) {
    letterStr += letterKey[array[i]]
  }
  return letterStr;
}

function encrypt (str) {
  return encryptB(encryptA(str))
}

module.exports = {decrypt, encrypt, encryptA, encryptB}
