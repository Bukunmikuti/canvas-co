<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NuxtImg } from "#components";
import DesignPoster from "/designPoster.svg";
</script>

<template>
  <div class="flex mt-[-2vw]">
    <div class="p-10 flex justify-center items-center w-[55vw]">
      <NuxtImg :src="DesignPoster" class="h-[80vh]" />
    </div>
    <div
      class="border-l fixed right-0 h-full w-[25vw] text-[#C2C7D0] text-[12px] p-5 space-y-5"
    >
      <Select>
        <SelectTrigger class="bg-[#F0F2F5] rounded-[4px] h-[50px] px-5">
          <SelectValue
            placeholder="Text"
            class="text-[18px] font-[600] text-black"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger class="bg-[#F0F2F5] rounded-[4px] h-[50px] px-5">
          <SelectValue
            placeholder="Image"
            class="text-[18px] font-[600] text-black"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger class="bg-[#F0F2F5] rounded-[4px] h-[50px] px-5">
          <SelectValue
            placeholder="Color"
            class="text-[18px] font-[600] text-black"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
