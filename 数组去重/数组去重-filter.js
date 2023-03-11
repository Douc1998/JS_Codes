// 利用 filter 实现数组去重
function unique(arr){
    const res = arr.filter((item, index, array) => {
        return array.indexOf(item) === index;
    })
    return res;
}

// Test
const arr = [1, 2, 3, 3, 4, 4, 1, 5];
console.log(unique(arr));