<script setup lang="ts">

const click1 = (event) => {
  console.log('click1')
}

const click2 = (event) => {
  console.log('click2')
}

</script>

<template>
  <div @click="click1">
   <div @click.stop.prevent="click2">
     click me
   </div>
  </div>
</template>
