---
title: createElement与createDocumentFragment的区别
---
#createElement：创建一个新的节点

createDocumentFragment：创建一个文档片段。

用createDocumentFragment主要是因为避免因createElement多次添加到document.body引起的效率问题
