<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DesignTemplate from "./DesignTemplate.vue";
import DesignPoster from "/designPoster.svg";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open", "confirm"]);
const closeDialog = () => {
  emit("update:open", false);
};
</script>

<template>
  <div>
    <Dialog :open="open" @update:open="$emit('update:open', $event)">
      <DialogContent class="max-w-[50vw] h-[90vh] overflow-auto px-10 pt-10">
        <DialogHeader>
          <DialogTitle>Template Preview</DialogTitle>
        </DialogHeader>
        <div>
          <div class="grid grid-cols-2 gap-5 my-5">
            <div
              class="bg-[#F5F6F7] h-[360px] w-[300px] rounded-[3px] flex justify-center items-center"
            >
              <NuxtImg
                :src="DesignPoster"
                alt=""
                class="object-cover h-full py-5"
              />
            </div>
            <div class="">
              <h3>Yellow Essay Writing Prompt Worksheet</h3>
              <p>Instagram 1080 x 1350</p>
            </div>
          </div>
          <button
            class="bg-[#220033] text-white w-full text-[15px] font-[600] rounded-[8px] py-4"
          >
            <NuxtLink to="/templates/templateEdit" class="text-white"
              >Use this template</NuxtLink
            >
          </button>
          <div class="my-3">
            <p class="text-black font-[500]">You might be interested</p>
            <div class="grid grid-cols-2 gap-5 my-3">
              <DesignTemplate />
              <DesignTemplate />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
