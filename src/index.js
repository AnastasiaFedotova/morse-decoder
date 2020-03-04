const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};




function decode(expr) {
    let morseSymbol = new Map([['00', ''], ['10', '.'], ['11', '-'], ['**********', ' ']]),
        result = '',       
        letterMorse = '',
        stringMorse = [],
        letterLength = 10;

    for(let i = 0; i <= expr.length; i++) {
        if(i % letterLength == 0 && i != 0) {
            stringMorse.push(letterMorse);
            letterMorse = expr[i];
            continue;
        } 
        letterMorse += expr[i]
    }

    stringMorse.forEach(elem => {
        let letter = ''
        if(elem == '**********') result += ' ';
        else {
            for(i = 0; i < elem.length; i += 2) {
                letter += morseSymbol.get(elem.substring(i, i + 2));
            }
            result += MORSE_TABLE[letter];
        }
    })

    return result;
}


module.exports = {
    decode
}