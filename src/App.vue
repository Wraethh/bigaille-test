<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import CardboxIntro from "./components/CardboxIntro.vue";
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
import Button from "./components/ui/button/Button.vue";
import { ArrowUp } from "lucide-vue-next";
import { onMounted, onUnmounted, ref, Transition } from "vue";
import { RouterView } from "vue-router";

const scrollLength = ref<number>(0);
const skipIntro = ref<boolean>(sessionStorage.getItem("introPlayed") === "true");

function updateScrollLength() {
  scrollLength.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", updateScrollLength);
});

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollLength);
});
</script>

<template>
  <CardboxIntro v-if="!skipIntro" />
  <Toaster />
  <Transition name="scroll-top">
    <Button
      variant="secondary"
      class="fixed bottom-4 right-4"
      v-if="scrollLength"
      @click="scrollTop"
    >
      <ArrowUp />
    </Button>
  </Transition>

  <NavBar />
  <main class="grow">
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <Footer />
</template>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.4s ease;
}
.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s, opacity 0.4s;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
