<script setup lang="ts">
import {
  LogOut,
  Settings,
  ChartColumnBig,
  House,
  Banknote,
} from "lucide-vue-next";
import { ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const pathname = router.path;

const menuList = ref([
  { name: "Dashboard", icon: House, path: "/dashboard" },
  { name: "Templates", icon: ChartColumnBig, path: "/templates" },
  { name: "Notifications", icon: ChartColumnBig, path: "/notifications" },
  { name: "Brand Asset", icon: Banknote, path: "/brand-asset" },
  { name: "Settings", icon: Settings, path: "/settings" },
]);
</script>

<template>
  <div
    class="w-[15vw] bg-white h-[100vh] fixed left-0 flex flex-col justify-between border-r"
  >
    <div>
      <div
        class="flex flex-wrap justify-center items-center gap-2 py-[2rem] border-b max-h-[12vh]"
      >
        <NuxtImg
          src="/canvasLogo.svg"
          alt="Nuxt Logo"
          width="30"
          height="30"
          class="w-[25px] h-[25px]"
        />
        <p class="text-purple-900 text-2xl font-[500]">Canvas&Co</p>
      </div>
      <ul class="my-10 space-y-5 text-[#42526D]">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :style="
            pathname.startsWith(item.path)
              ? 'background: linear-gradient(180deg, #F5D2FF 100%, #380055 0%)'
              : ''
          "
          :class="`py-5 pl-10`"
        >
          <div class="border-l-[4px] border-red-500 z-10" />
          <a :href="`${item.path}`" class="flex items-center gap-2">
            <component
              :is="item.icon"
              :class="`w-5 h-5  ${
                pathname.includes(item.path) ? 'text-white' : 'text-[#42526D]'
              }`"
            />
            <p
              :class="`${
                pathname.includes(item.path)
                  ? 'text-[#091E42] font-[700]'
                  : 'text-[#42526D]'
              }`"
            >
              {{ item.name }}
            </p>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex ml-10 mb-[4rem]">
      <h1 to="/" class="text-red-500 text-base flex gap-2 items-center">
        <LogOut icon="material-symbols-light:logout" width="24" height="24" />
        Log Out
      </h1>
    </div>
  </div>
</template>
