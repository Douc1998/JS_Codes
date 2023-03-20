// 原型链继承
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}

function Child(name){
    Parent.call(this); // 有其他参数也可以在这里添加
    this.name = name;
}

// Child 原型指向 Parent 实例
Child.prototype = new Parent();

Child.prototype.getName = function(){
    return this.name
}

// -------- Test ---------

const child1 = new Child('dou');
const child2 = new Child('chen');

// 使用原型方法
console.log(child1.getName()); // dou
console.log(child1.getAge()); // 50
console.log(child2.getName()); // chen
console.log(child2.getAge()); // 50

// 修改基础类型数据：因为盗用了构造函数，所以实例本身也有 age 属性，直接修改
child1.age = 55;
console.log(child1.age); // 55
console.log(child2.age); // 50
console.log(child1); // Parent { age: 55, friends: [ 'jack', 'tom' ], name: 'dou' }
console.log(child2); // Parent { age: 50, friends: [ 'jack', 'tom' ], name: 'chen' }


// 修改引用类型数据
child1.friends.push('lucy');
console.log(child1.friends); // [ 'jack', 'tom', 'lucy' ]
console.log(child2.friends); // [ 'jack', 'tom' ]

/**总结：
 * 1、可以解决引用问题和使用 Parent 原型的方法
 * 2、但是，调用了调次 Parent 构造函数：分别在 Child.prototype 赋值为 Parent 实例时一次，还有 new Child 中一次
 */