<template>
  <div class="task bg-white mx-10 my-5 p-2.5 rounded-3xl shadow-lg px-10 flex justify-between items-center">
    <h3 class="text-lg text-teal-500 font-medium">{{ task.title }}</h3>
    <div class="flex flex-row">
        
      <button>
        <TrashIcon class="h-6 w-6 text-red-400 hover:text-red-700" />
      </button>
      <button>
        <CheckIcon class="ml-3 h-6 w-6 text-green-400 hover:text-green-700" />
      </button>
      <button>
        <HeartIcon class="ml-3 h-6 w-6 text-red-400 hover:text-red-700" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { TrashIcon } from "@heroicons/vue/24/outline"
import { CheckIcon } from "@heroicons/vue/24/outline"
import { HeartIcon } from "@heroicons/vue/24/outline"
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>
