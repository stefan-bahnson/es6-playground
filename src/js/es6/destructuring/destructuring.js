/**
 * Destructuring
 */


/*
    objects
 */
function repeatStr({ STRING, AMOUNT }) {
    return STRING.repeat(AMOUNT);
}

const STRING = 'repeat ';
const AMOUNT = 3;

console.log(
    repeatStr({ STRING, AMOUNT })
);


/*
    with array
 */
const arr = [
    'obj01',
    'obj02',
    'obj03',
    'obj04',
    'obj05'
];
let [o1, o2, o3, o4, o5] = arr;

console.log(o1, o2, o5);


/*
    array with complex obj
 */
const arr2 = [
    {name: 'Steve'},
    {name: 'John'},
    {name: 'José'},
    {name: 'Anna'},
    {name: 'Christine'}
];
let [p01, p02, p03, p04, p05] = arr2;

console.log(p01.name, p04.name);

