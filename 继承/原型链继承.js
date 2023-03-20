// 原型链继承
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}

function Child(name){
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

// 修改基础类型数据：由于实例对象不能修改原型上的基本类型数据，因此如果修改，实际上是在实例对象上创建一个同名属性
child1.age = 55;
console.log(child1.age); // 55
console.log(child2.age); // 50
console.log(child1); // Parent { name: 'dou', age: 55 }
console.log(child2); // Parent { name: 'chen' }


// 修改引用类型数据
child1.friends.push('lucy');
console.log(child1.friends); // [ 'jack', 'tom', 'lucy' ]
console.log(child2.friends); // [ 'jack', 'tom', 'lucy' ]

/**总结：
 * 1、对于引用数据所有实例共享，会互相影响
 * 2、无法通过创建 child 实例来设置 parent 属性，大家都一样
 */