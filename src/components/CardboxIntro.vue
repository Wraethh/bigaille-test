<script setup lang="ts">
import { onMounted, ref, Transition } from "vue";

const isBoxOpened = ref<boolean>(false);

function openBox() {
  isBoxOpened.value = true;
  sessionStorage.setItem("introPlayed", "true");
  document.body.style.overflow = "";
}

onMounted(() => {
  document.body.style.overflow = "hidden";
});
</script>

<template>
  <Transition name="cardbox">
    <div class="cardbox fixed w-full h-full z-20" v-if="!isBoxOpened">
      <button class="top w-full h-1/2" @click="openBox" aria-label="Cliquez pour ouvrir">
        <span>Bigaille</span>
      </button>
      <div class="bottom w-full h-1/2 border-t-2 border-t-orange-950"></div>
    </div>
  </Transition>
</template>

<style scoped>
.cardbox {
  transform-style: preserve-3d;
  perspective: 600px;
  overflow: hidden;
}
.cardbox-enter-active,
.cardbox-leave-active {
  transition: transform 1s ease-in;
}
.cardbox-enter-from .top,
.cardbox-leave-to .top {
  transform: rotateX(90deg) !important;
}
.cardbox-enter-from .bottom,
.cardbox-leave-to .bottom {
  transform: rotateX(-90deg);
}

.cardbox .top,
.cardbox .bottom {
  background: #ba8c62;
  border-color: #5c452d;
}

.cardbox .top {
  position: relative;
  border: none;
  border-bottom: 2px solid rgb(54, 27, 10);
  transform: rotateX(10deg);
  transform-origin: top;
  transition: transform 1s ease, box-shadow 1s ease;
}
.cardbox .top:hover {
  transform: rotateX(20deg);
  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.139);
}
.cardbox .top span {
  display: block;
  width: fit-content;
  margin: auto;
  text-transform: uppercase;
  color: darkred;
  font: bolder 3rem sans-serif;
  border: 2px solid darkred;
  padding: 1rem;
  rotate: 10deg;
}

.cardbox .bottom {
  transform-origin: bottom;
  transition: transform 1s ease;
}

.cardbox .top::after {
  content: "⬇";
  position: absolute;
  bottom: 0;
  left: 47%;
  color: darkred;
  font-size: 5rem;
  font-weight: bold;
  rotate: 180deg;
  animation: float 0.7s infinite alternate;
}
@keyframes float {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 5%;
  }
}
</style>
