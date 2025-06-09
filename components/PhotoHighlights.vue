<template>
  <div class="bg-light-black relative pb-32 lg:pb-24">
    <div class="space-y-5 py-10 px-5 lg:px-28">
      <h2 class="text-white uppercase font-bold text-2xl lg:text-4xl text-center">
        Shoot & Mange : les instants croustillants du truck
      </h2>
      <p class="text-white text-base text-center font-poppins">
        Plongez dans l’univers de Frite Attaque à travers notre galerie. Chaque
        photo capture l’ambiance unique de notre food truck, de son style à
        l’effervescence de nos événements. C’est ici que le goût rencontre
        l’instant magique.
      </p>
    </div>

    <div class="px-2 lg:px-36 h-screen relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-light-black to-transparent z-10" />
      <div class="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-light-black to-transparent z-10" />

      <div class="grid grid-cols-3 gap-4 h-full">
        <!-- Colonne gauche -->
        <div class="gallery-col overflow-hidden">
          <div class="loop-container scroll-up">
            <div class="loop-block">
              <img src="~/assets/images/gallery/01.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
              <img src="~/assets/images/gallery/03.jpg" class="w-full" />
              <img src="~/assets/images/gallery/11.jpg" class="w-full" />
              <img src="~/assets/images/gallery/06.jpg" class="w-full" />
            </div>
            <div class="loop-block">
              <img src="~/assets/images/gallery/01.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
              <img src="~/assets/images/gallery/03.jpg" class="w-full" />
              <img src="~/assets/images/gallery/11.jpg" class="w-full" />
              <img src="~/assets/images/gallery/06.jpg" class="w-full" />
            </div>
          </div>
        </div>

        <!-- Colonne centre -->
        <div class="gallery-col overflow-hidden">
          <div class="loop-container scroll-down">
            <div class="loop-block">
              <img src="~/assets/images/gallery/07.jpg" class="w-full" />
              <img src="~/assets/images/gallery/05.jpg" class="w-full" />
              <img src="~/assets/images/gallery/06.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
              <img src="~/assets/images/gallery/09.jpg" class="w-full" />
            </div>
            <div class="loop-block">
              <img src="~/assets/images/gallery/07.jpg" class="w-full" />
              <img src="~/assets/images/gallery/05.jpg" class="w-full" />
              <img src="~/assets/images/gallery/06.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
              <img src="~/assets/images/gallery/09.jpg" class="w-full" />
            </div>
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="gallery-col overflow-hidden">
          <div class="loop-container scroll-up">
            <div class="loop-block">
              <img src="~/assets/images/gallery/10.jpg" class="w-full" />
              <img src="~/assets/images/gallery/09.jpg" class="w-full" />
              <img src="~/assets/images/gallery/11.jpg" class="w-full" />
              <img src="~/assets/images/gallery/01.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
            </div>
            <div class="loop-block">
              <img src="~/assets/images/gallery/10.jpg" class="w-full" />
              <img src="~/assets/images/gallery/09.jpg" class="w-full" />
              <img src="~/assets/images/gallery/11.jpg" class="w-full" />
              <img src="~/assets/images/gallery/01.jpg" class="w-full" />
              <img src="~/assets/images/gallery/02.jpg" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wrapper intégré proprement -->
    <div class="flex justify-center mt-[-60px] z-40 relative">
      <Wrapper />
    </div>
  </div>
</template>

<script setup>
import Wrapper from './Wrapper.vue'
</script>

<style scoped>
.loop-container {
  display: flex;
  flex-direction: column;
}

.scroll-up {
  animation: scrollUp 25s linear infinite;
}
.scroll-down {
  animation: scrollDown 25s linear infinite;
}

@keyframes scrollUp {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scrollDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

img {
  display: block;
}
</style>
