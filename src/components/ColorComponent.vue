<template>
  <li class="color" :style="{ background: value, color: textColor }">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { pickTextColorBasedOnBgColorSimple } from '@/utils/color'

const { name, value, description } = defineProps<{
  name: string
  value: string
  description?: string
}>()

const textColor = computed(() => {
  return pickTextColorBasedOnBgColorSimple(value, '#FFF', '#000')
})
</script>

<style>
.color {
  flex-grow: 1;
  height: 140px;
  padding: 1rem;
  overflow: hidden;
  transition: all ease 0.3s;
}

.color:hover {
  height: 200px;
}
</style>
