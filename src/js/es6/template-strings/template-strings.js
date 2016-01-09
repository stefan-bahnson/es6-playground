/**
 * Template Strings
 */
const arg = 'concatinated string';
const strTmpl = 'templated string';
const arr = [1, 2, 3];

function lineType(num = 1) {
    switch(num) {
        case 1:
            return 'single line';
        case 2:
            return 'multi-line';
        default:
            return 'invalid number specified'
    }
}

// concatinated string
console.log('This is a ' + arg + ' and only supports ' + lineType() + ' statements and arrays ' + arr + '\n');

// temlpated string
console.log(`This is a ${ strTmpl } and supports
${ lineType(2) } statements and arrays ${ arr }`);

