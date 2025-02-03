<script setup lang="ts">
import { ref } from "vue";
import { Bell, SearchIcon, ChevronDown } from "lucide-vue-next";
import MakeRequestDialog from "../MakeRequestDialog.vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const isOpen = ref(false);
const isMenuOpen = ref(false);

const openDialog = () => {
  isOpen.value = true;
};
const closeDialog = () => {
  isOpen.value = false;
};

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div
    class="bg-white w-[85vw] h-[12vh] px-10 py-6 fixed top-0 flex justify-between items-center border-b"
  >
    <div class="flex gap-2 border rounded-[10px] border-[#F0F2F5] p-2">
      <SearchIcon class="text-[#667085] h-[20px] w-[20px]" />
      <input
        placeholder="Search anything that comes to mind"
        class="placeholder:text-[#667085] w-[25vw] outline-none text-[12px]"
      />
    </div>
    <div class="flex gap-3 items-center">
      <div class="flex gap-3 items-center">
        <Avatar class="h-[30px] w-[30px]">
          <AvatarImage
            src="https://github.com/radix-vue.png"
            alt="@radix-vue"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex">
        <div>
          <h1 class="text-[16px] font-[500] text-[#1B293A]">
            Ifedolapo Durojaiye
          </h1>
          <p class="text-[#7A8699] text-[12px]">ifedolapodurojaiye@gmail.com</p>
        </div>
        <ChevronDown />
      </div>
      <Bell color="#A6AEBB" width="20px" class="cursor-pointer" />
      <button
        class="text-[#0D0014] bg-[#EECCFF] px-5 py-3 font-semibold"
        @click="openDialog"
      >
        Make a Request
      </button>
      <MakeRequestDialog v-model:open="isOpen" @confirm="closeDialog" />
    </div>
  </div>
</template>
