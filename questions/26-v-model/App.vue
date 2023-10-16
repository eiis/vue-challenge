<script setup lang='ts'>

import { ref } from "vue"
const handler = (event: Event) => {
  value.value = event.target.value
}
/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
*/

interface binding {
  value:string
}

const VOhModel = {
  mounted(el: HTMLInputElement, {value}:binding) {
    el.value = value
    el.addEventListener('input', handler)
  },
  unmounted(el) {
    el.removeEventListener('input', handler)
  }
}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
  <p>{{ value }}</p>
</template>
