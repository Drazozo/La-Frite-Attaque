<template>
  <div class="bg-light-black pt-20 md:pt-32 pb-56 relative">
    <div class="px-5 md:px-28 space-y-4 lg:w-1/2 relative">

      <!-- Tags personnalisés -->
      <Tag
        text="Fait avec ❤️"
        class="absolute rotate-8 left-5 md:left-28 -top-10 text-sm bg-green"
      />
      <Tag
        text="Sucré / Salé"
        class="absolute right-0 md:right-1/4 -top-12 text-sm bg-clay-orange"
      />

      <!-- SEO (invisible mais utile) -->
      <h2 class="sr-only">
        Contact et privatisation du food truck La Frite Attaque
      </h2>

      <!-- Titre visible -->
      <h3 class="text-white text-xl md:text-2xl">Food Truck ou Traiteur ?</h3>

      <!-- Texte engageant -->
      <p class="text-white text-base font-poppins">
        Envie de privatiser notre food truck pour un mariage, un anniversaire, une soirée d’entreprise ou un festival ? <br />
        Vous avez goûté nos smash burgers ou nos kürtős et vous voulez partager votre avis ? <br />
        Besoin de plus d’infos sur notre carte ou nos formules traiteur ? Écrivez-nous, appelez-nous, on vous répond avec plaisir !
      </p>
    </div>

    <!-- Composant Wrapper (formulaire ou autre contenu) -->
    <div
      class="absolute w-full lg:w-2/3 flex lg:left-1/2 transform lg:-translate-x-1/2 z-40 -bottom-20"
    >
      <Wrapper />
    </div>
  </div>
</template>

<script setup>
import Tag from "../ui/Tag.vue";
import Wrapper from "../Wrapper.vue";
</script>
