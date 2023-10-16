<script setup>
import { watch, ref } from 'vue'
const value = ref("")

watch(value,()=>{
  value.value = value.value.charAt(0).toUpperCase() + value.value.slice(1)
})

</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>
