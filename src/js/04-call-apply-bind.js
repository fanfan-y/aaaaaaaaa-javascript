
// call apply bind 作用: 改变函数体内this的指向


// bind返回一个绑定函数，后面是正常的参数
// call apply返回函数执行结果，区别在于参数的形式。 apply: 第二个参数是一个数组; call: 第二及其以后的参数是数组中的部分

// https://segmentfault.com/a/1190000016705780

const obj = {
    name: '123'
};

function test() {
    console.log(this);
}
test() // window对象, undefined

const newTest = test.bind(obj)
newTest() // obj对象, 123

test.call(this) // test对象
// test.apply(this, [1, 2]) // test对象

