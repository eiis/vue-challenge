import { ref, computed } from "vue";

export const counter = ref(1);
export const doubled = computed(() => counter.value * 2);
