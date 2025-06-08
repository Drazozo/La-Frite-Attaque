<template>
  <div class="bg-light-black pt-16 pb-16 px-5 md:px-28 relative">
    <div class="space-y-4 relative">
      <!-- Tags personnalisés -->
      <Tag
        text="ou en bande"
        class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
      />
      <Tag
        text="100% validé"
        class="absolute right-0 -top-12 text-sm bg-clay-orange"
      />

      <!-- Titre principal -->
      <h3 class="text-white text-xl md:text-2xl">
        Solo ou en bande ? On régale tout le monde !
      </h3>

      <!-- Paragraphe principal -->
      <p class="text-white text-sm md:text-base font-poppins">
        Que vous soyez un petit groupe de gourmands ou une grande tablée à nourrir, La Frite Attaque est prête à dégainer ses burgers, frites maison, kürtős et autres douceurs. <br />
        À partir de 50 personnes, notre food truck se privatise rien que pour vous. Mariages, anniversaires, entreprises ou festivals : on s’adapte à votre événement pour vous régaler dans toute l’Auvergne Rhône-Alpes (et plus loin si affinités). <br />
        Le plaisir d’un bon repas, à partager sans modération !
      </p>
    </div>

    <!-- Bloc formulaire ou contact -->
    <div class="mt-5">
      <WrapperPrivatisation />
    </div>
  </div>
</template>

<script setup>
import Tag from "../ui/Tag.vue";
import WrapperPrivatisation from "./WrapperPrivatisation.vue";
</script>
