<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCurrentUser } from "vuefire";
import { Bell, SearchIcon, ChevronDown } from "lucide-vue-next";
import MakeRequestDialog from "../MakeRequestDialog.vue";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const displayName = ref<string | null>(null);
const email = ref<string | null>(null);
const displayPhoto = ref<string | string>("");

onMounted(async () => {
  const user = await getCurrentUser();
  if (!user) {
    return navigateTo("/auth/login");
  } else {
    const currentUser = useCurrentUser();
    displayName.value = currentUser.value?.displayName || null;
    email.value = currentUser.value?.email || null;
    displayPhoto.value = currentUser.value?.photoURL || "";
  }
});

const isOpen = ref(false);

const openDialog = () => {
  isOpen.value = true;
};
const closeDialog = () => {
  isOpen.value = false;
};

// Will work on the menu later
// const isMenuOpen = ref(false);
// const openMenu = () => {
//   isMenuOpen.value = true;
// };

// const closeMenu = () => {
//   isMenuOpen.value = false;
// };
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
          <AvatarImage :src="displayPhoto" alt="@radix-vue" />
          <AvatarFallback>{{ displayName }}</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex gap-2 items-start">
        <div class="leading-[12px]">
          <h1 class="text-[16px] font-[500] text-[#1B293A]" v-if="displayName">
            {{ displayName }}
          </h1>
          <p class="text-[#7A8699] text-[12px]" v-if="email">{{ email }}</p>
        </div>
        <ChevronDown width="20px" height="20px" />
      </div>
      <!-- <Bell color="#A6AEBB" width="20px" class="cursor-pointer" /> -->
      <button
        class="text-[#0D0014] bg-[#EECCFF] px-10 py-3 font-[500] rounded-[2px]"
        @click="openDialog"
      >
        Make a Request
      </button>
      <MakeRequestDialog v-model:open="isOpen" @confirm="closeDialog" />
    </div>
  </div>
</template>
