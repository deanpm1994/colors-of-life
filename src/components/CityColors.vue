<template>
  <ul>
      <ColorComponent
        v-for="color in colors"
        :key="color.name"
        :name="color.name"
        :value="color.value"
        :description="color.description"
      />
    </ul>
</template>

<script setup lang="ts">
import ColorComponent from '@/components/ColorComponent.vue'

const { colors } = defineProps<{ colors: Array<{name: string, value: string, description?: string }> }>()
</script>

<style>
ul {
  height: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  border-radius: 6px;
  overflow: hidden;
}

@media screen and (min-width: 575px) {
  ul {
    grid-template: repeat(auto-fill, 16rem) / repeat(2, 1fr);
  }
}

@media screen and (min-width: 767px) {
  ul {
    grid-template: repeat(auto-fill, 20rem) / repeat(3, 1fr);
  }
}
</style>