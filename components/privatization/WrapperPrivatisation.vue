<template>
  <div class="w-full relative transition-all duration-700">
    <div class="bg py-8 transform md:flex justify-between px-5 items-center">
      <div class="space-y-4 py-4">
        <Tag text="toute la semaine" class="bg-red text-sm w-fit mx-auto" />
        <p class="text-white mt-2 font-poppins">
          Privatisation du food truck pour déjeuner, goûter ou dîner (ou tout à la fois !)
        </p>
        <h4 class="text-white font-poppins font-bold text-2xl">
          Dès 50 gourmands, on débarque chez vous
        </h4>
        <div class="md:flex items-center space-x-2 mt-2">
          <span class="font-poppins text-white text-xl">
            Déplacement dans le 42 & 69
          </span>
          <span class="bg-light-black text-xl font-permanent rounded-full px-3 py-1 text-white">
            Service à <span class="text-blue">D</span><span class="text-white">O</span><span class="text-red">MICILE</span>
          </span>
        </div>
      </div>

      <div>
        <a
          href="/contact"
          class="bg-white hover:-rotate-6 w-fit block transition-all transform px-3 py-2 rounded text-base border-2 font-poppins font-bold"
        >
          Demander un devis
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "../ui/Tag.vue";
</script>

<style scoped>
.bg {
  background-image: url("~/assets/images/svg/black-wrapper.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100%;
}
</style>
