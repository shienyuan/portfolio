<template>
  <button
    class="bg-gray-200 text-gray-700 px-6 py-3 rounded-full"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped></style>
