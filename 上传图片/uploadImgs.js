// 获取到 input 的 dom 节点
const input = document.querySelector('#myInput');
// 添加一个换行符，用于图片从下一行开始展示
input.parentNode.appendChild(document.createElement('br'));

// 上传图片
function upload(el) {
  // 获取上传的所有 file
  let files = el.target.files;
  // console.log(files)
  // 存储上传图片的 url
  const formData = new FormData();
  // 上传类型，必须是图片
  const types = ["image/jpg", "image/png", "image/jpeg"];
  for (let i = 0; i < files.length; i++) {
    // 添加判断数据是不是图片
    if (types.indexOf(files[i].type) < 0) {
      console.log(`${files[i].name}加载失败，文件格式只支持：jpg 和 png`);
      continue;
    }
    // 存储数据，之后利用 ajax 上传数据到后台
    formData.append(`img${i}`, files[i]);
    // 利用 fileReader 来解析 url 为 base64 编码
    let reader = new FileReader();
    reader.readAsDataURL(files[i]);
    reader.onload = function (e) {
      // 动态创建 img 
      let img = document.createElement('img');
      img.style.cssText = 'width: 100px; height: 100px; margin: 10px 10px; border: 2px solid black'
      img.src = e.target.result; // reader 的 target.result 就是 base64 编码结果
      // 把图片插入
      input.parentNode.appendChild(img);
    }
  }
  // 使用 ajax POST 方式上传数据
  ajax({
    url: "http://xxx.com/imgs",
    method: "POST",
    data: formData,
    overtime: 5000,
    success(res) {
      console.log("上传成功！", res);
    },
    fail(err) {
      console.log("上传失败！", err);
    },
    timeout() {
      console.warn("请求超时！");
    }
  });
}
// 注册监听器
input.addEventListener('change', upload);
