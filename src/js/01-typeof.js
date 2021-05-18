


console.log(typeof 1) // "number"
console.log(typeof NaN) // "number"
console.log(typeof 'NaN') // "string"

console.log(typeof false) // "boolean"

console.log(typeof undefined) // "undefined"

console.log(typeof null) // "object"

// 原因： 不同的对象在底层都表示为二进制，在JavaScript中二进制前三位为0的话都会被判断为object类型，null的二进制表示全是0，自然前三位也是0
// 所以 typeof null === “object”



console.log(typeof []) // "object"
console.log(typeof {}) // "object"

function a() {}
console.log(typeof a) // "function"



