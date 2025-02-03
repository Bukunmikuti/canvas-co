<script setup lang="ts">
import { ChevronRight, SearchIcon } from "lucide-vue-next";
import Designtemplate from "~/components/template/DesignTemplate.vue";
</script>

<template>
  <div>
    <div class="flex justify-center items-center mb-5">
      <div
        style="background: radial-gradient(circle, #d480ff, #eeccff)"
        class="h-[30vh] w-[70vw] rounded-[8px] flex flex-col justify-center items-center gap-2"
      >
        <h2
          class="text-[#0D0014] text-[44px] font-[700] w-[40%] text-center leading-[47px]"
        >
          Design Template
        </h2>
        <p>You can choose from multiples designs, edit to suit your needs</p>
        <div
          class="border border-[#F0F2F5] rounded-[4px] bg-white w-[30vw] flex items-center px-2 gap-2 mt-3"
        >
          <SearchIcon class="text-[#667085] h-[20px] w-[20px]" />
          <input
            placeholder="Make a special design request"
            class="text-[12px] placeholder:text-[#667085] outline-none w-full h-[40px]"
          />
        </div>
      </div>
    </div>
    <div class="my-5 space-y-3">
      <h1 class="font-semibold text-lg">Most Design Trends</h1>
      <div class="grid grid-cols-4 gap-5">
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
      </div>
    </div>
    <div class="my-5 space-y-3">
      <NuxtLink to="/templates/instagramDesign">
        <div class="font-semibold text-lg flex justify-between">
          <p>Instagram Design</p>
          <ChevronRight />
        </div>
      </NuxtLink>
      <div class="grid grid-cols-4 gap-5">
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
      </div>
    </div>
    <div class="my-5 space-y-3">
      <h1 class="font-semibold text-lg">Presentation Slides Design</h1>
      <div class="grid grid-cols-4 gap-5">
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
        <Designtemplate />
      </div>
    </div>
  </div>
</template>
