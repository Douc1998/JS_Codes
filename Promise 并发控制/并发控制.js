// 字节青训营笔试题：控制并发数
class PromiseLimit{
    constructor(limit){
        this.limit = limit; // 最大并发数
        this.running = 0; // 当前正在执行的任务数量
        this.tasks = []; // 异步任务队列
    }

    // 向控制器中添加异步任务，并执行 run 方法来执行任务
    add(task){
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject
            })
            this.run();
        })
    }

    // 执行任务
    run(){
        // 如果没有达到并发控制，并且任务队列中有任务，就从队首取出并执行
        while(this.running < this.limit && this.tasks.length > 0){
            const {task, resolve, reject} = this.tasks.shift();
            this.running++;
            // 当一个任务执行完毕后，无论成功还是失败，都要给 running 减1，并递归调用 run 方法来执行下一个任务
            task().then(resolve, reject).finally(() => {
                this.running--;
                this.run();
            })
        }
    }
}


const limiter = new PromiseLimit(2);

// 生成 Promise 异步任务的方法
function addTask(time, name){
    limiter.add(() => new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        }, time)
    })).then(() => {
        console.log(`任务${name}完成！`);
    })
}

// 添加任务，查看输出结果
addTask(10000, 1);
addTask(5000, 2);
addTask(3000, 3);
addTask(8000, 4);
addTask(1000, 5);
// 任务2完成、任务3完成、任务1完成、任务5完成、任务4完成。