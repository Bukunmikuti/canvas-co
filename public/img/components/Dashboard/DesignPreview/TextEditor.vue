<script lang="ts" setup>
import { ref, watch } from 'vue';
import * as fabric from 'fabric';

const props = defineProps<{ selectedText: fabric.Text | null }>();

const textContent = ref(props.selectedText?.text || '');

// Watch for prop changes
watch(
    () => props.selectedText,
    (newSelectedText) => {
      textContent.value = newSelectedText?.text || '';
    },
    { immediate: true }
);

// Watch for changes and update the selected text
watch(textContent, (newText) => {
  if (props.selectedText) {
    props.selectedText.set('text', newText);
    props.selectedText.canvas?.renderAll();
  }
});
</script>

<template>
  <div v-if="props.selectedText" class="p-4">
    <h3 class="text-lg font-bold">Edit Text</h3>
    <input
        v-model="textContent"
        class="w-full p-2 border rounded outline-none"
        placeholder="Edit text..."
        type="text"
    />
  </div>
</template>
