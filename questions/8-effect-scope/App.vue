<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use `effectScope` API to make these effect stop together after triggered once

const scope1 = effectScope()
scope1.run(() => {
  watch(doubled, () => {
    console.log(doubled.value)
    scope1.stop()
  })
})

const scope2 = effectScope()
scope2.run(() => {
  watchEffect(() => {
    console.log("Count: ", doubled.value)
    scope2.stop()
  })
})

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
