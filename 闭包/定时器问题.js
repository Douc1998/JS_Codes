// 解决 for + setTimeout 异步输出问题
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 0)
  } // 5 5 5 5 5
  
  for(let j = 0; j < 5; j++){
    // let 块级作用域解决
    setTimeout(function(){
        console.log(j);
    }, 0)
  } // 0 1 2 3 4
  
  for(var k = 0; k < 5; k++){
    // 闭包解决
    (function(num){
        setTimeout(function(){
            console.log(num)
        })
    })(k)
  } // 0 1 2 3 4