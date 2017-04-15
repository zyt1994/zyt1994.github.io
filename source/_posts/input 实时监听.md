---
title: input 实时监听
---
[Jquery实时监听input value](http://www.cnblogs.com/zijian6/p/5767026.html)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body id="lia-body">
    <div class="lia-content">
        <div class="inputwrapper">
            <label><span>姓名：</span><input type="text" name="fullname"></label>
            <div class="result"></div>
        </div>
    </div>
    <!-- more -->
    <script src="http://apps.bdimg.com/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>
        $(function(){
            var $inputwrapper = $('#lia-body .lia-content .inputwrapper');
            $inputwrapper.find('input').on('input propertychange',function(){
                var result = $(this).val();
                console.log(result);
                $inputwrapper.find('.result').html(result);
            });
        })
    </script>
</body>
</html>
```

onchange触发事件必须满足两个条件：1）当前对象属性改变，并且是由键盘或鼠标事件激发的（脚本触发无效）2）当前对象失去焦点(onblur)；onpropertychange
只要当前对象属性发生改变，都会触发事件，但是它是IE专属的；
oninput是onpropertychange的非IE版本，支持firefox和opera等浏览器
但不同的是，它绑定于对象时，并非该对象所有属性改变都能触发事件，只有在对象的value值发生改变时才会生效。
这里我们用来监听input value的改变再好不过了。
