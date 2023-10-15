<script setup lang="ts">
import { inject} from "vue"
const count = inject('count')

// Add a piece of code to make the `count` value get injected into the child component.
</script>

<template>
  {{ count }}
</template>
