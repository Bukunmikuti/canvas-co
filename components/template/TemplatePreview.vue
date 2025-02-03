<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter> Save changes </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
