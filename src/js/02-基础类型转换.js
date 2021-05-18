
//  参考 00-基础类型


// https://zhuanlan.zhihu.com/p/85731460
// https://github.com/amandakelake/blog/issues/34


// 1.转换为Number

// 方法一: 显式类型转换 Number,  对其他六种类型转换， 不会报错

console.log(Number('123')) // 123
console.log(Number('e') )// NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined))  // NaN
console.log(Number(Symbol)) // NaN
console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number([1, 2])) // NaN


console.log('---------分割-------')

// 方法二: +

console.log( + '123') // 123
console.log( + ('e'))  // NaN
console.log(+ (true)) // 1
console.log(+ (false)) // 0
console.log(+ (null))  // 0
console.log(+ (undefined)) // NaN
console.log(+ (Symbol))  // NaN
console.log(+ ({}))  // NaN
console.log(+ ([]))  // 0
console.log(+ ([1, 2]))  // NaN


console.log('---------分割-------')


// 2.转换为Boolean

// 方法一: 显式类型转换 Boolean,  对其他六种类型转换， 不会报错
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false

console.log(Boolean('123')) // true
console.log(Boolean('e') )// true

console.log(Boolean(null)) // false
console.log(Boolean(undefined))  // false

console.log(Boolean(Symbol)) // true
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1, 2])) // true


// 方法二： 模版字符串










// 1.伪数组转为数组

// 方法一： Array.from()

function transToArray1() {
    console.log(Array.from(arguments)) 
}

// 方法二：扩展运算符

function transToArray2() {
    console.log([...arguments]) 
}


// 方法三：Array.prototype.slice.call()

function transToArray3() {
    console.log(Array.prototype.slice.call(arguments))
}

// 方式四 
function transToArray4() {
    console.log(Array.prototype.concat.apply([], arguments))
}

transToArray4(1, 2)
