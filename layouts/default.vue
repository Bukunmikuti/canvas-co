<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
import Sidebar from "~/components/layout/sidebar.vue";
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="ml-[15vw] max-w-[85vw]">
      <Navbar />
      <div class="mx-10 mt-[15vh]">
        <slot />
      </div>
    </div>
  </div>
</template>
