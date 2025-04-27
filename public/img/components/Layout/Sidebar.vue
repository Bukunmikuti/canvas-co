<script setup lang="ts">
import {
  Settings,
  ChartColumnBig,
  House,
  Banknote,
  LogOutIcon,
} from "lucide-vue-next";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const menuList = ref([
  { name: "Dashboard", icon: House, path: "/dashboard" },
  { name: "Templates", icon: ChartColumnBig, path: "/templates" },
  { name: "Notifications", icon: ChartColumnBig, path: "/notifications" },
  { name: "Brand Asset", icon: Banknote, path: "/brand-asset" },
  { name: "Settings", icon: Settings, path: "/settings" },
]);

const router = useRoute();
const pathname = computed(()=>router.path)
</script>

<template>
  <div class="w-[var(--sidebar-width)] border-r max-h-[61vh] px-5 flex flex-col justify-around relative">
  <div>
      <!-- profile card -->
  <div
      class="flex flex-col items-center justify-center -mt-[9rem] mb-7"
      style="z-index: 0"
    >
     <Avatar class="w-[140px] h-[140px] mb-2">
        <AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=Andrea" alt="Ifedolapo Durojaiye" />
        <AvatarFallback>ID</AvatarFallback>
      </Avatar>
      <div>
        <p class="">Ifedolapo Durojaiye</p>
        <p
          class="text-[#7A8699] max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis"
        >
          ifedolapodurojaiye@gmail.com
        </p>
      </div>
    </div>

    <!-- Navbar Links -->
    <div class="flex flex-col items-center lg:items-start">
      <div v-for="menu in menuList" :key="menu.name" class="w-full">
        <NuxtLink
          :to="menu.path"
          class="flex items-center text-[#42526D] gap-4 mb-3 py-2 hover:text-inherit hover:no-underline xl:px-5"
          :class="{
            'lg:bg-[#8D00D4] text-[#8D00D4] lg:text-white lg:hover:text-white rounded-[70px] justify-center':
              pathname.startsWith(menu.path),
          }"
        >
          <component :is="menu.icon" class="w-5 h-5" />
          <p class="hidden lg:flex">
            {{ menu.name }}
          </p>
        </NuxtLink>
      </div>
    </div>
    </div>

  

    <!-- Logout  -->
    <div
      class="flex gap-2 text-red-500 cursor-pointer lg:w-full px-5"
      @click="logout"
    >
      <LogOutIcon />
      <p class="hidden lg:inline">Logout</p>
    </div>
  </div>
</template>
