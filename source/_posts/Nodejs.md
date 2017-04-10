---
title: Node.js
---
#### 简单的说 Node.js 就是运行在服务端的 JavaScript。
* Node.js 是一个基于Chrome JavaScript 运行时，使用C++编写，建立的一个平台。本质上是JavaScript的运行环境；
* Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

#### 优点：
* 可以解析JS代码（没有浏览器安全级的限制）
* 提供系统级别的API
      1.文件的读写
      2.进程的管理
      3.网络通信

#### node.js让JavaScript流畅的运行在服务器端，彻底打破了前后端的语言边界

##### 以下是推荐的四个网站：
* nodejs.org   （官网）
* nomjs.org
* github  搜索node关键词
* stackoverflow.com


#### 安装Node.js
###### 1. nodejs的版本：
| 偶数位为稳定版本| 奇数位为不稳定版本 |
| :-------- | --------:|
| -0.6.x | -0.7.x  |
| -0.8.x | -0.9.x |
| -0.10.x | -0.11.x |

###### 2. 安装
      1.下载并安装git Bash(客户端工具，可以执行git命令。。)
      2.打开nodejs.org(官网)，下载并安装node.js
      3.打开命令窗口，输入node -v（判断node是否安装好并查看版本号）
      4.输入npm -v（判断npm是否安装好并查看版本号）
      5.输入node  （进入他的环境，可以做简单的运算方法）
#### 简单小例子：

1. 新建server.js文件

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node.js\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
2. 在命令行输入node server.js

![](http://upload-images.jianshu.io/upload_images/3202149-f833f1a6165503b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.在浏览器中输入127.0.0.1:3000

![](http://upload-images.jianshu.io/upload_images/3202149-3bf4f62749ff0c55.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.在命令行中使用快捷键Ctrl+C可停止之前的服务

#### Node.js防止变量污染，模块互不影响

![](http://upload-images.jianshu.io/upload_images/3202149-afa4538cbb1b814e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

约定了JavaScript怎么去组织编写
![](http://upload-images.jianshu.io/upload_images/3202149-5e5421114bbca96d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)


#### 规范与实现的互为促进
![](http://upload-images.jianshu.io/upload_images/3202149-b528032e576cfe3c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

##### 模块与包管理工具
 js的天生缺陷——缺少模块化管理机制
   **表现**>> JS中容易出现变量被覆盖，方法被替代的情况（既被污染）。特别是存在依赖关系时，容易出现错误。这是因为JS缺少模块管理机制，来隔离实现各种不同功能的JS判断，避免它们相互污染。
   **解决**>> 经常采用命名空间的方式，把变量和函数限制在某个特定的作用域内，人肉约定一套命名规范来限制代码，保证代码安全运行。jQuery中有许多变量和方法，但是无法直接访问，必须通过jQuery，$调用 各个方法。
######Commonjs规范`- [ ]`
不同于jQuery，Commonjs是一套规范，约定了js如何组织，如何编写，包括包，二进制，套接字，单元测试等等。大部分标准在拟定和讨论之中，首先把执行不同任务的代码块和代码文件看为独立的模块，每一个模块都是一个单独的作用域，但不是孤立的，可能存在依赖关系。每个模块分为三个部分，定义、标识和引用。这套规范与现实产品如node.js相互影响，良性循环。
######NodeJs的模块管理机制
node.js借鉴了commonjs的这种理念，并基于Commonjs，实现了一套模块管理系统，node中每一个js文件都是一个独立的模块，在其内部不需要有命名空间，不需要担心变量的污染和方法定义时的隔离。同时模块之间可以组合形成更强大的模块或功能包。npm即是用来管理各种功能包的。


###nodejs模块分类：
在nodejs中可以通过文件路径或文件名来引入模块，如果用名称引用非核心模块的话，node最终会把模块映射到对应的模块文件的路径，那些包含了核心函数的核心模块会在node启动时被预先加载。非核心模块包括使用npm安装的第三方模块或自己创建的本地模块。

![模块分类.png](http://upload-images.jianshu.io/upload_images/3202149-0e7ceb2dc89b9782.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)


###模块的流程
      1.创建模块 => 入口js文件，加入特定的功能
      2.导出模块 => 把功能和文件名也就是模块名建立关系
      3.加载模块 => 在其他文件里面引入并加载这个模块
      4.使用模块 => 直接调用模块中命名好的方法

![](http://upload-images.jianshu.io/upload_images/3202149-e562720252c76bdb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)

#### 以下是一个简单的例子：
1.新建student.js文件
``` python
function add(student){
	console.log("Add Student:"+student);
}

exports.add = add;
```
2.新建teacher.js文件
``` python
function add(teacher){
	console.log("Add Teacher:"+teacher);
}

exports.add = add;
```
3.新建klass.js文件
``` python
var student = require('./student');
var teacher = require('./teacher');

// teacher.add('Wangxiaoming');

function add(teacherName,students){
	teacher.add(teacherName);

	students.forEach(function(item,index){
		student.add(item);
	})
}

exports.add = add;

// module.exports = add;
```

3.新建index.js文件
``` python
var klass = require('./klass');

klass.add('ZYT',['高富帅','白富美']);

// exports.add = function(kclasses){
// 	kclasses.forEach(function(item,index)){
// 		var _kclass = item;
// 		var teacherName = item.teacherName;
// 		var students = item.students;

// 		kclass.add(teacherName,students);
// 	}
// }
```
4.在命令行中输入node index

![](http://upload-images.jianshu.io/upload_images/3202149-e0c59792eae98265.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### nodejs中exports与module.exports的区别
http://www.cnblogs.com/pigtail/archive/2013/01/14/2859555.html

其实，Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。

所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是Module.exports本身不具备任何属性和方法。
如果你想你的模块是一个特定的类型就用Module.exports。如果你想的模块是一个典型的“实例化对象”就用exports。
前面已经提到module.exports是真正的接口，exports只不过是它的辅助工具。推荐使用exports导出，除非你打算从原来的“实例化对象”改变成一个类型。
