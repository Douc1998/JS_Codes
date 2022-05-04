// EventEmitter Wheel 事件订阅与发布
export const EventEmitter = new class EventEmitter{
    constructor(){
        // 记录订阅事件
        this.events = {}
    }

    static VERSION = '1.0.0'

    /**
     * 判读是不是function方法
     * @param {Function / Object} func 
     * @returns 
     */
    isFunction = (func) => {
        if (typeof func === 'function') {
            return true
        } else if (typeof func === 'object') {
            return this.isFunction(func.func)
        } else {
            return false
        }
    }

    /**
     * 添加事件
     * @param {String} eventName 事件名称
     * @param {Function} func 函数方法
     * @returns {Object} this
     */
    on = (eventName, func) => {
        try{
            if(!eventName || !func) throw new Error('Please ensure that the parameters are complete !');
            if(!this.isFunction(func)) throw new Error('The second parameter must be a function or an Object with func!');
            // 如果满足要求则加入，
            (this.events[eventName] || (this.events[eventName] = [])).push(
                typeof func === 'object' ? 
                func :
                {
                    func: func,
                    once: false
                });
        } catch(err){
            console.log(err)
        }
        return this;
    }

    /**
     * 添加只能触发一次的事件
     * @param {String} eventName 事件名称
     * @param {Function} func 函数方法
     * @returns {Object} this
     */
    once = (eventName, func) => {
        return this.on(eventName, {
            func: func,
            once: true
        })
    }

    /**
     * 删除事件
     * @param {String} eventName 事件名称
     * @param {Function} func 函数方法
     * @returns {Object} this
     */
    off = (eventName, func) => {
        if(!eventName || !this.events[eventName]) return this; // 如果没输入eventName或不存在，则return
        if(!func){  // 如果没有输入某个func，则删除该eventName对应的所有内容
            this.clear(eventName)
        }else{ // 删除指定数组下的指定方法
            const funcs = this.events[eventName];
            for(let i = 0; i < funcs.length; i++){
                if(funcs[i].func === func){
                    funcs.splice(i, 1)
                }
            }
            if(funcs.length === 0){ // 如果该事件对应的数组为空，则删除该事件，释放空间
                this.clear(eventName)
            }
        }
        return this;

    }

    /**
     * 删除某一个事件下所有内容或者清除所有事件
     * @param {String} eventName 
     */
    clear = (eventName) => {
        if(eventName && this.events[eventName]){  // 直接清除某个事件下所有内容
            Reflect.defineProperty(this.events, eventName)
        }else{ // 不输入 eventName 则清空所有事件
            this.events = {}
        }
    }

    /**
     * 触发事件
     * @param {String} eventName 事件名称
     * @param  {...any} args 形参
     * @returns {Object} this
     */
    emit = (eventName, ...args) => {
        try{
            const funcs = this.events[eventName];
            if(!funcs) throw new Error(eventName, 'is not existed');;
            funcs.forEach(element => {
                element.func.call(this, ...args);
                // 如果是 once，执行完之后要 off
                if (element.once) {
                    this.off(eventName, element.func)
                }
            });
        }catch(err){
            console.log(err);
        }
        return this;
    }
}()