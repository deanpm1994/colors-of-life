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
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>