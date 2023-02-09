/**
 * 手写 instanceof 方法：判断某个构造函数的原型是否存在某个实例对象的原型链中
 * 思路：遍历实例对象的原型链即可 （遍历链表）
 * @param {Object} obj 实例对象
 * @param {Function} fn 构造函数
 */

function instanceof_(obj, fn){
    const prototype = fn.prototype; // 获取构造函数的原型对象
    let p = Reflect.getPrototypeOf(obj); // 获取 obj 的原型对象
    while(p){
        if(p === prototype){
            return true;
        }
        p = Reflect.getPrototypeOf(p); // 获取 obj 原型链中的上一个原型对象
    }
    return false;
  }
  
  
  // test
  function Person (){
    this.name = 'dou';
    this.age = 24;
  }
  function Student (){
    this.gender = 'boy'
  }
  
  let p = new Person();
  
  console.log(p instanceof Person); // true
  console.log(instanceof_(p, Person)); // true
  
  console.log(p instanceof Student); // false
  console.log(instanceof_(p, Student)); // false