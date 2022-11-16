## 什么是web缓存？
> web缓存主要指的是两部分：浏览器缓存和http缓存。
  其中http缓存是web缓存的核心，是最难懂的那一部分,也是最重要的那一部分。
- 浏览器缓存：比如,localStorage,sessionStorage,cookie等等。这些功能主要用于缓存一些必要的数据，比如用户信息。比如需要携带到后端的参数。亦或者是一些列表数据等等。
- http缓存: Web 缓存是可以自动保存常见文档副本的 HTTP 设备。当 Web 请求抵达缓存时， 如果本地有“已缓存的”副本，就可以从本地存储设备而不是原始服务器中提取这 个文档。服务器需要处理http的请求，并且http去传输数据，需要带宽，带宽是要钱买的啊。而我们缓存，就是为了让服务器不去处理这个请求，客户端也可以拿到数据。
> 注：我们的缓存主要是针对html,css,img等静态资源，常规情况下，我们不会去缓存一些动态资源，因为缓存动态资源的话，数据的实时性就不会不太好，所以我们一般都只会去缓存一些不太容易被改变的静态资源。

## 缓存可以解决什么问题？
- 减少不必要的网络传输，节约宽带（就是省钱）
- 更快的加载页面（就是加速）
- 减少服务器负载，避免服务器过载的情况出现。（就是减载）

## 他的缺点是什么？
- 占内存（有些缓存会被存到内存中）
> 其实日常的开发中，我们最最最最关心的，还是"更快的加载页面";尤其是对于react/vue等SPA（单页面）应用来说，首屏加载是老生常谈的问题。这个时候，缓存就显得非常重要。不需要往后端请求，直接在缓存中读取。速度上，会有显著的提升。是一种提升网站性能与用户体验的有效策略。

<font color="red">以下内容是http缓存</font>

## 强缓存
### Expires (已被废弃)
#### 1. 用法
  ```javaScript
    http.createServer((req, res) => {
      res.writeHead(200, {
        // toUTCString 根据世界时 (UTC) 把 Date 对象转换为字符串：
        Expires: new Data("2022-7-30 23:59:59").toUTCString()
      })
    })
  ```
#### 2. 解释
- Expires 字段的作用是，设定一个强缓存时间。在此时间范围内，则从内存（或磁盘）中读取缓存返回。
  比如说将某一资源设置响应头为:Expires:new Date("2022-7-30 23:59:59")；
  那么，该资源在2022-7-30 23:59:59 之前，都会去本地的磁盘（或内存）中读取，不会去服务器请求。
#### 3. 缺点
  - 因为Expires判断强缓存是否过期的机制是:获取本地时间戳，并对先前拿到的资源文件中的Expires字段的时间做比较。来判断是否需要对服务器发起请求。这里有一个巨大的漏洞：“如果我本地时间不准咋办？”  
  - Expires过度依赖本地时间，如果本地与服务器时间不同步，就会出现资源无法被缓存或者资源永远被缓存的情况。所以，Expires字段几乎不被使用了。现在的项目中，我们并不推荐使用Expires，强缓存功能通常使用cache-control字段来代替Expires字段。

### cache-control
>Cache-control这个字段在http1.1中被增加，Cache-control完美解决了Expires本地时间和服务器时间不同步的问题。是当下的项目中实现强缓存的最常规方法。
#### 1. 用法
注： Cache-Control 的单位是 <b>秒</b>
```javascript
  /*
    [max-age] 决定客户端资源被缓存多久
    [s-max-age] 决定代理服务器缓存的市场
    [no-cache] 表示强制进行协商缓存
    [no-store] 表示不进行缓存
    [public] 表示资源既可以被浏览器缓存也可被代理服务器缓存
    [private] 表示资源只能被浏览器缓存
  */
  http.createServer((req, res) => {
    res.writeHead(200, {
      // 从该资源第一次返回的时候开始，往后的10秒钟内如果该资源被再次请求，则从缓存中读取。
      'Cache-Control': 'max-age=10'
      // 设置多个值
      'Cache-Control': 'max-age=10, s-max-age=20, public'
    })
  })
```
#### 2. 缺点
- Expires难道就一点用都没有了吗？也不是，虽然Cache-control是Expires的完全替代品，但是如果要考虑向下兼容的话，在Cache-control不支持的时候，还是要使用Expires，这也是我们当前使用的这个属性的唯一理由。

## 协商缓存
### last-modified
#### 1. 用法
- 首先需要在服务器端读出文件修改时间，
- 将读出来的修改时间赋给响应头的last-modified字段。
- 最后设置Cache-control:no-cache
```javascript
  http.createServer((req, res) => {
    const data = fs.readFileSync('./bg2.png'); //读取资源
    const { mtime } = fs.statSync('./bg2.png'); //读取修改时间

    // 读取第一次返回给客户端的文件修改时间
    const ifModifiedSince = req.headers['if-modified-since'];
    // 比较第一次的修改时间和资源文件当前的修改时间是否一致
    if(ifModifiedSince === mtime.toUTCString()) {
      // 如果一致说明文件没有被修改过，则返回304
      res.statusCode = 304;
      // 因为缓存已经生效，这里不需要返回资源data
      res.end();
      // 缓存生效后直接return结束工作，避免返回新的last-modified
      return
    }

    res.setHeader('last-modified', mtime.toUTCString());//设置文件最后修改时间
    res.setHeader('Catch-Control', 'no-Cache')
    res.end(data)
  })
```
#### 2. 解释
- 读出修改时间
- 给该资源响应头的 <font color="#26C6DA">last-modeified</font> 字段赋值修改时间
- 给该资源响应头的 <font color="#26C6DA">Cache-Control</font> 字段设置为no-cache
- 当客户端读取到last-modified的时候，会在下次的请求标头中携带一个字段:If-Modified-Since, 而这个请求头中的If-Modified-Since就是服务器第一次修改时候给他的时间(last-modified)
- 那么之后每次对该资源的请求，都会带上If-Modified-Since这个字段，而务端就需要拿到这个时间并再次读取该资源的修改时间，让他们两个做一个比对来决定是读取缓存还是返回新的资源。

#### 3. 缺点
> 使用以上方式的协商缓存已经存在两个非常明显的漏洞。这两个漏洞都是基于文件是通过比较修改时间来判断是否更改而产生的。
- 因为是更具文件修改时间来判断的，所以，在文件内容本身不修改的情况下，依然有可能更新文件修改时间（比如修改文件名再改回来），这样，就有可能文件内容明明没有修改，但是缓存依然失效了。
- 当文件在极短时间内完成修改的时候（比如几百毫秒）。因为文件修改时间记录的最小单位是秒，所以，如果文件在几百毫秒内完成修改的话，文件修改时间不会改变，这样，即使文件内容修改了，依然不会 返回新的文件。

<font color="red">为了解决上述的这两个问题。从http1.1开始新增了一个头信息，ETag(Entity 实体标签)</font>

### ETag
#### 1. 用法
```javascript
  const etag = require('etag')

  http.createServer((req, res) => {
    const data = fs.readFileSync('./bg2.png'); //读取资源
    const etagContent = etag(data); //根据文件生成唯一标识

    // 读取第一次返回给客户端的文件指纹
    const ifNoneMatch = req.headers['if-none-match'];
    // 比较文件指纹是否一致
    if(ifNoneMatch === etagContent) {
      // 如果一致说明文件没有被修改过，则返回304
      res.statusCode = 304;
      // 因为缓存已经生效，这里不需要返回资源data
      res.end();
      return
    }

    res.setHeader('etag', etagContent);//给实体表情赋予唯一标识
    res.setHeader('Catch-Control', 'no-Cache')
    res.end(data)
  })
```
#### 2. 解释
> ETag就是将原先协商缓存的比较时间戳的形式修改成了比较文件指纹
  文件指纹:根据文件内容计算出的唯一哈希值。文件内容一旦改变则指纹改变。
- 第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的etag字段中跟资源一起返回给客户端。
<br/> 
- 第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的ETag也就是文件指纹。并赋给请求头的if-None-Match字段，让上一次的文件指纹跟随请求一起回到服务端。
<br/> 
- 服务端拿到请求头中的is-None-Match字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回304状态码和一个空的响应体并return。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的ETag中并返回给客户端

#### 3. 缺点
- ETag需要计算文件指纹这样意味着，服务端需要更多的计算开销。。如果文件尺寸大，数量多，并且计算频繁，那么ETag的计算就会影响服务器的性能。显然，ETag在这样的场景下就不是很适合。
<br/> 
- ETag有强验证和弱验证，所谓将强验证，ETag生成的哈希码深入到每个字节。哪怕文件中只有一个字节改变了，也会生成不同的哈希值，它可以保证文件内容绝对的不变。但是，强验证非常消耗计算量。ETag还有一个弱验证，弱验证是提取文件的部分属性来生成哈希值。因为不必精确到每个字节，所以他的整体速度会比强验证快，但是准确率不高。会降低协商缓存的有效性。

## 总结
- http缓存可以减少宽带流量，加快响应速度。
<br/>
- 关于强缓存，cache-control是Expires的完全替代方案，在可以使用cache-control的情况下不要使用expires
<br/>
- 关于协商缓存,etag并不是last-modified的完全替代方案，而是补充方案，具体用哪一个，取决于业务场景。
<br/>
- 有些缓存是从磁盘读取，有些缓存是从内存读取，有什么区别？答：从内存读取的缓存更快。
<br/>
- 所有带304的资源都是协商缓存，所有标注（从内存中读取/从磁盘中读取）的资源都是强缓存。

## 参考
> 参考：https://juejin.cn/post/7127194919235485733