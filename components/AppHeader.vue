<template>
  <header class="bg-gray-100 rounded-full">
    <nav class="flex items-center justify-between px-5 py-2">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="text-gray-700"> Shien Yuan </NuxtLink>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex justify-end">
        <NuxtLink
          class="text-gray-700"
          to="https://github.com/shienyuan"
          target="_blank"
        >
          <!--          <nuxt-icon class="m-0" name="github" />-->
        </NuxtLink>
      </div>
    </nav>

    <ClientOnly>
      <HLDialog
        class="lg:hidden"
        :open="mobileMenuOpen"
        @close="mobileMenuOpen = false"
      >
        <HLDialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-8 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between md:justify-end">
            <NuxtLink
              class="md:hidden font-bold"
              to="/"
              @click="mobileMenuOpen = false"
            >
              Shien Yuan
            </NuxtLink>
            <button
              type="button"
              class="text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <div class="mt-6">
            <div class="flex flex-col">
              <NuxtLink to="/" class="mb-3" @click="mobileMenuOpen = false">
                About
              </NuxtLink>
              <NuxtLink
                to="/works"
                class="mb-3"
                @click="mobileMenuOpen = false"
              >
                Works
              </NuxtLink>
              <NuxtLink
                to="/resume"
                class="mb-3"
                @click="mobileMenuOpen = false"
              >
                Resume
              </NuxtLink>
              <NuxtLink to="/contact" @click="mobileMenuOpen = false">
                Contact
              </NuxtLink>
            </div>
          </div>
        </HLDialogPanel>
      </HLDialog>
    </ClientOnly>
  </header>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>
