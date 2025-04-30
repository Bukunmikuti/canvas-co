<script setup lang="ts">
import templates from '~/data/templates.json';

const activeTab = ref("template");
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center mt-4">
      <div class="w-[40%] text-center">
        <h1>Design Tailored for you</h1>
        <p class="text-text-gray">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus..
        </p>
      </div>
    </div>

    <div class="flex my-5 font-medium text-purple">
      <button
        :class="
          activeTab === 'template'
            ? 'bg-buttonColor text-white rounded-[56px]'
            : ''
        "
        class="py-2 cursor-pointer px-7"
        @click="activeTab = 'template'"
      >
        Template
      </button>
      <button
        :class="
          activeTab === 'customise'
            ? 'bg-buttonColor text-white rounded-[56px]'
            : ''
        "
        class="py-2 cursor-pointer px-7"
        @click="activeTab = 'customise'"
      >
        Customise
      </button>
      <button
        :class="
          activeTab === 'review'
            ? 'bg-buttonColor text-white rounded-[56px]'
            : ''
        "
        class="py-2 cursor-pointer px-7"
        @click="activeTab = 'review'"
      >
        Review
      </button>
      <button
        :class="
          activeTab === 'download'
            ? 'bg-buttonColor text-white rounded-[56px]'
            : ''
        "
        class="py-2 cursor-pointer px-7"
        @click="activeTab = 'download'"
      >
        Download
      </button>
    </div>

         <div class="text-2xl">
                <!-- Freebies Designs  -->
                <div class="">
                    <p class="text-[18px] font-[500]">Freebies</p>
                    <div class="flex gap-10">
                        <DashboardDesignCard
                            v-for="(template, index) in templates"
                            :key="index"
                            :template="template"
                        />
                    </div>
                </div>

                <!-- Limited Editions Designs  -->
                <!--        <div class="mt-10">-->
                <!--          <p>Limited Edition</p>-->
                <!--          <DesignsCard :design="DesignPoster" />-->
                <!--        </div>-->

                <!-- Premium Designs  -->
                <!--        <div class="mt-10">-->
                <!--          <p>Premium</p>-->
                <!--          <DesignsCard :design="DesignPoster" />-->
                <!--        </div>-->
            </div>

  </div>
</template>
