//获取id
window.onload=function(){

function $(id){return document.getElementById(id);}

//输入框点击
var oArea = $('textarea'); // 输入框
var oBtn_box = $('editor_hd'); // 按钮大盒子
var oBtn_send = $('send_link'); // 按钮-发布

oArea.onfocus = function(){
    oBtn_box.style.display = 'block';
}

//随机用户名 、 随机头像、时间
var userName = ['小泽','玛利亚','韩梅梅','李雷','王小四'];
var userImg = ['image/A61.jpg','image/A63.jpg','image/A71.jpg','image/A72.jpg','image/A73.jpg','image/A74.jpg'];
//suiji()
//补零
function toDb(n){return n<10?'0'+n:n;}
//获取日期函数
function getDate(){
    var oDate = new Date();
    //年月日
    var y = oDate.getFullYear();
    var m = oDate.getMonth() + 1;
    var d = oDate.getDate();
    //时分秒
    var h = oDate.getHours();
    var min = oDate.getMinutes();
    var s = oDate.getSeconds();
    return y + '.' + toDb(m) + '.' + toDb(d) + ' ' + toDb(h) + ':' + toDb(min) + ':' + toDb(s);
}
//alert(getDate())
var feed_friend=document.querySelector(".feed_friend")
var textarea=document.querySelector("#textarea")
console.log(textarea)
oBtn_send.onclick=function(){
    var newDiv=document.createElement("div");
        feed_friend.appendChild(newDiv);
            newDiv.className="feed";
    var newDiv1=document.createElement("div");
        newDiv.appendChild(newDiv1);
            newDiv1.className="f_aside clearfix";
    console.log(newDiv1);
    var newDiv2=document.createElement("div");
        newDiv1.appendChild(newDiv2);
            newDiv2.className="f_user_pto fl"
    console.log(newDiv2)

    var newImg=document.createElement("img")
            newDiv2.appendChild(newImg)

    //for (var i=0;i<=userImg.length;i++){
      var a =  parseInt(Math.random()*5)
            newImg.src=userImg[a]
            //return newImg.src

    //}


}






























}