// 问题一: new 的的底层原理

import { reduce } from "lodash"

// 1. 初始化新对象
// 2. 确定新对象的原型链
// 3. 绑定this指向新对象，传递参数
// 4.返回新对象

function Person(name, age) {
    this.name = name
    this.age = age
    
    this.walk = function() {
        console.log('-----walk----', this.name)
    }
}

Person.prototype.address = 'hubei'
Person.prototype.eat = function() {
    console.log('-----eat----', this.name)
}

const person = new Person("zhangsan", 19)
console.log(person.address)
console.log(person instanceof Person)

   console.log('-----------分割线-------');

// 新的改写函数
function newFn(name, age) {
    let obj = {}
    obj.__proto__ = Person.prototype
    Person.call(obj, name, age)
    return obj
}

const person2 = newFn('zhangsan', 19)
console.log(person2.address)
console.log(person2 instanceof Person)



// 问题2: new 构造函数发生了什么

// 1. 在堆中创建一个空对象 obj = {}
// 2. JS引擎赋予新对象私有属性、私有方法和原型对象，成为一个标准的ES对象
// 3. 构造函数内初始化，构造函数为其添加用户定义的属性和方法
// 4. 从构造函数出来，用户给它一个名字，就成了一个自定义对象