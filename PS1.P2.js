// take a string and evaluate the two digits with the given operations returned from helper function
const evaluate = expressions => {
    const input = expressions.split('')
    return operations[input[1]]
}

// helper function that takes the operator in string and return a function
const operations = {
    '+': str => (Number(str.charAt(0)) + Number(str.charAt(2))),
    '-': str => (str.charAt(0) - str.charAt(2)),
    '*': str => (str.charAt(0) * str.charAt(2)),
    '/': str => (str.charAt(0) / str.charAt(2)),
    '^': str => (str.charAt(0) ** str.charAt(2)),
}

// test with all five operators
const exp1 = '8+3';
const exp2 = '8-3';
const exp3 = '8*3';
const exp4 = '8/3';
const exp5 = '8^3';

let operator = evaluate(exp1);
console.log(`${exp1} = ${operator(exp1)}`)
operator = evaluate(exp2);
console.log(`${exp2} = ${operator(exp2)}`)
operator = evaluate(exp3);
console.log(`${exp3} = ${operator(exp3)}`)
operator = evaluate(exp4);
console.log(`${exp4} = ${operator(exp4)}`)
operator = evaluate(exp5);
console.log(`${exp5} = ${operator(exp5)}`)