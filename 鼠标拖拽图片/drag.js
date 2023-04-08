(function (){
    const pic = document.querySelector('.pic');
    // 计算点击时鼠标在 pic 中相对于 pic 左上角偏移量
    let offsetX = 0, offsetY = 0;
    let mouseDown = false;
    pic.addEventListener('mousedown', function(e){
        mouseDown = true;
        offsetX = e.clientX - pic.offsetLeft;
        offsetY = e.clientY - pic.offsetTop;
    });
    // 这里给 pic 还是 document 添加 move 和 up 都可以，因为图片是跟着移动的，所以鼠标一定是在 pic 里面的
    pic.addEventListener('mousemove', function(e){
        if(mouseDown){
            // 图片左上角移动的距离就是 当前鼠标位置 - 点击时鼠标相对于 pic 左上角的偏移量 
            let moveX = e.clientX - offsetX;
            let moveY = e.clientY - offsetY;
            pic.style.left = moveX + 'px';
            pic.style.top = moveY + 'px';
        }
    });
    pic.addEventListener('mouseup', function(e){
        mouseDown = false;
    })
})()