<!--info-header-start--><h1>可写的计算属性 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23Composition%20API-999" alt="#Composition API"/> <img src="https://img.shields.io/badge/-%23Reactivity%3ACore-999" alt="#Reactivity:Core"/></h1><blockquote><p>By webfansplz <a href="https://github.com/webfansplz" target="_blank">@webfansplz</a></p></blockquote><p><a href="https://sfc.vuejs.org/#eNqdUrFu2zAQ/ZUDJ9lWJTTZAtlouxcdWqALB9PSOSUiUQR5lFMI+veSFJmoGTJkkEAe33t39+5m9lXranLIHlhjWyM1gUVyGnqhHo+ckeXsxJUc9GgIZjB4LaEdB+0IO1jgasYBOPMKnHHFVTsqSx7gFMExoIvPuxzVvbM/FPp4FiiKHRxPK7yaRO8QDhAIXNX7PVewh+/iCYH+IJwT/Qw3I0lceqwi4OfonwXBDaEVCh6RItygdT1tWDTCBeG+BKE6OMeUOXjnlfZ1yJrQay2HQwg19eqLd8FfCAfdC0J/A2g6OcWDP+rTPKe+l6Wp9X/x3PnrS1Ov3KbeKLKSSdXhc0VoqSLrh/Ji/LBKZ8O/eMc91dInR7L3Q9rMqMNQ8QVLkFQCPmtsN8xJBto6rUT5nQzNkKpOW5FQitBcRYsvwF9/NcIc+kidPYBywwVNCEUTXgNLkMglFZxlDc5KWMcfhST5t3eG/QYe0oSduhmhNRq/U9GgIqv7HQqgtfmiSLBqGkBYcOpJjTcVjtuOdlXKuqto/IbF/cdEYv9J4i5KLP4fPrb8A707Luk=" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-213547?logo=vue.js&logoColor=42b883" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a> </p><!--info-header-end-->


在这个挑战中，你需要创建一个可写的计算属性 :

```vue
<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
*/

plusOne.value++

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

```
<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues/new?labels=answer,zh-CN&template=1-answer.zh-CN.md&title=4%20-%20%E5%8F%AF%E5%86%99%E7%9A%84%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://github.com/webfansplz/vuejs-challenges/issues?q=label%3A4+label%3Aanswer" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <!--info-footer-end-->
