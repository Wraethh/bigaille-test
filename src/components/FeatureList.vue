<script setup lang="ts">
import type { Component } from "vue";

const { content } = defineProps<{
  content: {
    title: string;
    desc?: string;
    1: {
      title: string;
      icon: Component;
      text: string;
    };
    2: {
      title: string;
      icon: Component;
      text: string;
    };
    3: {
      title: string;
      icon: Component;
      text: string;
    };
  };
}>();
</script>

<template>
  <div class="usp-container flex flex-col text-center gap-12 max-w-6xl mx-auto">
    <div class="usp-header">
      <h2 class="font-bold text-[1.25rem]/[1.33] mb-2">{{ content.title }}</h2>
      <p v-if="content.desc">{{ content.desc }}</p>
    </div>
    <div class="usp">
      <h3>{{ content[1].title }}</h3>
      <component :is="content[1].icon" class="icon" />
      <p>{{ content[1].text }}</p>
    </div>
    <div class="usp">
      <h3>{{ content[2].title }}</h3>
      <component :is="content[2].icon" class="icon" />
      <p>{{ content[2].text }}</p>
    </div>
    <div class="usp">
      <h3>{{ content[3].title }}</h3>
      <component :is="content[3].icon" class="icon" />
      <p>{{ content[3].text }}</p>
    </div>
  </div>
</template>

<style scoped>
.usp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
}
.icon {
  width: 2rem;
  height: 2rem;
}
h3 {
  font-weight: bold;
}

@media (min-width: 768px) {
  .usp-container {
    display: grid;
    align-items: start;
    grid-template-areas:
      "a a a"
      "b c d";
  }

  .usp-header {
    grid-area: a;
  }
  .usp:nth-child(2) {
    grid-area: b;
  }
  .usp:nth-of-type(3) {
    grid-area: c;
  }
  .usp:nth-child(4) {
    grid-area: d;
  }
}
</style>
