<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const props = defineProps({
  open:{
    type:Boolean,
    default:true
  }
})

const showColorPicker = ref(false);
const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value;
};

const emit = defineEmits(['update:open'])

const closeModal = () => {
  emit('update:open',false)
}
</script>

<template>
  <Dialog :open="props.open" @update:open="emit('update:open',$event)">
    <DialogContent class="sm:max-w-[425px] md:max-w-[40vw]">
      <DialogHeader>
        <DialogTitle class="text-[#220033] text-[28px] font-[6s00]"
        >Set Colors</DialogTitle
        >
        <DialogDescription class="text-[14px] text-[#C2C7D0]">
          Browse and customize designs made specifically for
          industries like yours
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
      </div>


      <button
          class="w-full bg-[#220033] text-white py-3 rounded-[8px]"
          @click="closeModal"
      >
        Proceed
      </button>
      <p class="underline text-[#D9D9D9] text-center cursor-pointer" @click="closeModal">Skip this step</p>
    </DialogContent>
  </Dialog>
</template>
