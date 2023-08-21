<template>
  <div class="about">
    <h1>City: {{ city.city }}</h1>

    <h2>Colors:</h2>
    <ul>
      <ColorComponent
        v-for="color in city.palette.colors"
        :key="color.name"
        :name="color.name"
        :value="color.value"
        :description="color.description"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ColorComponent from '@/components/ColorComponent.vue'
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

<style>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
