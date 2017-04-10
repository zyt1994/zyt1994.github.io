---
title: git
---
### 想要向GitHub推送：
###### 由于本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：
    1. 查看是否已经有了ssh密钥：cd ~/.ssh
       如果没有密钥则不会有此文件夹，有则备份删除
    2. 生存密钥：
       $ ssh-keygen -t rsa -C “haiyan.xu.vip@gmail.com”
      按3个回车，密码为空。
    3. 登陆GitHub，打开“Account settings”，“SSH Keys”页面：
       然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：


##### 本地新建的文件提交到github中：
     1.$ git add "style.css"
     2.$ git commit -m "add cssText"
     3.$ git push
