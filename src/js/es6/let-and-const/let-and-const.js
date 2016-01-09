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


function blockScoping() {

    var a = 1;
    let b = 2;

    if (a == 1) {

        let b = a + 2;
        let c = b + 1;
        console.log(`inside if() let b=${b} and let c=${c}`);
    }

    console.log(`var a=${a} declared outside if()`);
    console.log(`let b=${b} declared inside if()`);
    console.log(`let c=${c} declared inside if()`); // undefined because let is block scoped. change to var and see what happens.

}

blockScoping();
