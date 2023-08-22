<template>
  <div :key="color">
    <h2>Complementary color</h2>
    <ColorPalette :colors="complementaryColor" />
    
    <h2>Sequential color</h2>
    <ColorPalette :colors="sequentialColor" />

    <h2>Monochromatic color</h2>
    <ColorPalette :colors="monochromaticColors" />
    
    <h2>Analogous color</h2>
    <ColorPalette :colors="analogousColors" />

    <h2>Triadic color</h2>
    <ColorPalette :colors="triadicColors" />
    
    <h2>Tetradic color</h2>
    <ColorPalette :colors="tetradicColors" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import chroma from 'chroma-js'

import Harmony from '@/utils/harmony'
import ColorPalette from '@/components/ColorPalette.vue';

const route = useRoute()
const color = '#' + route.params.color as string
const chormaColor = chroma(color)
const generator = new Harmony(chormaColor, 'rgb')

const complementaryColor = generator.qualitative(2).map(color => color.hex())
const triadicColors = generator.qualitative(3).map(color => color.hex())
const tetradicColors = generator.qualitative(4).map(color => color.hex())
const analogousColors = generator.qualitative(12).map(color => color.hex())
const sequentialColor = generator.qualitative(14).map(color => color.hex())
const monochromaticColors = generator.monochromatic().colors(14, 'hex')
</script>

<style scoped>
.color {
  width: 10rem;
  height: 10rem;
}
</style>

