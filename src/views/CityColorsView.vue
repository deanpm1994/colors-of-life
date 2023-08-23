<template>
  <div class="city-colors">
    <h1>{{ city.city }}</h1>
    <p>Madrid</p>

    <CityColors :colors="city.palette.colors" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useThemeStore } from '@/stores/theme';
import CityColors from '@/components/CityColors.vue'
const route = useRoute()

const city = ref({})
const theme = useThemeStore()

try {
  city.value = route.matched[0].props.default.city
  theme.changeColors(city.value.palette.colors[0].value, city.value.palette.colors[1].value)
} catch {
  throw new Error('No city data available with router')
}
</script>

<style>
.city-colors {
  padding: 2rem;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  max-height: 100%;
  position: relative;
}

.city-colors:before {
  content: '';
  background: white;
  opacity: .4;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
