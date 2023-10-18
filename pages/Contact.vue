<template>
  <div>
    <div class="flex mb-5">
      <AppButton class="flex items-center me-3" @click="navigateTo('/')">
        <BackspaceIcon class="w-[20px] text-gray-500 me-1" />
        Back
      </AppButton>

      <AppButton class="flex items-center" @click="downloadFile">
        <FolderArrowDownIcon class="w-[20px] text-gray-500 me-1" />
        Download
      </AppButton>
    </div>
    <nuxt-img class="rounded shadow" src="/file/shien-yuan-23.png" />
  </div>
</template>

<script lang="ts" setup>
import { BackspaceIcon, FolderArrowDownIcon } from '@heroicons/vue/24/solid'

const downloadFile = () => {
  const link = document.createElement('a')
  link.href = '/file/shien-yuan-23.pdf'
  link.download = 'shien-yuan-23.pdf'
  link.click()
}
</script>

<style scoped></style>
