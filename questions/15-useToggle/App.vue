<script setup lang='ts'>
import {Ref, ref} from 'vue'

/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
*/
function useToggle(initialState:boolean = false):[Ref<boolean>, () => void] {
  const state = ref(initialState);

  function toggle() {
    state.value = !state.value;
  }

  return [state, toggle];
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>
