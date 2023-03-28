// 深度遍历嵌套对象：对象扁平化
function flattenObj(obj){
    let res = {}; // 存放结果
    for(let key in obj){ // 如果是数组或者object，则进行深度遍历
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flatten(obj[key], key, res)
        }else{ // 如果是基础类型，直接存入
            res[key] = obj[key];
        }
    }
    return res;
}

// 对象扁平化，参数都插入到 res 中
function flatten(obj, keyName, res){
    for(let key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flatten(obj[key], `${keyName}.${key}`, res);
        }else{
            res[`${keyName}.${key}`] = obj[key];
        }
    }
}


// Test
let myObj = {
    name: 'China',
    city: [{
        name: 'beijing',
        district: [{name: 'chaoyang'}, {name: 'haidian'}, {name: 'daxing'}]
    },{
        name: 'shanghai',
        district: [{name: 'huangpu'}, {name: 'minhang'}, {name: 'xuhui'}, {name: 'jingan'}, {name: 'yangpu'}]
    },{
        name: 'shenzhen',
        district: [{name: 'futian'}, {name: 'nanshan'}, {name: 'baoshan'}, {name: 'longhua'}]
    },{
        name: 'guangzhou',
        district: [{name: 'tianhe'}, {name: 'baiyun'}]
    }
    ],
    chairman: {
        name: 'xi',
        age: 60
    }
}


console.log(flattenObj(myObj))

/**
{ name: 'China',
  'city.0.name': 'beijing',
  'city.0.district.0.name': 'chaoyang',
  'city.0.district.1.name': 'haidian',
  'city.0.district.2.name': 'daxing',
  'city.1.name': 'shanghai',
  'city.1.district.0.name': 'huangpu',
  'city.1.district.1.name': 'minhang',
  'city.1.district.2.name': 'xuhui',
  'city.1.district.3.name': 'jingan',
  'city.1.district.4.name': 'yangpu',
  'city.2.name': 'shenzhen',
  'city.2.district.0.name': 'futian',
  'city.2.district.1.name': 'nanshan',
  'city.2.district.2.name': 'baoshan',
  'city.2.district.3.name': 'longhua',
  'city.3.name': 'guangzhou',
  'city.3.district.0.name': 'tianhe',
  'city.3.district.1.name': 'baiyun',
  'chairman.name': 'xi',
  'chairman.age': 60 }
   */