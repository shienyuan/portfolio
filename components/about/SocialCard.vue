<template>
  <AppCard>
    <NuxtLink :to="props.link" target="_blank">
      <div class="flex justify-between justify-start">
        <div>
          <h2 class="text-xl font-bold">
            {{ props.title }}
          </h2>
          <h2 class="text-gray-700">
            {{ props.subtitle }}
          </h2>
        </div>

        <div>
          <nuxt-img
            alt="github logo"
            sizes="sm:40px lg:50px"
            :src="props.icon"
          />
        </div>
      </div>

      <hr class="my-6" />

      <div>
        <slot />
      </div>

      <div />
    </NuxtLink>
  </AppCard>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '#',
  },
})
</script>

<style scoped></style>
