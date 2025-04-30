<template>
    <div class="font-helvetica [--sidebar-width:15vw]">
        <LayoutNavbar />
        <img src="/displayPicture.png" alt="Display Image" class="w-screen" />
        <div class="flex">
            <LayoutSidebar />
            <div class="w-full min-h-[61vh] overflow-auto px-5">
                <slot />
            </div>
        </div>
    </div>
</template>
