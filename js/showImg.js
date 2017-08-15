//window.onload =(function(){
//    alert("点击图片展示")
//});

//通过button切换图片

//获取按钮节点

var getBtn=getId("btnChange");
var getImg=getId("pic");
var clickCount=1;
getBtn.addEventListener("click",function(){
    if(clickCount==1){
        getImg.setAttribute("src","img/ver.png");
        clickCount=2;
    }
    else
    {
        getImg.setAttribute("src","img/hor.png");
        clickCount=1;
    }
},false)
var getoutLine=getId("outline");//获取divid



function picBig(){
    //单机图片实现最大化

    var getImg_W=getImg.width;//图片原始宽度
    var getImg_H=getImg.height;//图片原始宽高度
    var getDiv_W=getoutLine.offsetWidth-1;//div宽度
    var getDiv_H=getoutLine.offsetHeight-1;//div高度
    var ratio_W =getDiv_W/getImg_W;//宽度比例
    var ratio_H =getDiv_H/getImg_H;//高度比例
    console.log("原始图片宽高："+getImg_W+"*"+getImg_H);
    console.log("外围边框宽高："+getDiv_W+"*"+getDiv_H);
    console.log("宽度比例："+ratio_W);
    console.log("高度比例："+ratio_H);


    if(getImg_W>getImg_H){
        getImg_W=getImg_W*ratio_W+"px";
        getImg_H=getImg_H*ratio_W+"px";
        console.log("宽比高大");
        console.log(getImg_W);
        console.log(getImg_H);
        getImg.setAttribute("width",getImg_W);
        getImg.setAttribute("height",getImg_H);
    }
    else
    {
        getImg_H=getImg_H*ratio_W+"px";
        getImg_W=getImg_W*ratio_H+"px";
        console.log("高比宽大");
        console.log(getImg_W);
        console.log(getImg_H);
        getImg.setAttribute("height",getImg_H);
        getImg.setAttribute("width",getImg_W);
    }
}

getoutLine.addEventListener("click",function(){

    picBig();


},false)//绑定单击事件



//获取DOM节点
function getId (obj) {
    return document.getElementById(obj)?document.getElementById(obj):null;
}
//获取样式表样式
function getStyle(obj,attr) {
    if(document.all){
        //IE8以下兼容
        return parseInt(obj.currentStyle[attr]);
    }
    else
    {
        //非火狐浏览器
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
    
}