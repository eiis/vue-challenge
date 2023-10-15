<script setup lang="ts">
import { onMounted, inject,onBeforeUnmount,Ref} from "vue"

const timer = inject<Ref<any>>("timer")
const count = inject<Ref<number>>('count')

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(()=>{
  window.clearInterval(timer.value)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
