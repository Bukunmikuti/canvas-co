<script setup lang="ts">
const isColorModalOpen = ref(false)
const isFontModalOpen = ref(false)
const isSuccessModalOpen = ref(false)

const openColorModal = ()=>{
  isColorModalOpen.value = true
}

const closeColorModal = () => {
  isColorModalOpen.value = false
  isFontModalOpen.value = true
}

const closeFontModal = () => {
  isFontModalOpen.value = false
  isSuccessModalOpen.value = true
}

const closeSuccessModal = () => {
  isColorModalOpen.value = false
  isFontModalOpen.value = false
  isSuccessModalOpen.value = false
}
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col justify-center items-center w-[35%]">
      <NuxtImg src="/icons/folderIcon.svg" alt="folder" class="w-[100px]" />
      <h1 class="text-[35px]">No Existing Brand kit</h1>
      <p class="text-center text-text-gray">
        Check your mail we a code to confirm your registration. Input the code
        below
      </p>
      <button
        class="w-full py-3 my-3 text-white cursor-pointer bg-purple rounded-xl"
        @click="openColorModal"
      >
        Upload Brand Asset
      </button>
    </div>
    <BrandAssetsSetColorModal :open="isColorModalOpen" @update:open="closeColorModal" />
    <BrandAssetsSetFontModal :open="isFontModalOpen" @update:open="closeFontModal" />
    <SuccessModal :open="isSuccessModalOpen" title="Brand Guide Uploaded Successfully" subText="Your Design has been sent successfully and would be reviewed. Check within an hour, although an  email would sent so be rest assured"  @update:open="closeSuccessModal" />
  </div>
</template>
