/**
 *  Arrow => functions
 */


/*
    classic function call
*/
function square(x) {
    return x * x;
}

console.log( square(5) );


/*
    Same thing with arrow functions
*/
const sq = (x) => x * x;

console.log( sq(5) );


/*
    iteration and arrow functions
*/
const arr = [1, 2, 3, 4, 5];

/*
    Single statement
*/
console.log(`\nsingle statement`);
arr.map( num => console.log(num) );

/*
    multiple statements wrap in {}
*/
console.log(`\nmultiple statements`);
arr.map( num =>
    {
        let newNum = num * 2;
        console.log(newNum);
    }
);

/*
    multiple statements and args
*/
console.log(`\nmultiple statements and args`);
arr.map( (num, i) =>
    {
        let newNum = num * i;
        console.log(newNum);
    }
);

const friends = [
    { name: 'Ben'},
    { name: 'Mary'}
];

const [p1, p2] = friends;

const found = friends.find( f => f.name == 'Mary');
console.log(found);

const filtered = friends.filter( f => f.name == 'Mary');
console.log(filtered);