<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true, defualt: "" },
  width: { type: String, required: false, default: "100px" },
  height: { type: String, required: false, default: "100px" },
});
</script>

<template>
  <div class="bg-[#F5F6F7] w-fit p-4 flex flex-col justify-between">
    <div class="flex justify-center items-center h-full">
      <NuxtImg
        :src="props.img"
        :alt="props.title"
        :width="width"
        :height="height"
        class="object-contain"
      />
    </div>
    <div>
      <h1 class="text-purple-800 text-[14px] font-semibold">
        {{ props.title }}
      </h1>
      <p class="text-[#A6AEBB] text-[12px]">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
