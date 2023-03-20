// 寄生式继承：使用 Object.create 创建一个原型对象的副本并进行增强
function Parent(){
    this.age = 50;
    this.friends = ['jack', 'tom'];
}

Parent.prototype.getAge = function(){
    return this.age;
}


// 增强
function enhance(origin){
    let instance = Object.create(origin);
    instance.sayHi = function(){
        return 'hi'
    }
    return instance;
}

// 利用 enhance 增强构造函数，每个 child 也是以 parent 实例为原型
let parent = new Parent();
const child1 = enhance(parent);
const child2 = enhance(parent);

// -------- Test ---------
// 使用原型方法
console.log(child1.getAge()); // 50
console.log(child1.sayHi()); // hi
console.log(child2.getAge()); // 50
console.log(child2.sayHi()); // hi

// 修改基础类型数据：实际上不会修改，只是在实例上添加一个同名属性
child1.age = 55;
console.log(child1.age); // 55
console.log(child2.age); // 50
console.log(child1); // Parent { sayHi: [Function (anonymous)], age: 55 }
console.log(child2); // Parent { sayHi: [Function (anonymous)] }


// 修改引用类型数据
child1.friends.push('lucy')
console.log(child1.friends); // [ 'jack', 'tom', 'lucy' ]
console.log(child2.friends); // [ 'jack', 'tom', 'lucy' ]

/**总结：
 * 1、虽然能够使用增强函数，但是函数难以复用。（不过我们也可以通过给 enhance 函数添加额外参数来设置一些和实力相关的属性，如 name
 * 2、引用数据问题。
 */