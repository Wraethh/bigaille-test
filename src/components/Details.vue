<script setup lang="ts">
const { question } = defineProps<{
  question: string;
}>();
</script>

<template>
  <details>
    <summary>{{ question }}</summary>
    <slot />
  </details>
</template>

<style scoped>
details {
  overflow: hidden;
}
details::details-content {
  block-size: 0;
  transition: block-size 0.5s, content-visibility 0.5s;
  transition-behavior: allow-discrete;
}
details[open]::details-content {
  block-size: auto;
}

summary {
  font-weight: bold;
  border-bottom: 1px solid var(--color-primary);
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
details ul {
  list-style: inside;
}
</style>
