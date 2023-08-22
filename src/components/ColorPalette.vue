<template>
  <div class="colors">
    <RouterLink :to="'/' + color.slice(1)" v-for="color in colors" :key="color" class="color" :style="{ background: color, color: pickTextColorBasedOnBgColorSimple(color) }">
      <p @click="(event) => copyToClipboard(color, event)">{{ color }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { pickTextColorBasedOnBgColorSimple } from '@/utils/color'
const { colors } = defineProps<{ colors: string[]}>()

function copyToClipboard(color: string, e: MouseEvent) {
  e.stopPropagation()
  e.preventDefault()
  navigator.clipboard.writeText(color)
  alert("Value copied")
}
</script>

<style scoped>
.colors {
  width: 100%;
  height: 10rem;
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.color {
  flex: 1;
  padding: 1rem .5rem;
}

.color p {
  font-size: medium;
  font-weight: 600;
}

.color p:hover {
  cursor: pointer;
}
</style>