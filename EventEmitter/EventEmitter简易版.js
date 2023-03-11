class EventEmitter{
    constructor(){
        this.events = {}
    }

    // 注册事件
    on = (name, fn) => {
        if(this.events[name]){ // 如果已经注册了name，fn加入数组
            this.events[name].push(fn);
        }else{
            this.events[name] = [fn]
        }
    }

    off = (name, fn) => {
        let fns = this.events[name];
        if(fns){ // 如果存在任务
            // 寻找 fn 所在位置
            let index = fns.findIndex(f => f === fn);
            if(index > -1){
                // 利用 splice 删除
                this.events[name].splice(index, 1);
            }
        }
    }

    // 触发事件
    emit = (name, ...args) => {
        let fns = this.events[name];
        if(fns){
            for(const fn of fns){
                fn(...args);
            }
        }
    }
}


// Test
let events = new EventEmitter()
let fn1 = function(name, age) {
	console.log(`${name} ${age}`)
}
let fn2 = function(name, age) {
	console.log(`hello, ${name} ${age}`)
}
events.on('introduction', fn1);
events.on('introduction', fn2);
events.emit('introduction', 'dou', 24);
/**
 * dou 24
 * hello, dou 24
 */
