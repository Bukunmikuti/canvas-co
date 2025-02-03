<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "lucide-vue-next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
// import { ColorPicker } from "vue3-colorpicker";
// import "vue3-colorpicker/style.css";
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open", "close"]);
const closeDialog = () => {
  emit("update:open", false);
};

// Manage the visibility of the color picker
const showColorPicker = ref(false);
const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value;
};
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent class="sm:max-w-[425px] md:max-w-[40vw]">
      <DialogHeader>
        <DialogTitle class="text-[#220033] text-[28px] font-[6s00]"
          >Set Colors</DialogTitle
        >
        <DialogDescription class="text-[14px] text-[#C2C7D0]">
          Browse and customize designs made specifically for industries like
          yours
        </DialogDescription>
      </DialogHeader>

      <div
        class="bg-[#F0F2F5] rounded-[8px] p-5 py-3 space-y-3 text-medium text-[18px]"
      >
        <p>Primary Color</p>
        <div
          class="border border-dashed border-[#160022] rounded-full w-fit p-2 cursor-pointer"
          @click="toggleColorPicker"
        >
          <Plus :stroke-width="1" color="#160022" />
        </div>
        <div>
          <!-- <ColorPicker
            :is-widget="showColorPicker"
            picker-type="chrome"
            shape="circle"
          /> -->
        </div>
      </div>
      <button
        @click="closeDialog"
        class="w-full bg-[#220033] text-white py-2 rounded-[8px]"
      >
        Proceed
      </button>
    </DialogContent>
  </Dialog>
</template>
