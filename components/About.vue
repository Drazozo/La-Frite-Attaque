<template>
  <div class="bg-beige px-5 lg:px-28 py-20">
    <div class="flex justify-center">
      <Overlay text="L'histoire d'une frite qui a pris le volant"></Overlay>
    </div>
    <div class="lg:flex space-y-5 lg:space-y-0 mt-12 justify-between items-center">
      <div class="transform lg:rotate-6 lg:w-1/2">
        <img
          class="h-[70vh] lg:size-[650px] object-cover border-b-8 border-r-8 border-orange rounded-2xl"
          src="~/assets/images/about.jpg"
          alt="image à propos"
        />
      </div>
      <div class="lg:w-1/2">
        <div
          class="bg-red relative bg lg:w-[500px] mx-auto rounded-3xl px-4 lg:px-8 py-12 space-y-3"
        >
          <h2 class="text-outline text-3xl text-white text-center">
            Enzo, une frite, un rêve
          </h2>

          <p class="font-poppins text-sm lg:text-base">
            Avant, c’était RH, gestion et commerce. Aujourd’hui, ce sont les smash burgers,
            les frites maison, les Kurtos et les bubble waffles.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Frite Attaque, c’est le projet d’un passionné du terrain, qui a décidé de mêler
            le goût du contact, le sens de l’organisation… et surtout le plaisir de
            <b>régaler les gens.</b>
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Basé en Rhône-Alpes, le food truck se déplace là où l’ambiance est au rendez-vous :
            concerts, marchés, fêtes, salons, mariages ou fête d’entreprise.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Et si tu veux privatiser Frite Attaque pour un événement, c’est possible :
            <b>on débarque, on régale</b>, on repart.
            <b>Simple et efficace</b>.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Pas d’enrobage marketing : ici, on parle vrai. Ce qui compte, c’est ce qu’il y a
            dans l’assiette… et <b>le sourire</b> qui vient avec.
          </p>
          <!----<Link
            text="Voir plus"
            isolateClass="w-fit text-white border-blue text-sm lg:text-base bg-red hover:bg-orange"
            class="absolute right-8 -bottom-4"
            to="/"
          ></Link>-->
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="bg-sunbeam text-center rounded-2xl p-3 border-t border-l border-4 border-red"
          >
            <h2 class="text-azure text-2xl lg:text-3xl font-bold">
              <AnimatedCounter :target="item.title" :suffix="item.suffix" />
            </h2>
            <span class="text-azure text-xs leading-3">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
import AnimatedCounter from "./AnimatedCounter.vue";

const stats = ref([
  { title: 8000, suffix: "+", description: "bouches régalées chaque année" },
  { title: 900, suffix: " kg", description: "de frites maison préparées" },
  { title: 6, suffix: " ans", description: "de terrain, de fourneaux et de passion" },
]);
</script>

<style scoped>
.bg {
  background-image: url("~/assets/images/svg/orange-vector.svg");
  background-repeat: no-repeat;
}
</style>
