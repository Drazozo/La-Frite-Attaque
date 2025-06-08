<template>
  <div class="bg-light-black pt-16 relative">
    <div class="space-y-4 pb-10 px-5 md:px-28">
      <div class="relative">
        <Tag
          text="logique"
          class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
        />
        <Tag
          text="100% validé"
          class="absolute right-5 md:right-36 -top-12 text-sm bg-clay-orange"
        />
        <h3 class="text-white text-xl md:text-3xl font-poppins">
          Pourquoi opter pour un food truck pour votre événement
          <span v-html="text"></span> ?
        </h3>
      </div>

      <p class="text-white text-sm md:text-base font-poppins">
        Organiser un événement inoubliable, c’est miser sur l’originalité et la qualité. Avec <strong>La Frite Attaque</strong>, vous offrez à vos invités bien plus qu’un simple repas : une expérience culinaire mobile, gourmande et conviviale !
      </p>

      <ul class="space-y-4 md:w-2/3">
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Des smash burgers et des frites maison</b> : préparés avec des produits frais, nos recettes sont personnalisables à souhait pour satisfaire tous les goûts.
          </p>
        </li>
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Une ambiance qui marque les esprits</b> : notre food truck, c’est aussi un décor, un contact direct, et une énergie qui rend chaque événement vivant.
          </p>
        </li>
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Un service adaptable</b> : que ce soit pour 30 ou 150 personnes, on s’adapte à votre rythme, à votre lieu et à votre timing. Présents dans toute l’Auvergne Rhône-Alpes et au-delà !
          </p>
        </li>
      </ul>
    </div>

    <div class="mt-5 bg-beige py-10 px-5 md:px-28">
      <WrapperPrivatisation />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
import Tag from "../ui/Tag.vue";
import WrapperPrivatisation from "./WrapperPrivatisation.vue";
</script>
