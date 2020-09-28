
function load(){
var script1 = document.createElement('script');
    script1.src='calc1.js';
    script1.type='text/javascript';
 
    var script2 = document.createElement('script');
    script2.src='calc2.js';
    script2.type='text/javascript';
    // 改变了dom内容，加载js文件
    document.getElementsByTagName('head')[0].appendChild(script1).appendChild(script2);
}
