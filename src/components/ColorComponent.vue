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
const textColor = pickTextColorBasedOnBgColorSimple(value, '#FFF', '#000')
</script>

<style scoped>
.color {
  flex-grow: 1;
  height: 140px;
  padding: 1rem;
  overflow: hidden;
  transition: all ease 0.3s;
}

.color a {
  color: inherit;
}

.color:hover {
  height: 200px;
}
</style>
