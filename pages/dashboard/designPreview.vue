<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DesignPoster from "/designPoster.svg";
import { NuxtImg } from "#components";
</script>

<template>
  <div class="flex mt-[-2vw]">
    <div class="p-10 flex justify-center items-center w-[55vw]">
      <NuxtImg :src="DesignPoster" class="h-[80vh]" />
    </div>
    <div
      class="border-l fixed right-0 h-full w-[25vw] text-[#C2C7D0] text-[12px]"
    >
      <div class="border-b p-5 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex gap-1">
            <Avatar class="h-[20px] w-[20px]">
              <AvatarImage
                src="https://github.com/radix-vue.png"
                alt="@radix-vue"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p class="text-[14px] font-semibold">Ezer Team</p>
          </div>
          <p>30 mins ago</p>
        </div>
        <p class="line-clamp-5">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
      <div class="border-b p-5 space-y-4">
        <div class="flex items-center justify-between">
          <p>30 mins ago</p>
          <div class="flex gap-1">
            <Avatar class="h-[20px] w-[20px]">
              <AvatarImage
                src="https://github.com/radix-vue.png"
                alt="@radix-vue"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p class="text-[14px] font-semibold">Ezer Team</p>
          </div>
        </div>
        <p class="line-clamp-5">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
    </div>
  </div>
</template>
