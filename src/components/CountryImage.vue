<template>
  <RouterLink :to="city" class="city">
    <h1>{{ cityName }}</h1>
    <img :src="imageSrc" />
  </RouterLink>
</template>

<script setup lang="ts">
const { city } = defineProps<{ city: string }>()

const cityName = city.toUpperCase()
const imageSrc = '/images/' + city + '.jpg'
</script>

<style scoped>
.city {
  flex: 100%;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 24rem;
}

.city:hover img {
  scale: 1.2;
  filter: grayscale(0) contrast(1.4);
}

.city:hover h1 {
  opacity: 0.8;
}

h1 {
  position: absolute;
  font-size: 3.5rem;
  z-index: 1;
  color: white;
  opacity: 0.7;
  transition: all ease 0.3s;
  text-shadow: 1px 1px 2px #ccc;
}

img {
  object-fit: contain;
  width: 100%;
  opacity: 0.7;
  transition: all ease 0.3s;
  filter: grayscale(0.6);
}

@media screen and (min-width: 575px) {
  .city {
    flex: 50%;
  }
}

@media screen and (min-width: 767px) {
  h1 {
    font-size: 5rem;
  }
}

@media (hover: none) {
  h1 {
    opacity: .9;
  }
}
</style>
