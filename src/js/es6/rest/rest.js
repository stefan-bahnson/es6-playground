/**
 * Rest and spread operator
 */


/*
    rest
 */
function showFriends( first, second, ...rest) {
    return [first, second, rest];
}

const friends = [
    {name: 'Steve'},
    {name: 'John'},
    {name: 'Jose'},
    {name: 'Anna'},
    {name: 'Christine'}
];


/*
    spread
 */
console.log(
    showFriends(...friends)
);


