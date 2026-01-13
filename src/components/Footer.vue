<script setup lang="ts">
import { RouterLink } from "vue-router";
import { toast } from "vue-sonner";

const infosLinks = [
  { to: "/contact", text: "Nous contacter" },
  { to: "/cgu", text: "CGU" },
  { to: "/confidentialite", text: "Politique de confidentialité" },
  { to: "/mentions-legales", text: "Mentions légales" },
];

function showToast() {
  toast.info("Notre page Instagram sera bientôt disponible", {
    description: "Encore un peu de patience !",
    duration: 6000,
    action: {
      label: "Ok",
    },
  });
}
</script>

<template>
  <footer
    class="flex-none bg-primary text-primary-foreground p-6 flex flex-col gap-6 text-center"
  >
    <section class="infos">
      <h2>Informations utiles</h2>
      <ul class="flex flex-col">
        <li v-for="link in infosLinks">
          <RouterLink :to="link.to">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </section>

    <section class="pro">
      <h2>Marques</h2>
      <ul>
        <li>
          <RouterLink to="/espace-pro">Espace Pro</RouterLink>
        </li>
      </ul>
    </section>

    <section class="social">
      <h2>Nous suivre</h2>
      <ul>
        <li>
          <button @click="showToast">Instagram</button>
        </li>
      </ul>
    </section>

    <p class="credits text-xs text-slate-400 text-center mt-8">
      © 2025 Tous droits réservés - Site réalisé avec 🧠 par
      <a href="https://github.com/Wraethh" class="underline">Guillaume Lamourec</a>
    </p>
  </footer>
</template>

<style scoped>
@media (min-width: 640px) {
  footer {
    text-align: left;
    display: grid;
    gap: 1rem;
    grid-template-areas:
      "a b c d"
      "a b e d"
      "f f f f";
  }
  section.infos {
    grid-area: b;
    margin-right: 1rem;
  }
  section.pro {
    grid-area: c;
  }
  section.social {
    grid-area: e;
  }
  p.credits {
    grid-area: f;
  }
}

h2 {
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}
li {
  font-size: 0.75rem;
}

@media (pointer: coarse) {
  .infos ul {
    gap: 0.5rem;
  }
}
</style>
