// 原型链继承
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}

function Child(name){
    // 关键代码 1
    Parent.call(this);
    this.name = name;
}


function enhance(Parent, Child){
    let instance = Object.create(Parent.prototype); // 创建副本
    // 增强
    instance.constructor = Child;
    Child.prototype = instance;
}
// 关键代码 2
enhance(Parent, Child);

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
 * 2、Parent 的构造函数只在 new Child 中调用一次
 */