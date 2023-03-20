// 手写 deepClone 思路：递归克隆
function deepClone(obj){
    if(typeof obj !== 'object') return;
    // 判断数组还是对象
    let newObj = (obj instanceof Array) ? [] : {};
    for(const key in obj){
      if(typeof obj[key] !== 'object'){
        newObj[key] = obj[key];
      }else{ // 如果是引用类型数据，继续深度克隆
        newObj[key] = deepClone(obj[key]);
      }
    }
    return newObj;
  }
  
  // Test
  const deepObj = {
    teacher: 'ma',
    students: [{
      name: 'dou',
      age: 24 
    }, {
      name: 'chen',
      age: 25
    }]
  }
  
  const newObj = deepClone(deepObj);
  deepObj.students[0].name = 'jack';
  console.log(deepObj); // {teacher: 'ma', students: [{name: 'jack', age: 24}, {name: 'chen', age: 25}]}
  console.log(newObj); // {teacher: 'ma', students: [{name: 'dou', age: 24}, {name: 'chen', age: 25}]}
  
  
  const deepArr = [0, 1, 2, [3, 4, [5, 6]], 7];
  const newArr = deepClone(deepArr);
  deepArr[3][2][0] = 100;
  console.log(deepArr); // [0, 1, 2, [3, 4, [100, 6]], 7];
  console.log(newArr);  // [0, 1, 2, [3, 4, [5, 6]], 7];