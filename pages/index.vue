<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-8rem)] max-w-5xl gap-10 m-auto p-4"
  >
    <CatFact />
    <CatImageGrid />
  </div>
</template>

<script>
import CatFact from "../components/cat-fact.vue";
import CatImageGrid from "../components/image-grid.vue";

export default {
  components: {
    CatFact,
    CatImageGrid,
  },
};
</script>
