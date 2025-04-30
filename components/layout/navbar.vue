<script setup lang="ts">
import MakeRequestModal from "../MakeRequestModal.vue";
import SuccessModal from "~/components/SuccessModal.vue";


const isModalOpen = ref(false);
const isSuccessModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  isSuccessModalOpen.value = true
};

const closeSuccessModal = ()=>{
  isSuccessModalOpen.value = false
}
</script>


<template>
  <div class="flex justify-between px-10 py-8 border-b">
    <div class="flex items-center justify-center gap-1">
      <NuxtImg src="/canvasLogo.svg" alt="Ezer" class="w-[35px]" />
      <p class="text-xl font-medium font-helvetica text-primaryColor">Ezer</p>
    </div>
    <Button @click="openModal">Make a Request </Button>
  </div>

  <MakeRequestModal v-model:open="isModalOpen" @update:open="closeModal" />
  <SuccessModal :open="isSuccessModalOpen"   title="Design Request Sent" subText="Your Design has been sent successfully and would be reviewed. Check within an hour, although an  email would sent so be rest assured" @update:open="closeSuccessModal" />
</template>
