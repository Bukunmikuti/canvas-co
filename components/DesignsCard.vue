<script setup lang="ts">
import { NuxtImg } from "#components";
import DesignPoster from "/designPoster.svg";
</script>

<template>
  <NuxtLink to="/dashboard/designPreview">
    <div class="bg-[#F5F6F7] p-10 py-4 flex justify-center items-center">
      <NuxtImg :src="DesignPoster" width="120px" height="150px" />
    </div>
    <p class="text-semibold text-[#220033] mt-3">
      Yellow Essay Writing Prompt Worksheet
    </p>
    <p class="text-[#A6AEBB] text-[12px]">Instagram 1080 x 1350</p>
  </NuxtLink>
</template>
