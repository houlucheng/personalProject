class Upload{
    constructor(){
        this.opt = {
            fileEle:null,
            go:null,
            url:''
        }
        this.arr = [];
        this.num = 0;
    }
    init(opt){
        $.extend(this.opt,opt);
        let obj = this.opt;
        let _this = this;

        //上传控件，添加数据
        if(obj.fileEle){
            obj.fileEle.on('change',function(){
                // console.dir(this.files[0]);
                _this.add(this.files[0]);
                // _this.arr.push();
                $(this).val('');
            });
        }

        if(obj.go){
            obj.go.on('click',function(){
                _this.uploads();
            });
        }
    }
    //添加数据
    add(data){
        //过滤重复的。
        if(!this.arr.some(e=>e.name == data.name)){
            this.arr.push(data);
            console.log(this.arr);
        }
    }


    uploads(){
        /*
            let f = new FormData();
            f.append(key,val);

            f.append('name','小明');
            f.append('age','80')

            name=小明&age=80
        */
        let _this = this;
        $.each(this.arr,(i,e)=>{
            let f = new FormData();
            f.append('file',e);
            $.ajax({
                url:this.opt.url,
                data:f,
                dataType:'json',
                success:function(data){
                    if(data.code == 0){
                        _this.num ++;
                        console.log(_this.num);
                        if(_this.num === _this.arr.length){
                            //传完了
                            _this.arr.length = 0;
                            _this.num = 0;
                            console.log(_this.arr);
                        }
                    }
                },
                type:'post',
                contentType: false, //不设置内容类型
			    processData: false,//不处理数据
            });
        });
    }

}
$.fn.extend({
    upload:function(opt){
        let u = new Upload();
        u.init(opt);
    }
});