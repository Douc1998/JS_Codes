// 原型式继承：使用 Object.create 创建一个原型对象的副本
// 原型链继承
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}

let parent = new Parent();

// 利用 object.create 创建副本，每个 child 都以 parent 实例为原型
const child1 = Object.create(parent);
const child2 = Object.create(parent);

// -------- Test ---------
// 使用原型方法
console.log(child1.getAge()); // 50
console.log(child2.getAge()); // 50

// 修改基础类型数据：实际上不会修改，只是在实例上添加一个同名属性
child1.age = 55;
console.log(child1.age); // 55
console.log(child2.age); // 50
console.log(child1); // Parent { age: 55 }
console.log(child2); // Parent {}


// 修改引用类型数据
child1.friends.push('lucy')
console.log(child1.friends); // [ 'jack', 'tom', 'lucy' ]
console.log(child2.friends); // [ 'jack', 'tom', 'lucy' ]

/**总结：
 * 1、创建的都是副本，实例们的自身属性只能自己设置，不便于拓展
 * 2、引用数据问题。
 */