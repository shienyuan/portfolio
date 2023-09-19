<template>
  <div></div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<!--<template>-->
<!--  <div>-->
<!--    <HLTabGroup>-->
<!--      <HLTabList class="flex rounded-full bg-gray-100">-->
<!--        <HLTab-->
<!--          v-for="category in Object.keys(categories)"-->
<!--          :key="category"-->
<!--          v-slot="{ selected }"-->
<!--          as="template"-->
<!--        >-->
<!--          <AppButton :class="['w-full', !selected && 'bg-transparent']">-->
<!--            {{ category }}-->
<!--          </AppButton>-->
<!--        </HLTab>-->
<!--      </HLTabList>-->

<!--      <HLTabPanels class="mt-6">-->
<!--        <HLTabPanel-->
<!--          v-for="(works, id) in Object.values(categories)"-->
<!--          :key="id"-->
<!--          class="space-y-6"-->
<!--        >-->
<!--          <AppCard v-for="(w, i) in works" :key="i">-->
<!--            <AppTitle class="font-bold">-->
<!--              {{ w.title }}-->
<!--            </AppTitle>-->
<!--            <AppSubtitle class="text-gray-500">-->
<!--              {{ w.description }}-->
<!--            </AppSubtitle>-->

<!--            <AppHr />-->

<!--            <div class="mb-5 flex flex-col gap-y-3">-->
<!--              <nuxt-link-->
<!--                v-for="(s, j) in w.stacks"-->
<!--                :key="j"-->
<!--                :to="s.link"-->
<!--                target="_blank"-->
<!--              >-->
<!--                <div class="flex gap-3">-->
<!--                  <nuxt-img :src="`/logos/${s.icon}`" width="30" />-->
<!--                  <p>-->
<!--                    {{ s.title }}-->
<!--                  </p>-->
<!--                </div>-->
<!--              </nuxt-link>-->
<!--            </div>-->

<!--            <div>-->
<!--              <nuxt-img :src="`/images/${w.img}`" />-->
<!--            </div>-->
<!--          </AppCard>-->
<!--        </HLTabPanel>-->
<!--      </HLTabPanels>-->
<!--    </HLTabGroup>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--const categories = ref({-->
<!--  'Static Sites': [-->
<!--    {-->
<!--      id: 1,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: 'jamstack.png',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://jamstack.org/',-->
<!--        },-->
<!--        {-->
<!--          icon: 'vue.png',-->
<!--          title: 'Made with Vue 3',-->
<!--          link: 'https://vuejs.org/',-->
<!--        },-->
<!--        {-->
<!--          icon: 'netlify.png',-->
<!--          title: 'Hosted on Netlify',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      id: 2,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: '',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      id: 3,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: '',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--  ],-->
<!--  'Web Apps': [-->
<!--    {-->
<!--      id: 1,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: '',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      id: 2,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: '',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      id: 3,-->
<!--      title: 'Stella',-->
<!--      description: 'Digital Marketing Agency',-->
<!--      img: 'placeholder.png',-->
<!--      link: '#',-->
<!--      stacks: [-->
<!--        {-->
<!--          icon: '',-->
<!--          title: 'Jamstack',-->
<!--          link: 'https://www.netlify.com/',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--  ],-->
<!--})-->
<!--</script>-->
