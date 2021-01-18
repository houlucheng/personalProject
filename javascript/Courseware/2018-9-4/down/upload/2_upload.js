class Upload{
    constructor(){
        this.opt = {
            fileEle:null,
            go:null,
            url:'',
            fileView:function(){},
            drag:null,
            end:function(){},
            end2:function(){}
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
        
        //点击上传
        if(obj.go){
            obj.go.on('click',function(){
                _this.uploads();
            });
        }

        $(document).on('dragover',function(){return false});

        //拖拽
        if(obj.drag){
            //移入
            obj.drag.on('dragover',function(){
                console.log('触发了');
            });
            //抬起
            obj.drag.on('drop',function(){
                console.log('抬起');
                return false;
            });

        }
    }
    //添加数据
    add(data){
        //过滤重复的。
        if(!this.arr.some(e=>e.name == data.name)){
            this.arr.push(data);
            //把可以看到的数据给开发者
            this.opt.fileView(data);
            console.log(this.arr);
        }
    }

    remove(name){
        this.arr = this.arr.filter(e=>e.name != name);
        console.log(this.arr);
    }

    view(data,callback){
        /*
            把上传的数据转成可视数据
                new FileReader();
                reader.readAsDataURL(data);
                reader.onload
                    e.target.result  可视的数据

        */
        let reader = new FileReader();
        reader.readAsDataURL(data); 
        reader.onload =function(e){
            // console.log(e.target.result);  
            callback && callback(e.target.result);                               
        };                 
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
                        // console.log(_this.num);
                        //上传的过程监听
                        _this.opt.end(_this.num,_this.arr.length);
                        if(_this.num === _this.arr.length){
                            //传完了
                            _this.arr.length = 0;
                            _this.num = 0;
                            _this.opt.end2();//已经上传完成
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
        return u;
    }
});