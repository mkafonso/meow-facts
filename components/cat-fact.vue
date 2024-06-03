<template>
  <div class="w-full md:max-w-lg space-y-8">
    <h2 class="font-semibold text-lg uppercase">Cat fact:</h2>

    <p class="text-main-400 font-medium">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
      provident excepturi quis, ipsam quod, temporibus impedit, quasi dicta
      suscipit esse nisi dolores consectetur molestiae modi quae at magnam in
      quisquam?
    </p>

    <button
      class="h-11 rounded-md bg-main-400 hover:bg-main-300 transition text-main-100 font-semibold px-4 flex items-center gap-2 uppercase text-sm"
    >
      <Icon name="material-symbols:refresh" />
      Get a random cat fact
    </button>
  </div>
</template>

<script>
export default {
  name: "CatFact",
};
</script>
