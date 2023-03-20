// 原型链继承
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}

function Child(name){
    // 盗用构造函数，如果有需要也可以添加其他参数来设置 parent 中的实例属性
    Parent.call(this);
    this.name = name;
}

Child.prototype.getName = function(){
    return this.name;
}


// -------- Test ---------

const child1 = new Child('dou');
const child2 = new Child('chen');

// 使用原型方法
console.log(child1.getName()); // dou
console.log(child1.getAge()); // TypeError: child1.getAge is not a function
console.log(child2.getName()); // chen
console.log(child2.getAge()); // TypeError: child1.getAge is not a function

// 修改基础类型数据：实际上 parent 的所有实例属性也都会变成 child 的实例属性
child1.age = 55;
console.log(child1.age); // 55
console.log(child2.age); // 50
console.log(child1); // Child { age: 55, friends: [ 'jack', 'tom' ], name: 'dou' }
console.log(child2); // Child { age: 50, friends: [ 'jack', 'tom' ], name: 'chen' }


// 修改引用类型数据
child1.friends.push('lucy')
console.log(child1.friends); // [ 'jack', 'tom', 'lucy' ]
console.log(child2.friends); // [ 'jack', 'tom' ]

/**总结：
 * 1、Parent 所有实例属性也会变为 Child 的实例属性，所以引用数据不会共享
 * 2、但是 child 实例的原型仍为 Child.prototype，没办法使用 Parent.prototype 的方法
 */