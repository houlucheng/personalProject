

let vm  = new Vue({
    el:"#app",
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:"",
        hash:"#all"

    },
// window : 可以监听hash值
    created(){
        window.addEventListener("hashchange",()=> {
            //console.log(window.location.hash); //window.location.hash:获取当前页民hash值，会带#
            this.hash = window.location.hash;
        })
    },
    methods:{
        add(){
            this.todos.push({ /*向后面新增*/
                isSelected:false,
                title:this.title
            });
            this.title = ""
        },
        remove(val){
            this.todos = this.todos.filter(item=>item!==val)
        }
    },
    computed:{
        filterTodo(){ // filterTodo依赖hash值
            if(this.hash==="#all"){return this.todos}
            if(this.hash==="#finish"){return  this.todos.filter(item=>item.isSelected)}
            if(this.hash==="#unfinish"){return  this.todos.filter(item=>!item.isSelected)}
        }
    },
});
