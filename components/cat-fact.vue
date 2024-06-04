<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useMeowStore } from "../store/meow";

const store = useMeowStore();

const fact = ref<string>("");
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    if (store.isStoreEmpty()) {
      await store.addMoreIfEmpty();
    }
    fact.value = store.readFirstFromStore();
    store.removeFirstFromStore();
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
});

async function fetchNewMeowFact() {
  try {
    isLoading.value = true;
    if (store.isStoreEmpty()) {
      await store.addMoreIfEmpty();
    }
    fact.value = store.readFirstFromStore();
    store.removeFirstFromStore();
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="w-full md:max-w-lg space-y-8">
    <h2 class="font-semibold text-lg uppercase">Cat fact:</h2>

    <Transition name="fade">
      <p v-if="isLoading" class="text-main-400 font-medium transition">
        Fetching...
      </p>
      <p v-else class="text-main-400 font-medium transition">
        {{ fact }}
      </p>
    </Transition>

    <button
      @click="fetchNewMeowFact()"
      class="h-11 rounded-md bg-main-400 hover:bg-main-300 transition text-main-100 font-semibold px-4 flex items-center gap-2 uppercase text-sm"
    >
      <Icon
        name="material-symbols:refresh"
        class="text-lg"
        :class="`${isLoading ? 'animate-spin' : ''}`"
      />
      Get a random cat fact
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "CatFact",
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 600ms ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
