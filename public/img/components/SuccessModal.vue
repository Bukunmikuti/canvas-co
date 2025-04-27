<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog'

  const props = defineProps({
    open:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default:""
    },
    subText:{
      type:String,
      default:""
    }
  })

const emit  = defineEmits(['update:open'])

const closeModal = ()=>{
  emit('update:open',false)
}
</script>

<template>
  <Dialog :open="props.open"  @update:open="emit('update:open', $event)">
    <DialogContent>
     <div class="flex flex-col items-center justify-center text-center">
       <div class="rounded-full bg-button-color p-3">
         <img src="/icons/handsClapping.svg" alt="" >
       </div>
       <h2 class="text-lg font-bold mt-3">{{props.title}}</h2>
       <p class="text-text-gray text-sm">{{props.subText}}</p>
     </div>

      <DialogFooter class="">
     <button class="w-full bg-purple text-white py-3 rounded-xl" @click="closeModal">Return to dashboard</button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
