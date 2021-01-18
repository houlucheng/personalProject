/*
    2.抽象一个类
*/
class Tabs{
    constructor(that){
        //默认参数
        this.opt = {
            btns:['新闻','娱乐','游戏'],
            contents:['智鹏来上课啦','刘强东又进去了','LOL,WOW']
        }
        this.that = that;
    }
    init(opt){
        //有配置走配置，没配置走默认
        $.extend(this.opt,opt);

        //创建按钮
        this.createBtns();

        //创建内容
        this.createContent();

        
        
        //点击切换
        this.events('click');

    }
    createBtns(){
        let html = '';
        this.opt.btns.forEach((e,i)=>{
            html += `<button class="${i==0?'active':''}">${e}</button>`
        });
        this.that.append(html);
        // console.log()
    }
    createContent(){
        let html = '';
        this.opt.contents.forEach((e,i)=>{
            html += `<div class="${i==0?'show':''}">${e}</div>`
        });
        this.that.append(html);
    }

    events(evName){
        let btns = this.that.find('button');
        let contents = this.that.find('div');

        btns.on(evName,function(){
            btns.removeClass('active');
            $(this).addClass('active');
            contents.removeClass('show');
            //index(尽量精确匹配)
            contents.eq($(this).index('button')).addClass('show');
        });
        console.log(btns);
    }



}
/*
    1.定义tabs
*/
$.fn.extend({
    tabs:function(opt){
        let t = new Tabs(this);
        t.init(opt);
        //this->jQ对象
        // console.log(this);
    }
})