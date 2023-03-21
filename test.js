/**
 * 米哈游笔试；连通块
 * 一个 n x m 的矩阵中有 R G B 字母，每个格子里的值可能是三者之一。一个 + 号形状可以视为四连通。
 * 也就是一个格子上/下/左/右边的格子和它里面字母一样，认为是一个连通块。
 * 但是米小游是一个色盲，G 和 B 分不清，所以可以把含有 G 和 B 的格子都忽略掉，去寻找矩阵里 R 字母组成的连通块个数。
 * 返回的结果是：矩阵中正确的连通块个数 - 米小游看到的连通块个数。
 * 举例：
 * R R G G B B
 * R G B G R R
 * 正确的连通块个数是：6（RR\RR\GG\GG\BB\RR)
 * 米小游看到的连通块个数是： 3（RR\RR\RR)
 * 返回的答案是： 6 - 3 = 3
 */

function getNum(matrix, n, m) {
    // 记录每个位置的状态
    const state = Array(n).fill().map(_ => Array(m).fill({
        top: false,
        right: false,
        bottom: false,
        left: false
    }))
    // 记录连通块个数
    let num = 0;
    // 遍历二维矩阵
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            // 上，判断有没有算过
            if (r - 1 >= 0 && matrix[r][c] === matrix[r - 1][c] && !state[r - 1][c].bottom) {
                num++;
            }
            // 右，不需要判断有没有算过，但是要设置 right 值，防止右边的数再算一次
            if (c + 1 < m && matrix[r][c] === matrix[r][c + 1]) {
                num++;
                state[r][c].right = true;
            }
            // 下，不需要判断有没有算过，但是要设置 bottom 值，防止下边的数再算一次
            if (r + 1 < n && matrix[r][c] === matrix[r + 1][c]) {
                num++;
                state[r][c].bottom = true;
            }
            // 左，判断有没有算过
            if (c - 1 >= 0 && matrix[r][c] === matrix[r][c - 1] && !state[r][c - 1].right) {
                num++;
            }
        }
    }
    return num;
}

const matrix = [['R', 'G', 'G', 'G', 'B', 'B'],
['R', 'G', 'B', 'G', 'R', 'R']]

let rightMatrix = Array(matrix.length).fill().map(_ => Array(matrix[0].length));
let wrongMatrix = Array(matrix.length).fill().map(_ => Array(matrix[0].length));

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
        rightMatrix[i][j] = matrix[i][j];
        // 把 G B 设置为随机数，大概率是不相等的，也可以设置为其他不等的符号。
        wrongMatrix[i][j] = matrix[i][j] === 'R' ? matrix[i][j] : Math.random()
    }
}
let rightNum = getNum(rightMatrix, matrix.length, matrix[0].length);
let wrongNum = getNum(wrongMatrix, matrix.length, matrix[0].length);

console.log(`正确的连通块个数为：${rightNum}\n米小游看到的连通块个数为：${wrongNum}\n答案为：${rightNum - wrongNum}`);
