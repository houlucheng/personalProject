# TypeScript
## 安装/编译
```javascript
  npm install -g typescript
  // 编译ts代码
  tsc xxx.ts
```
## 基本类型
- 类型声明
  - 类型声明是ts非常重要的一个特点
  - 通过类型声明可以指定TS中变量（参数、形参）的类型
  - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
  - 语法：
      - ```javascript
          let 变量：类型；

          let 变量：类型 = 值；

          function fn(参数：类型，参数：类型)：类型{
            ...
          }
        ``` 
- 自动类型判断
  - TS拥有自动的类型判断机制
  - 当对变量的声明和赋值同时进行时，TS编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值同时进行时，可以省略类型声明
- 类型   

    类型|例子|描述
    -|-|-
    number|1,-33,2.5|任意数字
    string|'hi','hi','hi'|任意字符串
    boolean|true,false|布尔值true或false
    字面量|其本身|限制变量的值就是该字面量的值
    any|*|任意类型
    unknown|*|类型安全的any
    void|空值（undefined）|没有值（或undefined）
    never|没有值|不能是任何值
    object|{name: '孙悟空'}|任意的js对象
    array|[1,2,3]|任意js数组
    tuple|[4,5]|元素，TS新增类型，固定长度数组
    enum|enum{A,B}|枚举ts中新增类型

- number
  - ```
    let decimal: number = 6
    ```