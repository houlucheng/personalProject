
var Close = document.querySelector('#Close');
var bnext = document.querySelector('#next');
var oBox = document.querySelector('.box');
var aItem = document.querySelectorAll('.item');
var oNum = document.querySelectorAll('.dian');
var aNum = document.querySelectorAll('.dian a');
var arr = [],
    iNow = 0,
    n=0,
    l=0,
    arr1=[];

function getStyle(obj, attr) {
    return (obj.currentStyle || getComputedStyle(obj, false))[attr];
}
for (var i = 0; i < aItem.length; i++){
    n=getStyle(aItem[i],'background-image')
    arr1.push(n.substring(5,n.length-2))
    arr[i] = {
        w: getStyle(aItem[i], 'width'),
        h: getStyle(aItem[i], 'height'),
        l: getStyle(aItem[i], 'left'),
        t: getStyle(aItem[i], 'top'),
        z: getStyle(aItem[i], 'z-index'),
        index: i
    };
}
function sTab() {
    for (var i = 0; i < aNum.length; i++) {
        aNum[i].className = '';
    }
    aNum[iNow].className = 'cur';
}

function tab() {
    for (var i = 0; i < aItem.length; i++) {
        aItem[i].style.width = arr[i].w;
        aItem[i].style.height = arr[i].h;
        aItem[i].style.left = arr[i].l;
        aItem[i].style.top = arr[i].t;
        aItem[i].style.zIndex = arr[i].z;
        // aItem[i].onclick = arr[i].fn;
    }
}

function next() {
    iNow++;
    if (iNow == aNum.length) iNow = 0;
    arr.unshift(arr.pop());
    sTab();
    tab();
}

function prev() {
    iNow--;
    if (iNow == -1) iNow = aNum.length - 1;
    arr.push(arr.shift());
    sTab();
    tab();
}
for (var i = 0; i < aNum.length; i++) {
    aNum[i].index = i;
    aNum[i].onclick = function() {
        iNow = this.index;
        sTab();
        arr.sort(function(a, b) {
            return a.index - b.index;
        })
        for (var i = 0; i < iNow; i++) {
            arr.unshift(arr.pop());
        }
        tab();
    }
}

Close.onclick=function(){
    Exhibition.style.display='none';
    this.style.display='none';
    bnext.style.display='none';
}

for (var i = 0; i < aItem.length; i++) {
    aItem[i].onclick=function(){
        var hh=getStyle(this,'background-image')
        var url=hh.substring(5,hh.length-2)
        imgg.src=url;
        Exhibition.style.display='block';
        Close.style.display='block';
        bnext.style.display='block';
    }
}

bnext.onclick=function(){
          l++;
        imgg.src=arr1[l];
        if(l==4){
            l=0;
        }
}

oBox.addEventListener('touchstart',function(e){
    oBox.startX = e.touches[0].clientX;
 },0);
oBox.addEventListener('touchmove',function(e){
    oBox.endX = e.touches[0].clientX;
 },0);
oBox.addEventListener('touchend',function(e){
    if(this.startX>this.endX && this.endX!=0&&this.startX-this.endX>100){
        next();
    }
    if(this.startX<this.endX && this.endX!=0&&this.endX-this.startX>100){
        prev();
    }
},0)
















