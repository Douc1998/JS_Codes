// 闭包应用：计数器
function Counter(){
    let count = 0;
    return {
      print: function(){
        console.log('当前值为：', count);
      },
      increment: function(){
        count += 1;
      },
      decrement: function(){
        count -= 1;
      },
      clear: function(){
        count = 0;
      }
    }
  }
  
  let myCounter = Counter();
  
  myCounter.increment();
  myCounter.increment();
  myCounter.print(); // 当前值为： 2
  myCounter.decrement();
  myCounter.print(); // 当前值为： 1
  myCounter.clear();
  myCounter.print(); // 当前值为： 0