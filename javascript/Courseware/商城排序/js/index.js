//1.获取元素
let header=document.getElementById('header');
let button=header.getElementsByTagName('a');
let ul=document.getElementById('shopList');

//2.通过ajax获取到它的数据
var data=null
let xhr=new XMLHttpRequest();
xhr.open('get','data/product.json',false)
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        data=JSON.parse(xhr.responseText)
    }
}
xhr.send()
console.log(data);

//3.绑定数据
function bindHTML() {
    let str='';
    data.forEach(function (item,index) {
        str+=`<li>
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <p class="hot">${item.hot}</p>
            <del>$9999</del>
            <span>${item.price}</span>
            <p class="time">${item.time}</p>
            </li>`

    });
    ul.innerHTML=str
}
bindHTML();
console.log(data);


//4.给商品进行排序
for(let i=0;i<button.length;i++){
    button[i].flag=-1;//1
    button[i].onclick=function () {
        this.flag*=-1;
        let val=this.getAttribute("attrName");
        //sort排序
        sort.call(this,val)
    }
}
function sort(value) {
    //如果形参value是time的时候，我们就需要通过转换成时间戳来排序，否则我们按照正常的sort排序即可
    var _this=this;
    if(value==='time'){
        data.sort(function (a,b) {
            return (new Date(a.time)-new Date(b.time))*_this.flag
            //this一开始是window
        })
    }else{
        data.sort(function (a,b) {
                return (a[value]-b[value])*_this.flag
        })
    }
    bindHTML();
}
