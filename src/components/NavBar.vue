<script setup lang="ts">
import { ref } from "vue";
import Button from "./ui/button/Button.vue";
import { Package, PackageOpen, X, Mail, BriefcaseBusiness, Home } from "lucide-vue-next";

const links = [
  { to: "/", text: "Accueil", icon: Home },
  { to: "/espace-pro", text: "Espace Pro", icon: BriefcaseBusiness },
  { to: "/contact", text: "Contact", icon: Mail },
];

const mobileNavOpen = ref(false);

function openMobileNav() {
  mobileNavOpen.value = true;
}

function closeMobileNav() {
  mobileNavOpen.value = false;
}

function handleClickOutsideNav(e: Event) {
  const target = e.target as HTMLDivElement;
  if ([...target.classList].includes("mobile-menu-bg")) {
    closeMobileNav();
  }
}
</script>

<template>
  <header class="flex-none py-4 px-4 pr-6 bg-secondary">
    <nav class="flex justify-between" aria-label="Navigation principale">
      <div class="logo-container grid place-items-center max-w-36">
        <RouterLink to="/">
          <img src="../assets/logo-dark.png" alt="" />
        </RouterLink>
      </div>

      <ul class="hidden justify-center items-center gap-4 py-2.5 font-bold sm:flex">
        <li v-for="link in links">
          <RouterLink :to="link.to">{{ link.text }}</RouterLink>
        </li>
      </ul>

      <Button variant="ghost" size="icon-lg" class="sm:hidden" @click="openMobileNav">
        <Package v-if="!mobileNavOpen" class="icon" />
        <PackageOpen v-else class="icon" />
      </Button>
    </nav>

    <!-- --- Mobile nav menu --- -->
    <Transition name="mobileNav">
      <div
        class="mobile-menu-bg fixed left-0 top-0 w-svw h-svh flex justify-center items-center sm:hidden z-10"
        role="dialog"
        aria-modal="true"
        v-if="mobileNavOpen"
        @click="handleClickOutsideNav"
      >
        <nav
          class="mobile-menu relative bg-secondary w-2/3 h-2/3 shadow-2xl"
          aria-label="Navigation principale mobile"
        >
          <div class="flex flex-col justify-center items-center size-full">
            <div class="mobile-menu-header absolute top-0 right-0">
              <Button variant="ghost" size="icon-lg" @click="closeMobileNav">
                <X />
              </Button>
            </div>

            <ul class="flex flex-col justify-center items-center gap-12">
              <li v-for="link in links" class="text-xl font-bold">
                <RouterLink :to="link.to" @click="closeMobileNav" class="flex gap-3">
                  <component :is="link.icon" class="mobile-icon" />
                  <p>{{ link.text }}</p>
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobileNav-enter-active,
.mobileNav-leave-active {
  transition: top 0.5s ease;
}

.mobileNav-enter-from,
.mobileNav-leave-to {
  top: -100%;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-primary);
}
.mobile-icon {
  stroke-width: 3;
}
</style>
