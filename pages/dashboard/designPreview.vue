<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import * as fabric from 'fabric';

definePageMeta({
    layout:"navbar-only",
})


const route = useRoute();

// Canvas references
const canvasEl = ref<HTMLCanvasElement | null>(null);
const canvas = ref<fabric.Canvas | null>(null);

// States
const activeTab = ref<'text' | 'image' | 'color'>('text');
const template = ref<any>(null);
const selectedText = ref<fabric.FabricText | null>(null);
const selectedImage = ref<fabric.FabricImage | null>(null);

// Initialize canvas
onMounted(() => {
    if (route.query.template) {
        try {
            // Handle both encoded and raw JSON
            const templateString = route.query.template as string;
            template.value = templateString.startsWith('{')
                ? JSON.parse(templateString)
                : JSON.parse(decodeURIComponent(templateString));
        } catch (e) {
            console.error('Template parsing failed:', e);
            return;
        }
    }

    if (canvasEl.value) {
        canvas.value = new fabric.Canvas(canvasEl.value, {
            width: 580,
            height: 450,
            backgroundColor: '#ffffff',
            preserveObjectStacking: true,
        });

        // Handle text selection
        canvas.value.on('selection:created', (event) => {
            if (event.selected?.length) {
                const activeObject = canvas.value?.getActiveObject();
                if (activeObject instanceof fabric.FabricText) {
                    selectedText.value = activeObject;
                    activeTab.value = 'text';
                } else if (activeObject instanceof fabric.FabricImage) {
                    selectedImage.value = activeObject;
                    activeTab.value = 'image';
                }
            }
        });

        canvas.value.on('selection:cleared', () => {
            selectedText.value = null;
            selectedImage.value = null;
            activeTab.value = 'text';
        });

        // Load elements into canvas
        loadTemplateToCanvas();
    }
});

// Cleanup
onBeforeUnmount(() => {
    if (canvas.value) {
        canvas.value.dispose();
    }
});

// Load template elements
const loadTemplateToCanvas = () => {
    if (!canvas.value || !template.value) {
        console.error('Canvas or template not available');
        return;
    }

    // Clear existing objects (except background)
    canvas.value.getObjects().forEach((obj) => {
        if (obj !== canvas.value!.backgroundImage) {
            canvas.value!.remove(obj);
        }
    });

    // Load and set background image
    if (template.value.representativeImage) {
        fabric.FabricImage.fromURL(template.value.representativeImage)
            .then((img) => {
                const canvasWidth = canvas.value!.width || 0;
                const canvasHeight = canvas.value!.height || 0;

                // Maintain aspect ratio
                const scaleX = canvasWidth / img.width;
                const scaleY = canvasHeight / img.height;
                const scale = Math.min(scaleX, scaleY);

                img.set({
                    left: 0,
                    top: 0,
                    scaleX: scale,
                    scaleY: scale,
                    selectable: true,
                    hasControls: true,
                    lockUniScaling: false,
                });
                canvas.value?.add(img);
                canvas.value?.sendObjectToBack(img);
            })
            .catch((error) => {
                console.error('Error loading image:', error);
            });
    }

    // Add text elements (after clearing previous ones)
    if (template.value.data?.elements) {
        template.value.data.elements.forEach((element: any) => {
            if (element.type === 'text') {
                fabric.Textbox.fromObject({
                    text: element.content || 'Sample Text',
                    left: element.position?.x || 50,
                    top: element.position?.y || 50,
                    fill: element.color || '#000000',
                    fontSize: element.fontSize || 16,
                    fontFamily: element.fontFamily || 'Arial',
                    selectable: true,
                    width: element.width || 200,
                })
                    .then((text) => {
                        canvas.value?.add(text);
                    })
                    .catch((error) => {
                        console.error('Error adding text:', error);
                    });
            } else if (element.type === 'image') {
                fabric.FabricImage.fromURL(element.url)
                    .then((img) => {
                        img.set({
                            left: element.position?.x || 100,
                            top: element.position?.y || 100,
                            scaleX: element.scaleX || 0.5,
                            scaleY: element.scaleY || 0.5,
                            selectable: true,
                            hasControls: true,
                            lockUniScaling: false,
                            isBackground: false,
                        });
                        canvas.value?.add(img);
                    })
                    .catch((error) => {
                        console.error('Error adding image:', error);
                    });
            }
        });
    }
    canvas.value?.renderAll();
};

// Function to replace the selected image
const replaceImage = (newImageUrl: string) => {
    if (!selectedImage.value || !canvas.value) return;

    // Get the current z-index of the selected image
    const objects = canvas.value.getObjects();
    const currentIndex = objects.indexOf(selectedImage.value as any);

    fabric.FabricImage.fromURL(newImageUrl)
        .then((img) => {
            // Keep the same position and scale as the original image
            const original = selectedImage.value!;
            img.set({
                left: original.left,
                top: original.top,
                scaleX: original.scaleX,
                scaleY: original.scaleY,
                angle: original.angle,
                selectable: true,
                hasControls: true,
                lockUniScaling: false,
                // isBackground: original.isBackground
            });

            canvas.value?.remove(original as fabric.FabricImage);
            // Add the new image at the original z-index position
            canvas.value?.insertAt(currentIndex, img);
            selectedImage.value = img;
            canvas.value?.setActiveObject(img);
            canvas.value?.renderAll();
        })
        .catch((error) => {
            console.error('Error replacing image:', error);
        });
};
</script>

<template>
    <div class="flex">
        <a
            class="text-primaryColorBold flex px-5 w-[20vw] pl-[3rem] mt-[5rem] gap-3 decoration-black"
            href="/dashboard"
        >
            <ArrowLeft />
            <p class="hidden lg:flex">Return</p>
        </a>
        <div class="flex flex-col items-center flex-1 p-5 min-w-[50vw]">
            <!-- canvas container  -->
            <div class="relative overflow-hidden border rounded-lg shadow-lg">
                <canvas ref="canvasEl" height="450" width="580"></canvas>
            </div>

            <!-- Controls  -->
            <div
                class="bg-[#FAFBFB] flex mt-5 justify-center gap-5 py-2 rounded-[52px] w-fit px-5"
            >
                <button
                    :class="
                        activeTab === 'text'
                            ? 'bg-buttonColor'
                            : 'text-[#DFE2E6]'
                    "
                    class="rounded-[57px] w-[13rem] py-2"
                    @click="activeTab = 'text'"
                >
                    Text
                </button>
                <button
                    @click="activeTab = 'image'"
                    class="rounded-[57px] w-[13rem] py-2"
                    :class="
                        activeTab === 'image'
                            ? 'bg-buttonColor'
                            : 'text-[#DFE2E6]'
                    "
                >
                    image
                </button>
                <button
                    @click="activeTab = 'color'"
                    class="rounded-[57px] w-[13rem] py-2"
                    :class="
                        activeTab === 'color'
                            ? 'bg-buttonColor'
                            : 'text-[#DFE2E6]'
                    "
                >
                    Color
                </button>
            </div>
        </div>
        <div class="w-[40vw] border-l p-5">
            <DashboardDesignPreviewTextEditor
                v-if="activeTab === 'text'"
                :selectedText="selectedText as fabric.FabricText | null"
            />

            <DashboardDesignPreviewImageEditor
                v-else-if="activeTab === 'image'"
                :selectedImage="selectedImage as fabric.FabricImage | null"
                @replace-image="replaceImage"
            />
        </div>
    </div>
</template>
