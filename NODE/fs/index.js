const fs = require('fs')

// fs.stat 检测是文件还是目录
/**
 * @param {*} path 检测的文件或目录的路径
 * @param {*} callback 回调，传递异常参数err 和 data对象
 */
// fs.stat('./html', (err, data)=> {
//     if(err) {
//         // 路径错误时
//         console.log(err);
//         return
//     }
//     console.log(`是文件${data.isFile()}`); // 是文件false
//     console.log(`是目录${data.isDirectory()}`); // 是目录true
// })


// fs.mkdir 创建目录
/**
 * @param {*} path 将创建的目录路径
 * @param {*} mode 目录权限（读写权限），默认777
 * @param {*} callback 回调，传递异常参数err
 */
// fs.mkdir('./css', (err)=> {
//     if(err) {
//         // 创建失败
//         console.log(err);
//         return
//     }
//     console.log("创建成功");
// })


// fs.writeFile 创建写入文件
/**
 * @param {*} path 将创建的文件路径
 * @param {*} data 文件中要写的内容
 * @param {*} callback 回调，传递异常参数err
 */
fs.writeFile('./html/index.html', '你好nodejs', (err)=> {
    if(err) {
        // 创建失败
        console.log(err);
        return
    }
    console.log("创建写入成功");
})

// fs.appendFile 最佳文件

// fs.readFile 读取文件

// fs.readdir 读取目录

// fs.rename 重命名

// fs.rmdir 删除目录

// fs.unlink 删除文件


