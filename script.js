let letters = {

    'a' : '.',
    'A' : 'P',
    's' : 'K',
    'S' : 'i',
    'd' : 'l',
    'D' : '6',
    'f' : 'o',
    'F' : 'I',
    'g' : '@',
    'G' : '>',
    'w' : '<',
    'W' : 'g',
    'q' : '}',
    'Q' : ':',
    'l' : '=',
    'L' : 'V',
    'k' : '$',
    'K' : '"',
    'j' : '3',
    'J' : 'U',
    'h' : '2',
    'H' : 'n',
    'e' : 'C',
    'E' : '{',
    'r' : '(',
    'R' : ' ',
    't' : '^',
    'T' : '#',
    'y' : 'D',
    'Y' : 'B',
    'u' : 'Y',
    'U' : 'X',
    'i' : '/',
    'I' : 'O',
    'o' : 'p',
    'O' : '_',
    'p' : 'E',
    'P' : 'Z',
    'z' : 'T',
    'Z' : 'M',
    'x' : 'd',
    'X' : '5',
    'c' : '9',
    'C' : ';',
    'v' : '*',
    'V' : 'q',
    'b' : 'S',
    'B' : 'Q',
    'n' : '8',
    'N' : 'y',
    'm' : 'u',
    'M' : 'k',
    ' ' : '7',
    '0' : 'a',
    '1' : 'v',
    '2' : '1',
    '3' : ']',
    '4' : ',',
    '5' : '!',
    '6' : 'z',
    '7' : '-',
    '8' : 'F',
    '9' : '0',
    ',' : 'e',
    '.' : 'm',
    '$' : '4',
    '!' : 'f',
    '?' : 'A',
    '=' : '£',
    '£' : '[',
    '%' : 'G',
    '-' : ')',
    '+' : 'L',
    '&' : 'R',
    '^' : 'N',
    '@' : 'J',
    '<' : 'j',
    '>' : 'H',
    ';' : 'h',
    ':' : 'c',
    '[' : '~',
    ']' : '?',
    '#' : 'b',
    '(' : 'x',
    ')' : '+',
    '_' : '&',
    '*' : 'r',
    '/' : '`'
    
};




function copyFunction() {
    
    let resultArea = document.getElementById('result');

    resultArea.select();

    document.execCommand("copy");

    resultArea.value = '';
}

function scriptText() {


    let currentElement = document.getElementById('inputMessage');
    let currentResult = document.getElementById('result');
    let currentText = currentElement.value;
    currentElement.value = '';
    
    let decodeText = '';

    for (const item of currentText) {

        if(letters[item] != null ) {
            decodeText += letters[item];
        } else {
            decodeText += '¬';
        }

    }

    currentResult.value = decodeText;
   
    
}



function decipherText() {

    let decriptMessage = '';
    let currentElement = document.getElementById('inputMessage');
    let currentText = currentElement.value;
    let currentResult = document.getElementById('result');
    currentElement.value = '';
    

    for (const element of currentText) {
        
        let currentElement = Object.keys(letters).find(key => letters[key] === element);

        if(currentElement != '¬' && currentElement != undefined) {

            decriptMessage += currentElement;

        } else {

            decriptMessage += '?';
        }

    }

    currentResult.value = decriptMessage;

    
}