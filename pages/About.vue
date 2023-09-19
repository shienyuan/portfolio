<template>
  <div
    class="space-y-6 lg:space-y-0 lg:grid gap-6 grid-cols-2 auto-rows-min items-start"
  >
    <AppCard class="lg:min-h-[380px]">
      <div :class="showMoreIntro ? '' : ''">
        <h2 class="text-2xl font-serif">Hey There! 👋</h2>
        <AppHr />
        <p class="mb-6">
          I'm Shien[<span class="italic text-gray-600">shee-en</span>], a
          <span class="font-bold">Full-stack Web Developer</span>
          and
          <span class="font-bold">Designer</span>
          specialising in comprehensive web solutions. From visually appealing
          business websites to complex web applications, I have the expertise to
          handle the entire software development cycle, providing end-to-end web
          solutions.
        </p>
        <div v-if="!showMoreIntro" class="text-center">
          <AppButton @click="showMoreIntro = true"> More about me </AppButton>
        </div>
      </div>

      <div :class="showMoreIntro ? '' : 'hidden'">
        <h2 class="text-gray-500 mb-1">The professional me:</h2>
        <p class="mb-4">
          When it comes to web development, I rely on modern technologies like
          <span class="font-bold">Vue.js, React.js</span>,
          <span class="font-bold">Golang, Node.js</span>
          and cloud solutions like
          <span class="font-bold"
            >GCP <span class="font-normal">and</span> AWS</span
          >. I stay updated with evolving technologies and engage with leading
          resources. Collaboration is my passion, and I enjoy working with
          people to achieve exceptional results
        </p>
        <p class="mb-6">
          What sets me apart is my talent for combining seamless functionality
          with beautiful design. I have a great eye for aesthetics and love
          creating experiences that put users first. From start to finish, I
          take pride in being the creative force behind all my personal works,
          including this portfolio site that showcases my versatile skills as
          both a designer and a developer.
        </p>

        <h2 class="text-gray-500 mb-1">The everyday me:</h2>
        <p class="mb-4">
          But hey, life isn't just about coding! When I'm not immersed in lines
          of code, you'll find me embracing a variety of hobbies. I enjoy
          hitting the gym, indulging in woodworking projects, exploring my
          culinary skills, and capturing moments through photography. Oh, and
          did I mention I'm a total cat lover?
        </p>
        <p>
          Ultimately, my goal is to create meaningful web applications that have
          a positive impact on people's lives. So, let's connect and join forces
          to create something truly extraordinary together!"
        </p>
      </div>
    </AppCard>

    <AppCard class="lg:h-[380px]">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-gray-700 text-sm">I'm based in</p>
          <AppTitle> Auckland, </AppTitle>
          <AppTitle> New Zealand </AppTitle>
          <ClientOnly>
            <p class="text-xs text-gray-700 mt-3">
              {{ timezone }}
            </p>
          </ClientOnly>
        </div>
        <MapPinIcon class="w-[50px] lg:w-[60px] text-gray-400" />
      </div>
      <div class="mt-6">
        <nuxt-img
          class="rounded shadow"
          src="/images/about-1.jpeg"
          height="200"
        />
      </div>
    </AppCard>

    <AboutSocialCard
      class="lg:h-[500px]"
      icon="/logos/github.png"
      link="https://github.com/shienyuan"
      subtitle="/shienyuan"
      title="Github"
    >
      <div>
        <NuxtImg
          class="mb-3"
          src="https://github-readme-stats.vercel.app/api?username=shienyuan&theme=vue&show_icons=true&hide_border=true&count_private=true"
          width="1000"
        />
        <NuxtImg
          src="https://github-readme-streak-stats.herokuapp.com/?user=shienyuan&theme=vue&hide_border=true"
          width="1000"
        />
      </div>
    </AboutSocialCard>

    <AboutSocialCard
      class="lg:h-[500px]"
      icon="/logos/twitter.png"
      link="https://twitter.com/shien__yuan"
      subtitle="@shien__yuan"
      title="Twitter"
    >
      <ClientOnly>
        <a
          class="twitter-timeline"
          data-height="370"
          href="https://twitter.com/shien__yuan?ref_src=twsrc%5Etfw"
          >Tweets by shien__yuan</a
        >
      </ClientOnly>
    </AboutSocialCard>

    <div class="text-center col-span-2">
      <AppButton>
        <a href="/file/shien-yuan-23.pdf" download>Download My CV</a>
      </AppButton>
    </div>

    <!--    <div class="text-center pt-8">-->
    <!--      <p class="mb-4 text-gray-700 italic font-serif text-sm">-->
    <!--        Enough about you Shien...-->
    <!--      </p>-->
    <!--      <AppButton @click="$router.push('/works')">-->
    <!--        Show me the skills!-->
    <!--      </AppButton>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { MapPinIcon } from '@heroicons/vue/24/solid'

const showMoreIntro = ref(false)
const timezone = ref(dayjs().format('DD MMM HH:mm (UTC Z)'))

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://platform.twitter.com/widgets.js'
  script.async = true
  document.head.appendChild(script)
})
</script>
