import { ref, computed, watch, watchEffect } from "vue";
import { scope } from "./App.vue";

scope.run(() => {
const counter = ref(1);
const doubled = computed(() => counter.value * 2);
watch(doubled, () => console.log(doubled.value));
watchEffect(() => console.log(`Count: ${doubled.value}`));

counter.value = 2;

setTimeout(() => {
counter.value = 4;
});
});
