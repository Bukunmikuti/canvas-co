<script setup lang="ts">
import InstagramTemplate from "~/components/template/DesignTemplate.vue";
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
    <div class="grid grid-cols-4 gap-5">
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
      <InstagramTemplate />
    </div>
  </div>
</template>
