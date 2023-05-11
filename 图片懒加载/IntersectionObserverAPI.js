// 通过 IntersectionObserver API 实现懒加载
function lazyLoad() {
    let options = {
        root: null, // root 为目标元素的父元素，null 表示浏览器视窗
        rootMargin: '0px', // root 元素的外边距，该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围
        threshold: 0, // target 元素和 root 元素相交程度 0 - 1。1 表示 target 元素全在 root 元素中
    }
    const ob = new IntersectionObserver((entries) => {
        // Each entry describes an intersection change for one observed target element:
        // entry.boundingClientRect
        // entry.intersectionRatio
        // entry.intersectionRect
        // entry.isIntersecting
        // entry.rootBounds
        // entry.target
        // entry.time
        for(const entry of entries){
            if(entry.isIntersecting){ // 该属性判断 target 和 root 是否达到了 threshold 的交叉
                const img = entry.target; // 获取 img
                // 修改 src 属性。dataset 表示标签所有自定义属性的对象，在某 h5 标签中设置 data-xxx 属性，就可以通过 dataset.xxx 获取该属性值。注意：自定义属性名称必须是 data-名称 的形式。
                img.src = img.dataset.src;
                // img.src = img.getAttribute('data-src');
                ob.unobserve(img); // 加载完成后，就不需要再 observe 了，可以取消
            }
        }
    }, options);

    // 给每个 img 添加 observe
    let imgs = document.querySelectorAll('img[data-src]');
    imgs.forEach(item => {
        ob.observe(item);
    })
}

window.addEventListener('load', lazyLoad);