<script setup lang="ts">
import { ref } from "vue";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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

  // Toast a success or error message
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
      <DialogContent
        class="h-fit max-h-[80vh] overflow-auto bg-white min-w-[40vw] px-10"
      >
        <DialogHeader>
          <DialogTitle>Make a Design Request</DialogTitle>
          <p class="text-[#C2C7D0] text-[14px]">
            Browse and customize designs made specifically for industries like
            yours
          </p>
        </DialogHeader>

        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="description" class="text-[#5E5E5E]">
              Add Description
            </Label>
            <Textarea
              id="description"
              placeholder="Add a description about this case"
              class="h-[200px] text-[12px] font-[500] placeholder:text-[#DBDBDB]"
            />
          </div>
          <div class="p-2 space-y-2 border rounded-[8px]">
            <Select>
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
            <Label for="document" class="text-[#5E5E5E]">
              Supporting Document (optional)
            </Label>
            <div
              class="border border-dashed border-[#D0D5DD] rounded-[16px] flex justify-center items-center py-5 flex-col"
            >
              <div class="text-[10px]">
                <p class="text-[#C655FF]">
                  Click to upload
                  <span class="text-[#475367]">or drag and drop</span>
                </p>
                <div class="flex text-[#98A2B3] text-center">
                  <p>OR</p>
                </div>
                <p class="text-[#98A2B3]">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <button class="bg-[#A900FF] text-white px-3 py-1 rounded-sm">
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
            class="text-white w-full py-2 rounded-[8px] bg-[#220033] py-5 text-[15px]"
            @click="closeDialog"
          >
            Make Request
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
