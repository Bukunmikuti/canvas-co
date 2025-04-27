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
        >Set Font</DialogTitle
        >
        <DialogDescription class="text-[14px] text-[#C2C7D0]">
          Browse and customize designs made specifically for
          industries like yours
        </DialogDescription>
      </DialogHeader>

     <form class="space-y-5">
       <div class="flex flex-col">
         <label>Select Heading Font</label>
         <select class="rounded-md py-3 border">
           <option value="" disabled >Select Font</option>
         </select>
       </div>
       <div>
         <label>Upload Font</label>

         <div class="border flex flex-col justify-center items-center py-8 rounded-md border-dashed mt-1">
           <div class="bg-[#F0F2F5] rounded-full flex justify-center items-center p-3 mb-5">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#475367" d="M18.42 8.22a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18a1 1 0 0 0 0-2a2 2 0 0 1 0-4a1 1 0 0 0 1-1a5 5 0 0 1 9.73-1.61a1 1 0 0 0 .78.67a3 3 0 0 1 .24 5.84a1 1 0 0 0 .5 1.94a5 5 0 0 0 .17-9.62m-5.71 2.07a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V19a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>
           </div>
           <p class="text-[#A900FF]">Click to Upload <span class="text-black">or drag and drop</span></p>
           <p class="text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
           <button class="bg-[#A900FF] text-white px-5 py-2 rounded-[6px] mt-5">Browse Files</button>
         </div>

         <p class="text-xs text-text-gray mt-2">JPEG, PNG, PDF, supported not larger than 10MB</p>
       </div>
     </form>


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
