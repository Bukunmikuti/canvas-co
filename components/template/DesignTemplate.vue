<script setup lang="ts">
import { NuxtLink } from "#components";
import { ref } from "vue";
import TemplatePreview from "./TemplatePreview.vue";
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
</script>
<template>
  <div>
    <div
      class="bg-[#D9D9D9] p-10 py-4 flex justify-center items-center h-[200px] w-full rounded-[8px]"
      @click="openModal"
    >
      <!-- <NuxtImg :src="DesignPoster" width="120px" height="150px" /> -->
    </div>
    <p class="text-semibold text-[#220033] mt-3 text-[14px] font-[500]">
      Yellow Essay Writing Prompt Worksheet
    </p>
    <p class="text-[#A6AEBB] text-[12px]">Instagram 1080 x 1350</p>
  </div>
  <TemplatePreview v-model:open="isModalOpen" @confrim="closeModal" />
</template>
