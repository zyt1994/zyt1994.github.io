---
title: cookie
---
存储数据，当用户访问了网站（网页）的时候，我们就可以通过cookie来向访问者电脑里存储数据（相对来说容量小一点——4kb）,一般用来存储一些用户的信息和简单的数据。

##### cookie特点：
    1. 不同的浏览器存放的cookie位置不一样，也是不能通用的。
    2. cookie的存储是以域名的形式来区分的。
    3. cookie的数据可以设置名字。
    4. 一个域名下所存放的cookie的个数也是有限制的。（不同浏览器存放的个数不同）
    5. 每一个cookie存放的内容大小也是有限制的（根据浏览器不同而不同）一般情况下4KB。

##### 注：
    1. cookie是浏览器提供的一种机制，它是将document对象的cookie属性提供给JavaScript，
       然后由js来进行控制，而并不是js本身的性质。
    2. cookie存在于用户硬盘的一个文件，这个文件对应 一个域名，当浏览器再次访问这个域名时，
       便使这个cookie可用，因此cookie可以跨越一个域名下的多个网页，但是不能跨越的多个域名使用
    3. 如果要一次存储多个名/值时，可以使用  分号+空格  隔开。
Chrome默认禁止设置本地的cookie（如果直接file://.....的形式打开浏览器的话看不到），webstorm等一些软件默认内置了一个本地服务器（127.0.0.1）这样就可在chrome上查询到设置的cookie。

##### 用法：
    document.cookie = "名字=值"

##### 例：
```python
function setCooie(key,value,time){   //time   过期时间
    var newDate = new Date();
    newDate.setDate(newDate.getDate()+time);
    document.cookie = key+"="+encodeURI(value)+";expires="+newDate.toGMTString()
}
```
