// 使用 Set 方法
function unique(arr){
    return [...new Set(arr)];
}

// Test
const arr = [1, 2, 3, 3, 4, 4, 1, 5];
console.log(unique(arr)); // [1, 2, 3, 4, 5]