<template>
  <div class="about">
    <h1>City: {{ city.city }}</h1>

    <CityColors :colors="city.palette.colors" />
  </div>
</template>

<script setup lang="ts">
import CityColors from '@/components/CityColors.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const city = ref({})

try {
  city.value = route.matched[0].props.default.city
} catch {
  throw new Error('No city data available with router')
}
</script>
