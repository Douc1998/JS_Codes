// 闭包应用：保护私有变量
function Person(){
    let name = 'dou';
    let age = 24;
    this.getName = function(){
        return name;
    }
    this.getAge = function(){
        return age;
    }
  }
  
  // Test
  
  let person = new Person();
  // 保护私有变量，没有办法直接获取或者修改
  console.log(person.name); // undefined
  console.log(person.age); // undefined
  // 可以通过提供的接口访问
  console.log(person.getName()); // dou
  console.log(person.getAge())  // 24