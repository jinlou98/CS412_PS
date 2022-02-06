// main function that accepts a string and a decorator function
const func3 = (str, fun) => fun(str)

/* First expression and function */
const str1 = "supercalifragilisticexpialidocious"
const breakC = str => str.split(/(?=c)/g)

/* Second expression and function*/
const str2 = "supercalifragilisticexpialidocious"

const replaceA = str => {
    let count = (str.match(/a/g)||[]).length;
    let newStr = str.replace(/a/g,'A')
    return {
        originalString:str,
        modifiedString:newStr,
        numberReplaced:count,
        length:newStr.length,
    }
}

// test
console.log(func3(str1,breakC))
console.table(func3(str2,replaceA))
