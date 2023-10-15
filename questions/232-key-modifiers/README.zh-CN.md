<!--info-header-start--><h1>按键修饰符 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23Event%20Handling-999" alt="#Event Handling"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqtVE2P2jAQ/StTX3AkCF2Oq0AX9VSpPXFsesgmDrHWsSN7AosQ/73jmPBRugsrFgnF8rw38+Z57C2bN028agV7ZAmKulEZillqUw2QfBmNYF4U8CI2UJtCllJYB3VWCMBKOlhLpaCUVoBYCQ2yhLlCMBYWlSwRCJEpZ6CxwjlRwGjUJU6eW0Sj4SlXMn+Zpszo7371kLLZPBmHaIfs0DeJMFptgpJ1RUpC/UwXoA0YrIT1dJJDgBvUoFWdos8TRDLcxpG/J4wbxfjV5EJJMj47rG7L5VY2CE5g2+yPsGx1jpIy9h7zaBsiALnRzigRK7Pkgz4+iEJ4d8nvXXknRQ95J0vXzhUVkzN+Mg6NzdiQSV2I1xiFwxgdjaysG2MRtmRrqxF2UFpTQ8qeaKLJIYejFqVyKUv1AVoIn+9ZDEHiEMRrI3L6ruSRvZKe6kkHGt2SPhqP91cmAPp0PGVnE5GyIfAIpjPY+lYkEsBVplUFrI2l2RpC5jY6P8EAKIE0E1LjT7OEKRXzNf6xifZXMi41DxEATpuP4JB4y9Nk/neSjFDfYjSLDscjWltZ86jH7vYrXwlhbbOmoWszDc5yavksHkbRUXyPjEs6m7lS1GWIpYwIgZKtM3mg/P76x1deLoXlg27O6bQ7WDgK3kuOSOyvDPPqh1ZSi4XOGvIP+cC70nOupI4zhR9Pf3yQbi3j/INzb6H/lXq436xr3VyUuKOb48v5VkOTT2uIHsXA9ZPr/2z3F3+wUyI=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许为 v-on 或者 @ 在监听键盘事件时添加按键修饰符：，例如：

```vue
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
```

在这个挑战中，我们将尝试它，让我们开始吧：

```vue
<template>
  <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click="onClick1">A</button>

<!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
<button @click="onCtrlClick">A</button>

<!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
<button @click="onClick2">A</button>
</template>

```


<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=232%20-%20%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A232+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
