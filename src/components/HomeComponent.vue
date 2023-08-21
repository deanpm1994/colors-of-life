<template>
  <div class="countries">
    <CountryImage city="havana" />
    <CountryImage city="madrid" />
    <CountryImage city="rome" />
    <CountryImage city="lisbon" />
  </div>
</template>

<script setup lang="ts">
import CountryImage from './CountryImage.vue'
</script>

<style>
.countries {
  display: flex;
  flex-wrap: wrap;
}
</style>
