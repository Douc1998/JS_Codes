// 获取所有的 img 标签，即所有图片
let imgs = document.querySelectorAll('img');

// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    let self = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
      timer = null;
    }, delay)
  }
}

// 图片懒加载
function lazyLoad() {
  const innerHeight = window.innerHeight || document.documentElement.clientHeight;
  let index = 0; // 记录加载到哪个图片
  return function () {
    for (let i = index; i < imgs.length; i++) {
      // 如果没加载过，进行加载
      const rect = imgs[i].getBoundingClientRect();
      if (rect.top - innerHeight <= 0) { // 说明进入视口
        imgs[i].src = imgs[i].getAttribute('data-src');
        // 记录加载
        index++;
        // 如果都加载完毕，需要删除监听器
        if (index === imgs.length) {
          // console.log('delete!')
          window.removeEventListener('scroll', debounce(lazyer, 300))
        }
      }
    }
  }
}

// 获取返回函数
const lazyer = lazyLoad();

// window 初始加载需要加载一次图片
window.onload = lazyer;
// 增加监听器，利用 debounce 防抖
window.addEventListener('scroll', debounce(lazyer, 300));