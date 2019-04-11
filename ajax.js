//原生JS写的AJAX.
myButton.addEventListener('click',function(e){
let request = new XMLHttpRequest()
request.onreadystatechange=function(){
    if(request.readyState === 4){
        //请求响应完毕
        if(request.status>=200 && request.status<300){
            //如果请求成功了。
            let string = request.responseText
            //把得到的一串JSON响应字符串
            let object = window.JSON.parse(string)
            //转换成JS对应的值。
        }else if(request.status>=400){
            //说明请求失败。
        }
        
    }
}
})
 