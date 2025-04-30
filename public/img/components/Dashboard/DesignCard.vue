<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { NuxtImg } from '#components';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const router = useRouter();
const isHover = ref(false);

// Props
const props = defineProps({
    template: {
        type: Object,
        default: () => ({
            name: '',
            representativeImage: '',
            data: { element: [] },
        }),
    },
});

const useTemplate = (selectedTemplate) => {
    const encodedTemplate = encodeURIComponent(JSON.stringify(selectedTemplate));
    router.push(`/dashboard/designPreview?template=${encodedTemplate}`);
};
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <div
                class="mt-5 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-xl relative"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
            >
                <NuxtImg
                    :src="template.representativeImage"
                    class="h-[170px] w-[200px]"
                    height="100px"
                    width="250px"
                />
                <!-- Template Details  -->
                <div
                    :class="isHover ? 'flex' : 'hidden'"
                    class="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full flex flex-col items-start px-3 py-3 text-[10px]"
                >
                    <p class="text-[12px] font-medium">
                        {{ props.template.name }}
                    </p>
                    <p class="text-[10px] font-normal">Instagram 1080 x 1350</p>
                </div>
            </div>
        </DialogTrigger>
        <DialogContent class="max-w-[90vw] lg:max-w-[50vw]">
            <DialogHeader>
                <DialogTitle class="text-[28px]">Template Preview</DialogTitle>
            </DialogHeader>

            <div class="mb-5 flex flex-col md:flex-row gap-5">
                <div class="relative">
                    <NuxtImg
                        :src="template.representativeImage"
                        class="rounded-[5px]"
                        height="330px"
                        width="330px"
                    />
                </div>
                <div>
                    <h1>{{ template.name }}</h1>
                    <p>Instagram 1080 x 1350</p>
                </div>
            </div>
            <DialogFooter class="w-full">
                <button
                 class="w-full py-4 rounded-[8px] bg-purple text-white"
                    @click="useTemplate(template)"
                   
                >
                    Use this Template
                </button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
