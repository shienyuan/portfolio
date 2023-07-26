<template>
  <div></div>
</template>

<script lang="ts" setup>
onBeforeMount(async () => {
  await navigateTo({
    path: '/about',
  })
})
</script>

<style scoped></style>
