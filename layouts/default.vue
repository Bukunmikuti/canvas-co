<script lang="ts" setup>
import Navbar from '@/components/Layout/Navbar.vue';
import Sidebar from '@/components/Layout/Sidebar.vue';
</script>

<template>
    <div class="font-helvetica [--sidebar-width:15vw]">
        <Navbar />
        <img src="/displayPicture.png" alt="Display Image" class="w-screen" />
        <div class="flex">
            <LayoutSidebar />
            <div class="w-full min-h-[61vh] overflow-auto px-5">
                <slot />
            </div>
        </div>
    </div>
</template>
