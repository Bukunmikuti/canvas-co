<script setup lang="ts">
import { ref } from "vue";
import { NuxtImg } from "#components";
import brandKit from "/brandKit.svg";
import emptyFolder from "/emptyFolder.svg";
import ColorModal from "~/components/ColorModal.vue";

const isColorModalOpen = ref(false);
const openColorModal = () => {
  isColorModalOpen.value = true;
};
const closeColorModal = () => {
  isColorModalOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center w-[80vw]">
    <div
      style="background: radial-gradient(circle, #d480ff, #eeccff)"
      class="h-[25vh] w-[70vw] rounded-[8px] flex justify-center items-center gap-2 relative"
    >
      <NuxtImg
        :src="brandKit"
        alt=""
        width="300px"
        height="350px"
        class="absolute left-0 bottom-0"
      />
      <h2
        class="text-[#0D0014] text-[44px] font-[700] w-[40%] text-center leading-[47px]"
      >
        Brand kit
      </h2>
    </div>
    <div class="w-[60%] mb-5 mt-[5rem]">
      <div class="flex flex-col items-center justify-center">
        <NuxtImg
          :src="emptyFolder"
          alt=""
          width="200px"
          height="350px"
          class=""
        />
        <h1 class="text-[35px] text-center">No Existing Brand kit</h1>
        <p class="text-[#B3B9C4] text-[23px] text-center mb-5">
          Check your mail we a code to confirm your registration. Input the code
          below
        </p>
      </div>
      <button
        class="text-[18px] text-white font-[700] bg-[#220033] rounded-[8px] py-2 w-full"
        @click="openColorModal"
      >
        Upload Brand Assets
      </button>
    </div>
    <ColorModal
      v-model:open="isColorModalOpen"
      @update:open="(value) => (isColorModalOpen = value)"
    />
  </div>
</template>
