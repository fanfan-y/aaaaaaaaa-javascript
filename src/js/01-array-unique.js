// 数组去重

// https://segmentfault.com/a/1190000016418021

// 准备数组 length: 19
const arr = [1, 1,'true', 'true', false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

// ES6语法

/**
 * 方法一: Set
 * 输出：[1, "true", false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
 * length: 11
 * 结果： {}没有去重
 */

function unique (arr) {
    if (!Array.isArray(arr)) return

    // return Array.from(new Set(arr))
    return [...new Set(arr)]
}


//  ES5语法 + 额外空间复杂度

/**
 * 方法二: splice方法
 * 输出：[1, "true", false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}]     
 * length: 12
 * 结果： NaN和{}没有去重
 */

function unique2 (arr) {
    if (!Array.isArray(arr)) return

   for(let i =0; i< arr.length; i++) {
       for(let j = i + 1; j <arr.length; j ++) {
           if (arr[i] === arr[j]) {
               arr.splice(j, 1)
               j--
           }

       }
   }
   return arr
}


/**
 * 方法三: indexOf 方法
 * 输出：[1, "true", false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}] 
 * length: 12
 * 结果: NaN和{}没有去重
 */

 function unique3 (arr) {
    if (!Array.isArray(arr)) return

    let res = []
    for (let i =0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
 }


 /**
 * 方法四: includes方法
 * 输出：[1, "true", false, undefined, null, NaN, "NaN", 0, "a", {}, {}]    
 * length: 11
 * 结果：{}没有去重
 */

  function unique4 (arr) {
    if (!Array.isArray(arr)) return
    let res = []
    for (let i =0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
 }


/**
 * 方法六:  reduce + includes
 * 输出：[1, "true", false, undefined, null, NaN, "NaN", 0, "a", {}]
 * length: 11
 * 结果：不能去掉 {}
*/

function unique6 (arr) {
    if (!Array.isArray(arr)) return
    // 第一个出现的索引值等于当前值
    return arr.reduce((result, cur) => result.includes(cur)  ? result : [...result, cur], [])
    }


/**
 * 方法七: filter + indexOf
 * 输出：[1, "true", false, undefined, null, NaN, "NaN", 0, "a", {}, {}] 
 * length: 10
 * 结果： 不能去掉 {}, NaN直接干掉了
 */

 function unique7 (arr) {
    if (!Array.isArray(arr)) return
    // 第一个出现的索引值等于当前值
    return arr.filter((item, index, arr) => arr.indexOf(item) === index)
 }


 /**
 * 方法五: filter + hasOwnProperty方法
 * 输出：[1, "true", false, undefined, null, NaN, "NaN", 0, "a", {}] 
 * length: 10
 * 结果: 正确
 */

  function unique5 (arr) {
    if (!Array.isArray(arr)) return

    const obj = {}

    return arr.filter((item, index, arr) => obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true))
 }

 // 结论：很多方法不能去掉null和{}， 因为 null 和{} 是object，在内存中属于引用类型，在堆里存放


console.log(unique7(arr))