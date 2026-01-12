<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
</script>

<template>
  <div class="form-container p-8 sm:p-12">
    <ContactForm
      header-legend="Envie de participer au test, ou bien vous avez une question ?"
      header-desc="Remplissez le formulaire ci-dessous :"
    />
  </div>
</template>
