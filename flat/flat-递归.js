// 手写数组扁平化
function flat(arr) {
    let res = [];
    for(const item of arr){
        if(Array.isArray(item)){
            res = res.concat(flat(item));
        }else{
            res.push(item);
        }
    }
    return res;
}


// Test
const arr = [1, 2, [3, [4, 5], 6], 7];
console.log(flat(arr)); // [1, 2, 3, 4, 5, 6, 7]
