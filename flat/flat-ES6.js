// ES 6 中使用 some 判断是否已经扁平化完成
function flat(arr){
    let res = arr;
    // 只要数组里有嵌套数组，就用 concat 不断合并
    while(res.some(item => Array.isArray(item))){
        res = [].concat(...res);
    }
    return res;
}

// Test
const arr = [1, 2, [3, [4, 5], 6], 7];
console.log(flat(arr)); // [1, 2, 3, 4, 5, 6, 7]