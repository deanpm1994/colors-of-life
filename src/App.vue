<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import chroma from 'chroma-js'

import { useThemeStore } from '@/stores/theme'

const route = useRoute()

const theme = useThemeStore()
const primary = computed(() => theme.primary)
const secondary = computed(() => theme.secondary)

const darkenSecondary = computed(() => chroma(secondary.value).darken().hex())

const backgroundImage = computed(() => `url(/images${route.path}.jpg)`)
const hasImage = computed(() => route.name?.toString().startsWith('country'))
const hasColor = computed(() => !!route.params.color)

</script>

<template>
  <main :class="{ image: hasImage, color: hasColor }">
    <div class="container">
      <RouterView :key="$route.path"/>
    </div>
  </main>
</template>

<style scoped>
main {
  grid-area: main;
  display: flex;
  padding: 1rem 0;
  overflow: auto;
  position: relative;
}

main.image::before {
  filter: grayscale(80%) opacity(.7);
  background-image: linear-gradient(to right, v-bind(darkenSecondary), 40%, transparent, 60%, v-bind(darkenSecondary)),
    v-bind(backgroundImage);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  top: 0;
  background-blend-mode: overlay;
  z-index: -1;
}
main.color::before {
  filter: opacity(.4);
  background: linear-gradient(to right, v-bind(primary), 20%, white, 80%, v-bind(secondary));
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  top: 0;
  z-index: -1;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
}
</style>
