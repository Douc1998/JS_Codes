// 手写 filter：使用基本方法实现（循环）
Array.prototype.myFilter = function(fn){
    const arr = this; // this 就是我们的数组
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i, arr)){ // 加入三个参数：item、index、arr
            res.push(arr[i])
        }
    }
    return res;
}

// Test
const arr = [1, 2, 3, 4];
let newArr = arr.myFilter((item, index, arr) => item < 3);
console.log(newArr); // [1, 2]