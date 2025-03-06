<script setup lang="ts">
import {
  LogOut,
  Settings,
  ChartColumnBig,
  House,
  Banknote,
} from "lucide-vue-next";
import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRoute } from "vue-router";

const router = useRoute();
const pathname = router.path;
const activeLink = ref<string>("");

const setActiveLink = (path: string) => {
  activeLink.value = path;
};

onMounted(() => {
  activeLink.value = pathname;
});

const menuList = ref([
  { name: "Dashboard", icon: House, path: "/dashboard" },
  { name: "Templates", icon: ChartColumnBig, path: "/templates" },
  { name: "Notifications", icon: ChartColumnBig, path: "/notifications" },
  { name: "Brand Asset", icon: Banknote, path: "/brand-asset" },
  { name: "Settings", icon: Settings, path: "/settings" },
]);

const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("User signed out successfully");
    // Redirect to login page
    navigateTo("/auth/login");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
</script>

<template>
  <div
    class="w-[15vw] bg-white h-[100vh] fixed left-0 flex flex-col justify-between border-r"
  >
    <div>
      <div
        class="flex flex-wrap justify-center items-center gap-2 py-[2rem] border-b h-[12vh]"
      >
        <NuxtImg
          src="/canvasLogo.svg"
          alt="Nuxt Logo"
          width="30"
          height="30"
          class="w-[25px] h-[25px]"
        />
        <p class="text-purple-900 text-[20px] font-[500]">Canvas&Co</p>
      </div>
      <ul class="my-10 space-y-10 text-[#42526D]">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :style="
            activeLink.includes(item.path)
              ? 'background: linear-gradient(180deg, #F5D2FF 100%, #380055 0%)'
              : ''
          "
          :class="`py-5 pl-10`"
          @click="() => setActiveLink(item.path)"
        >
          <div class="border-l-[4px] border-red-500 z-10" />
          <NuxtLink
            :to="`${item.path}`"
            class="flex items-center gap-2 no-underline"
          >
            <component
              :is="item.icon"
              :class="`w-8 h-8  ${
                activeLink.includes(item.path) ? 'text-white' : 'text-[#42526D]'
              }`"
            />
            <p
              :class="`${
                activeLink.includes(item.path)
                  ? 'text-[#091E42] font-[600]'
                  : 'text-[#42526D]'
              } h-full`"
            >
              {{ item.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <button class="flex ml-10 mb-[4rem]" @click="logout">
      <h1 to="/" class="text-red-500 text-[15px] flex gap-2 items-center">
        <LogOut icon="material-symbols-light:logout" width="24" height="24" />
        Log Out
      </h1>
    </button>
  </div>
</template>
