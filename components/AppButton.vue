<template>
  <button class="bg-gray-300 px-6 py-2 rounded-full" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped>

</style>
