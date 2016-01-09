/**
 * Default arguments
 */


function now() {
    console.log('calculating now');
    return new Date();
}

function addMs(amount, start = now()) {
    return start.getTime() + amount;
}

console.log(addMs(20));

/*
    override default arg
 */
let timeLater = new Date();

console.log(
    `Overiding default arg
${addMs(20, timeLater)}`
);