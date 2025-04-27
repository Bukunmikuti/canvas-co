<script setup lang="ts">
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

import designImg from "~/public/design.png"

const props = defineProps({
  open:{
    type:Boolean,
    default:true
  },
})

const emit = defineEmits(['update:open'])

const closeModal = () => {
  emit('update:open', false);
}


</script>

<template>
  <Dialog :open="props.open" @update:open="emit('update:open', $event)">
    <DialogContent class="min-w-[60vw] h-[80vh] flex flex-col">
      <div class="grid h-full grid-cols-1 gap-5 md:grid-cols-2 ">
        <div class="space-y-5">
          <div class="flex gap-2">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
          </div>
          <div class="flex gap-2">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
          </div>
          <div class="flex gap-2">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
            <img :src="designImg" alt="Display Image" width="230" height="230" class="w-[230px] h-[230px]">
          </div>
          
        </div>
    
        <div class="flex flex-col">
          <div class="h-full">
          <h3 class="text-purple text-[28px] font-bold">Make Design Request</h3>
          <p class="text-text-gray">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <div class="mt-3">
            <label for="description">Add Description</label>
            <textarea type="text" name="description" class="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 min-h-[200px] placeholder:text-gray-500" placeholder="Add a description about this case" />
          </div>
          <div class="w-full px-3 py-2 mt-1 text-gray-500 border border-gray-300 rounded-md cursor-pointer">
            <p>Select Size</p>
          </div>
          <div class="mt-3">
            <label for="document">Supporting Document (optional)</label>


            <div class="flex flex-col items-center justify-center py-5 mt-1 border border-dashed rounded-md">


              <div class="bg-[#F0F2F5] rounded-full flex justify-center items-center p-3 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#475367" d="M18.42 8.22a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18a1 1 0 0 0 0-2a2 2 0 0 1 0-4a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 0 0 .78.67a3 3 0 0 1 .24 5.84a1 1 0 0 0 .5 1.94a5 5 0 0 0 .17-9.62m-5.71 2.07a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V19a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>
              </div>

              <p class="text-[#A900FF]">Click to Upload <span class="text-black">or drag and drop</span></p>
              <p class="text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>


              <button class="bg-[#A900FF] text-white px-5 py-2 rounded-[6px] mt-5">Browse Files</button>
            </div>
          </div>

        </div>
           <button
          class="text-white w-full py-2 rounded-[8px] bg-purple"
          @click="closeModal"
        >
          Make Request
        </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
