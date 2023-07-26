<template>
  <div></div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  await navigateTo({
    path: '/about',
  })
})
</script>

<style scoped></style>
