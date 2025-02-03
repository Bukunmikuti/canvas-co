<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open", "confirm"]);
const closeSizeDialog = () => {
  emit("update:open", false);
};
</script>

<template>
  <div>
    <Dialog :open="open" @update:open="$emit('update:open', $event)">
      <DialogContent class="h-fit bg-white min-w-[40vw]">
        <DialogHeader>
          <DialogTitle class="text-[#220033] text-[28px] font-[700]">
            <p>What size do you need</p>
            <p class="text-[#C2C7D0] text-[14px] font-[400]">
              Browse and customize designs made specifically for industries like
              yours
            </p></DialogTitle
          >
        </DialogHeader>
        <div>
          <div class="grid grid-cols-3 gap-3">
            <div class="flex flex-col gap-2">
              <label>Width</label>
              <input
                type="text"
                placeholder="Input width"
                class="border p-2 rounded-[8px]"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Height</label>
              <input
                type="text"
                placeholder="Input height"
                class="border p-2 rounded-[8px]"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label>Unit</label>
              <select class="border p-2 rounded-[8px]">
                <option></option>
              </select>
            </div>
          </div>
          <div class="flex flex-col gap-2 my-5">
            <select class="border p-2 rounded-[8px]">
              <option></option>
            </select>
          </div>
          <button
            @click="closeSizeDialog"
            class="bg-[#220033] text-white w-full py-3 rounded-[8px]"
          >
            Set Dimension
          </button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
