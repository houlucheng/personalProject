# TypeScript
## 安装/编译
```jsx
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
      - ```jsx
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

- 类型中的 “或|” 语法
  - ```tsx
      let a: number | string | boolean // a的值可以是这三种类型
    ```

- number
  - ```jsx
      let num: number
      num = 10
      num = "nihao" // 不能将类型“string”分配给类型“number”。

      function Handel(a: number, b: number): number{
        // 参数以及返回值均为number类型
        return 1 + 1
        // return "hello" // 不能将类型“string”分配给类型“number”。
      }
      Handel(6,8)
      // Handel() // 应有 2 个参数，但获得 0 个
      // Handel("q", 'w') // 不能将类型“string”分配给类型“number”。
    ```

- string
  - ```jsx
      let str: string
      str = "hello!"
      str = true // 不能将类型“boolean”分配给类型“string”。
    ```

- boolean
  - ```jsx
      let str: boolean
      str = true
      str = "true" // 不能将类型“string”分配给类型“boolean”。

- 字面量
  - ```jsx
      let str: 10 | 20 | 'hello' // 只可以是这三种值
      str = 10 // 有点类似常量， 定义了一个值就只能成为这个值了
      str = "hello" // 不能将类型“"hello"”分配给类型“10”。
    ```

- any（任意值）
  - ```jsx
      // 设置any后相当于关闭了ts的类型检测，不建议使用
      let str: any = 10 
      str = "hello"
      str = true
      let str1 // 隐式any
      str1 = "hello"
      str1 = true
    ```

- unknown（未知类型，类型安全的any）
  - ```jsx
      let str: unknown = 10 
      str = "hello"
      str = true
    ```

- void（空值）
  - ```jsx
      let str: void = 10 
      str = "hello"
      str = true
    ```

- never（没有值）
  - ```jsx
      let str: void = 10 
      str = "hello"
      str = true
    ```

- object
  - ```jsx
      let str: object
      str = {}
      str = 888 // 不能将类型“number”分配给类型“object”。
    ```

- array
  - ```jsx
      let str: array
      str = []
      str = 888 // 不能将类型“number”分配给类型“array”。
    ```

- tuple（固定长度类型）
  - ```jsx
      let str: void = 10 
      str = "hello"
      str = true
    ```

- enum（枚举）
  - ```jsx
      let str: void = 10 
      str = "hello"
      str = true
    ```

- any 与 unknown 的区别
  - unknown 实际上就是一个类型安全的any
  - unknown 类型的变量，不能直接赋值给其他变量
  - ```tsx
      let a: any = 10
      let b: unknown = 10
      let s: string = "hello"
      s = a // 正常赋值
      s = b // 不能将类型“unknown”分配给类型“string”。
      // 可通过两种方式赋值
      // 1. 
      if(typeof b === "string") {
          s = b
      }
      // 2.
      s = b as string
    ```