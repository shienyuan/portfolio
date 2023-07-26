<template>
  <div>
    <HLTabGroup>
      <HLTabList class="flex rounded-full bg-gray-100">
        <HLTab
          v-for="category in Object.keys(categories)"
          :key="category"
          v-slot="{ selected }"
          as="template"
        >
          <AppButton :class="['w-full', !selected && 'bg-transparent']">
            {{ category }}
          </AppButton>
        </HLTab>
      </HLTabList>

      <HLTabPanels class="mt-6">
        <HLTabPanel
          v-for="(works, id) in Object.values(categories)"
          :key="id"
          class="space-y-6"
        >
          <AppCard v-for="(w, i) in works" :key="i">
            <h2 class="font-bold">
              {{ w.title }}
            </h2>
            <h3 class="text-gray-500">
              {{ w.description }}
            </h3>

            <div v-for="(s, j) in works[id].stacks" :key="j">
              <p>{{ s.title }}</p>
            </div>
          </AppCard>
        </HLTabPanel>
      </HLTabPanels>
    </HLTabGroup>
  </div>
</template>

<script setup>
const categories = ref({
  'Static Sites': [
    {
      id: 1,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
        {
          icon: '',
          title: 'Made with Vue.js',
        },
        {
          icon: '',
          title: 'Hosted on Netlify',
        },
      ],
    },
    {
      id: 2,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
      ],
    },
    {
      id: 3,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
      ],
    },
  ],
  'Web Apps': [
    {
      id: 1,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
      ],
    },
    {
      id: 2,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
      ],
    },
    {
      id: 3,
      title: 'Stella',
      description: 'Digital Marketing Agency',
      img: '',
      link: '',
      stacks: [
        {
          icon: '',
          title: 'Jamstack',
        },
      ],
    },
  ],
})
</script>
