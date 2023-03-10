// 利用 reduce 实现 map
Array.prototype.myMap = function(fn) {
    const res = [];
    let arr = this; // this 就是待使用 map 方法的数组
    arr.reduce(function(prev, cur, index, arr){
        res.push(fn.call(null, cur, index, arr)); // 不需要使用 prev，cur 逐个加入 res 中即可
    }, []);
    return res;
}


// Test

const testArr = [1, 2, 3, 4];
let newArr = testArr.myMap(x => x**2);
console.log(newArr); // [1, 4, 9, 16]