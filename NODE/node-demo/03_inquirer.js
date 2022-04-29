const inquirer = require('inquirer')

// 一. 基本用法
// var questions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: "你叫什么名字?"
//     },
//     {
//         type:"input",
//         message:"请输入你的年龄:",
//         name:"age",
//         default:18,
//         validate:(val)=>{
//             if(val > 10 && val < 120){
//                 return val;
//             }else{
//                 return "我猜你绝对不是一个正常人类";
//             }
//         }
//     }
// ]

// 二. confirm确认 以及 前缀和后缀
// var questions = [
//     {
//         type:"confirm",
//         message:"是否现在监听？",
//         name:"watch",
//         default:true,
//         prefix:"☆☆☆☆"//前缀
//     },
//     {
//         type: "confirm",
//         message: "是否能看到我取决于上面是否通过？",
//         name: "pass",
//         suffix: "****",//后缀
//         when: function(answer) { // 当watch为true的时候才会到达这步
//             return answer.watch//只有我return true才会这个confirm
//         }
//     }
// ]

// 执行结果
/*  
    $ node ./03_inquirer.js 
    ? 是否现在监听？ Yes
    ? 是否能看到我取决于上面是否通过？后缀 Yes
    { watch: true, pass: true }
*/


// 三. list 选项组 和 filter

// 5.1 使用箭头选择
// list 一般配合 choices 使用：
var questions = [
    {
        type: "list",
        message: "请选择一个选项：",
        name: "fruit",
        deafult: "Apple",
        prefix: "前",
        suffix: "后",
        choices: [
            "Apple",
            "pear",
            "Banana"
        ],
        filter: function (val) { // 使用filter将值变为大写
            return val.toUpperCase();
        }

    }
]
// 执行结果
/*
    $ node ./03_inquirer.js 
    前 请选择一个选项：后 
    > Apple
    pear
    Banana
*/

//  5.2 使用数字选择
// list 改成 rawlist
// var questions = [
//     {
//         type: "rawlist",
//         message: "请选择一个选项：",
//         name: "fruit",
//         deafult: "Apple",
//         prefix: "前",
//         suffix: "后",
//         choices: [
//             "Apple",
//             "pear",
//             "Banana"
//         ],
//         filter: function (val) { // 使用filter将值变为大写
//             return val.toUpperCase();
//         }

//     }
// ]
// 执行结果
/*
    $ node ./03_inquirer.js 
    前 请选择一个选项：后 
    1) Apple
    2) pear
    3) Banana
    Answer:
*/

//  5.3 使用简写（自动扩展成全写）
// var questions = [
//     {
//         type:"expand",
//         message:"请选择一个颜色：",
//         name:"color",
//         default:"red",
//         choices:[
//             {
//                 key : 'R',
//                 value : "red"
//             },
//             {
//                 key : 'B',
//                 value : "blue"
//             },
//             {
//                 key : 'G',
//                 value : "green"
//             }
//         ]
//     }
// ]
// 执行结果
/*
    $ node ./03_inquirer.js 
    ? 请选择一个颜色： (Rbgh) g
    >> green
*/
// 如果输入未预设的值回车后如下
/*
    $ node ./03_inquirer.js 
    ? 请选择一个颜色： (Rbgh) h
    r) red
    b) blue
    g) green
    h) Help, list all options
    Answer:
*/

//  5.4 多选checkbox 和 分隔符inquirer.Separator()
// var questions = [
//     {
//         type:"checkbox",
//         message:"选择一至多种颜色：",
//         name:"color",
//         // choices:[
//         //     "red",
//         //     "blue",
//         //     "green",
//         //     "pink",
//         //     "orange"
//         // ],
//         choices:[
//             {
//                 name : "red"
//             },
//             new inquirer.Separator(), // 添加分隔符
//             {
//                 name : "blue"
//             },
//             {
//                 name : "green"
//             },
//             {
//                 name : "pink",
//                 checked : true//默认
//             },
//             new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
//             {
//                 name : "orange"
//             }
//         ]
//     }
// ]
// 执行结果
/*
    Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed
    翻译：按<space>(空格)选择，<a>切换全部，<i>反转选择，<enter>继续
    $ node ./03_inquirer.js 
    ? 选择一至多种颜色： (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
    >( ) red
    ──────────────
    ( ) blue
    ( ) green
    (*) pink
    --- 分隔符 ---
    ( ) orange

    结果
    { color: [ 'red', 'pink' ] }
*/


//  5.5 密码 password
var questions = [
    {
        type:"password",
        message:"请输入你的密码：",
        name:"pwd"
    }
]
// 执行结果
/*
    输入密码时不显示

    $ node ./03_inquirer.js 
    ? 请输入你的密码： [hidden]
    { pwd: '454545' }
*/

//  5.6 输入数字 number
// var questions = [
//     {
//         type:"number",
//         message:"请输入数字：",
//         name:"num"
//     }
// ]
// 执行结果
/*
    $ node ./03_inquirer.js 
    ? 请输入数字： 666
    { num: 666 }
*/

//  5.7 编辑器 editor
// var questions = [
//     {
//         type:"editor",
//         message:"写下你想写的东西：",
//         name:"editor"
//     }
// ]


//  5.8 行数
// 用来更改显示行数只对list, rawList, expand 或 checkbox有效。
var questions = [
    {
        type:"checkbox",
        message:"选择一至多种颜色：",
        name:"color",
        choices:[
            "red",
            "blue",
            "green",
            "pink",
            "orange"
        ],
        pageSize:2
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(answers)
})