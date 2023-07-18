<template>
  <div>
    <div class="bg-gray-100 p-5 rounded-xl">
      <div :class="showMoreIntro ? '' : ''">
        <h2 class="font-semibold text-gray-500 mb-1">
          Hey There!
        </h2>
        <p class="mb-6">
          I'm Shien[shee-en], a <span class="font-bold">Full-stack Web Developer</span> and <span class="font-bold">Designer</span> specialising in comprehensive web solutions. From visually appealing business websites to complex web applications, I have the expertise to handle the entire software development cycle, providing end-to-end web solutions.
        </p>
        <div v-if="!showMoreIntro" class="text-center">
          <AppButton @click="showMoreIntro=true">
            More about me
          </AppButton>
        </div>
      </div>

      <div :class="showMoreIntro ? '' : 'hidden'">
        <h2 class="font-semibold text-gray-500 mb-1">
          The professional me:
        </h2>
        <p class="mb-4">
          When it comes to web development, I rely on modern stacks like <span class="font-bold">Vue.js</span>,  <span class="font-bold">Golang</span> and <span class="font-bold">GCP</span>. I stay updated with evolving technologies and engage with leading resources such as GitHub, Dev.to, and Stack Overflow. Collaboration is my passion, and I enjoy working with people to achieve exceptional results
        </p>
        <p class="mb-6">
          What sets me apart is my talent for combining seamless functionality with beautiful design. I have a great eye for aesthetics and love creating experiences that put users first. From start to finish, I take pride in being the creative force behind all my personal works, including this portfolio site that showcases my versatile skills as both a designer and a developer.
        </p>

        <h2 class="font-semibold text-gray-500 mb-1">
          The everyday me:
        </h2>
        <p class="mb-4">
          But hey, life isn't just about coding! When I'm not immersed in lines of code, you'll find me embracing a variety of hobbies. I enjoy hitting the gym, indulging in woodworking projects, exploring my culinary skills, and capturing moments through photography. Oh, and did I mention I'm a total cat lover?
        </p>
        <p>Ultimately, my goal is to create meaningful web applications that have a positive impact on people's lives. So, let's connect and join forces to create something truly extraordinary together!"</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMoreIntro = ref(false)

</script>
