<script lang="ts" setup>
import * as fabric from 'fabric';
import { defineProps } from 'vue';

const props = defineProps<{
  selectedImage: fabric.FabricImage | null,
}>();

const emit = defineEmits(['replace-image']);
const fileInput = ref<HTMLInputElement | null>(null);

const previewImage = ref<string>(props.selectedImage?.getSrc() || '');

// Handle image upload
const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      emit('replace-image', imageUrl);
      previewImage.value = imageUrl;
    };
    reader.readAsDataURL(input.files[0]);
  }
};
// Function to Remove image
const removeImage = () => {
  previewImage.value = '';
  emit('replace-image', '');
};
</script>

<template>
  <div class="flex justify-center">
    <input
        id="fileInput"
        ref="fileInput"
        accept="image/*"
        class="hidden"
        type="file"
        @change="handleImageUpload"
    />
    <div
        class="cursor-pointer flex flex-col gap-4 justify-between w-fit items-center border-[1.5px] border-dashed border-[#F5D2FF] p-10 rounded-xl bg-[#EECCFF1A]"
    >
      <NuxtImg
          :src="previewImage as string"
          alt=""
          class="w-[290px] h-[170px] cursor-pointer rounded-xl"
          @click="fileInput?.click()"
      />
      <div class="text-red-500 flex items-center gap-2">
        <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"
              fill="currentColor"
          />
        </svg>
        <p @click="removeImage">Remove Image</p>
      </div>
    </div>
  </div>
</template>
