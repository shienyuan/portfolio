<template>
  <AppCard>
    <NuxtLink :to="props.link" target="_blank">
      <div class="flex justify-between justify-start">
        <div>
          <AppTitle>
            {{ props.title }}
          </AppTitle>
          <AppSubtitle>
            {{ props.subtitle }}
          </AppSubtitle>
        </div>

        <div>
          <nuxt-img
            :src="props.icon"
            alt="github logo"
            sizes="sm:40px lg:50px"
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
