<template>
  <RouterLink :to="colorUrl" class="color" :style="{ background: value, color: textColor }">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import { pickTextColorBasedOnBgColorSimple } from '@/utils/color'

const { name, value, description } = defineProps<{
  name: string
  value: string
  description?: string
}>()

const colorUrl = '/' + value.slice(1, value.length)
const textColor = pickTextColorBasedOnBgColorSimple(value)
</script>

<style scoped>
.color {
  flex-grow: 1;
  padding: 1rem;
}

.color a {
  color: inherit;
}
</style>
