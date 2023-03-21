// 手写 filter：使用 reduce 方法实现（循环）
Array.prototype.myFilter = function(fn){
    const arr = this; // this 就是我们的数组
    let res =  arr.reduce((prev, cur, index) => {
        return fn.call(null, cur, index, arr) ? [...prev, cur] : [...prev]
    }, [])
    return res;
}

// Test
const arr = [1, 2, 3, 4];
let newArr = arr.myFilter((item, index, arr) => item < 3);
console.log(newArr); // [1, 2]