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
 * @param {Object} options option数组对象，包含：
 *  · encoding  (string) 可选值，默认‘utf-8’，当data使buffer时，该值应该为。。。
 *  · mode （Number） 文件读写权限，默认值438
 *  · flag  (string) 默认值‘w’
 * @param {*} callback 回调，传递异常参数err
 */
// fs.writeFile('./html/index.html', '你好nodejs', (err)=> {
//     // 如果此文件存在将会是替换操作
//     if(err) {
//         // 创建失败
//         console.log(err);
//         return
//     }
//     console.log("创建写入成功");
// })

// fs.appendFile 追加文件
/**
 * @param {*} path 将创建的文件路径
 * @param {*} data 文件中要写的内容
 * @param {*} callback 回调，传递异常参数err
 */

// fs.appendFile("./css/index.css", 'html {background-color: blue}\n', (err) => {
//     // 如果没有此文件就创建，如果有就追加内容 "\n":换行
//     if (err) {
//         console.log(err,'追加失败');
//         return
//     }
//     console.log('appendFile成功');
// })


// fs.readFile 读取文件
/**
 * @param {*} path 将创建的文件路径
 * @param {*} callback 回调，传递异常参数err，读取出来的数据data
 */

// fs.readFile("./css/index.css", (err, data) => {
//     // 如果没有此文件就创建，如果有就追加内容
//     if (err) {
//         console.log(err, '追加失败');
//         return
//     }
//     console.log('readFile成功', data); // 16进制的buffer数据
//     console.log(data.toString()); // 把buffer转换为string类型
// })


// fs.readdir 读取目录
/**
 * @param {*} path 将创建的文件路径
 * @param {*} callback 回调，传递异常参数err，读取出来的数据data
 */

// fs.readdir("../fs", (err, data) => {
//     if (err) {
//         console.log('读取失败');
//         return
//     }
//     console.log('readdir成功', data);
// })


// fs.rename 重命名/移动文件
/**
 * @param {*} path 重命名的文件或目录路径
 * @param {*} data 要修改的名称或要移动到了目录
 * @param {*} callback 回调，传递异常参数err
 */

//  fs.rename("./html", "./html1", (err) => {
//     if (err) {
//         console.log('失败');
//         return
//     }
//     console.log('rename成功');
// })

// fs.rmdir 删除目录
/**
 * @param {*} path 删除目录路径
 * @param {*} callback 回调，传递异常参数err
 */

 fs.rmdir("./css/aaa", (err) => {
    if (err) {
        console.log('失败');
        return
    }
    console.log('rmdir成功');
})


// fs.unlink 删除文件
/**
 * @param {*} path 删除文件路径
 * @param {*} callback 回调，传递异常参数err
 */

 fs.unlink("./css/a.css", (err) => {
    if (err) {
        console.log('失败');
        return
    }
    console.log('unlink成功');
})

   