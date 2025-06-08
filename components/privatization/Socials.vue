<template>
  <div
    class="bg-light-black space-y-3 flex flex-col justify-center items-end py-8 md:py-16 px-5 xl:px-28"
  >
    <p class="md:w-1/2 font-poppins text-end text-2xl text-white">
      Nos burgers font le show… mais ce sont nos clients qui en parlent le mieux !
    </p>
    <p class="text-end text-sm font-poppins text-white">
      Suivez-nous sur nos réseaux sociaux :
    </p>
    <ul class="flex space-x-2">
      <li
        class="transform transition duration-300 hover:-translate-y-1 aspect-square text-white"
        v-for="(social, index) in $socials"
        :key="index"
      >
        <a
          class="text-xl flex items-center justify-center w-full h-full hover:text-orange transition-all duration-300"
          :href="social.to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon :name="social.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { $socials } = useNuxtApp();
</script>
