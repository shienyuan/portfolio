<template>
  <footer class="flex justify-center">
    <span class="text-sm text-gray-500">v{{ version }}</span>
  </footer>
</template>

<script lang="ts" setup>
import { version } from '../package.json'
</script>
