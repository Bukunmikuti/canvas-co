<script setup lang="ts">
import { ref } from "vue";
const isCustomSizeDialogOpen = ref(false);
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();
import CustomSizeDialog from "./CustomSizeDialog.vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:open", "confirm"]);
const closeDialog = () => {
  emit("update:open", false);
  // toast({
  //   title: "Scheduled: Catch up",
  //   description: "Friday, February 10, 2023 at 5:57 PM",
  // });
};

const openCustomSizeDialog = () => {
  isCustomSizeDialogOpen.value = true;
};

const closeCustomSizeDialog = () => {
  isCustomSizeDialogOpen.value = false;
};
</script>

<template>
  <div>
    <Dialog :open="open" @update:open="$emit('update:open', $event)">
      <DialogContent class="h-[80vh] bg-white min-w-[40vw]">
        <DialogHeader>
          <DialogTitle>Make a Design Request</DialogTitle>
          <p class="text-[#C2C7D0] text-[12px]">
            Browse and customize designs made specifically for industries like
            yours
          </p>
        </DialogHeader>

        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="description" class="text-[#5E5E5E] text-sm">
              Add Description
            </Label>
            <Textarea
              id="description"
              placeholder="Add a description about this case"
              class="h-[200px]"
            />
          </div>
          <div class="space-y-2">
            <Select class="w-full bg-black">
              <SelectTrigger>
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent class="bg-white">
                <SelectGroup>
                  <SelectItem value="apple" class="flex gap-2 items-center">
                    Social Media (Square 1:1 )
                    <!-- <div class="h-[24px] w-[24px] border border-[#8993A4]" /> -->
                  </SelectItem>
                  <SelectItem value="banana">
                    Social Media Portrait (Rectangle 4:5)
                  </SelectItem>
                  <SelectItem value="blueberry">
                    Presentation Slide (Rectangle 16:9)</SelectItem
                  >
                  <SelectItem value="grapes">
                    Twitter Post (Rectangle 1200 : 675)</SelectItem
                  >
                  <SelectItem value="pineapple">
                    Twitter Header (Rectangle 1500 : 500)
                  </SelectItem>
                  <SelectItem value="pineapple">
                    Instagram Story (Rectangle 1080 : 1920)
                  </SelectItem>
                  <SelectLabel
                    class="cursor-pointer"
                    @click="openCustomSizeDialog"
                    >Custom Size</SelectLabel
                  >
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-2">
            <Label for="document" class="text-[#5E5E5E] text-sm">
              Supporting Document (optional)
            </Label>
            <div
              class="border border-dashed flex justify-center items-center py-5 flex-col"
            >
              <div>
                <p class="text-sm text-[#C655FF]">
                  Click to upload
                  <span class="text-[#475367]">or drag and drop</span>
                </p>
                <div class="flex text-[#98A2B3] text-center text-sm">
                  <p>OR</p>
                </div>
                <p class="text-[#98A2B3] text-xs">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <button
                class="bg-[#A900FF] text-white text-sm px-3 py-1 rounded-sm"
              >
                Browse Files
              </button>
            </div>
          </div>
        </div>

        <!-- Custom Dialog  -->
        <CustomSizeDialog
          v-model:open="isCustomSizeDialogOpen"
          @confrim="closeCustomSizeDialog"
        />
        <!-- Custom Dialog  -->

        <DialogFooter>
          <button
            class="text-white w-full py-2 rounded-[8px] bg-[#A900FF]"
            @click="closeDialog"
          >
            Make Request
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
