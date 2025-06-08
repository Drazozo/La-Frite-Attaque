<template>
  <div
    class="bg-[#070035] h-fit relative flex flex-col md:flex-row w-full rounded-3xl md:rounded-[50px] overflow-visible"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <!-- Balise H1 cachée pour le SEO -->
    <h1 class="sr-only">
      Commander au food truck La Frite Attaque : smash burgers, frites fraîches
      et douceurs maison en Auvergne Rhône-Alpes
    </h1>

    <div
      class="basis-1/2 flex flex-col justify-between p-4 md:p-10 space-y-6"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <h2
        class="flex flex-col font-bold uppercase text-2xl md:text-3xl leading-tight"
      >
        <span class="text-beige">Préparez-vous à</span>
        <span class="text-orange"> faire danser vos papilles !</span>
      </h2>

      <p class="text-beige leading-relaxed">
        Chez <strong>La Frite Attaque</strong>, tout est fait avec ❤️ : tomates
        tranchées minute, patates fraîches du jour, et nos pâtes à
        <em>kürtős</em> & <em>bubble waffles</em> sont 100% maison.
        <br />
        Vous composez, on régale !
      </p>
      <Link
        text="📲 Commander avant 11h (midi) ou 18h (soir)"
        isolateClass="transition hover:scale-105 hover:shadow-md duration-300 w-fit text-xs text-white md:text-sm text-center border-red"
      />
      <ul class="text-beige font-poppins space-y-3 list-disc list-inside">
        <li>
          Choisissez ce qui vous fait saliver (burgers, frites, desserts…).
        </li>
        <li>
          Commandez sur notre plateforme de commande, choissisez l'heure de retrait, payez et c'est prêt ! 
        </li>
        <li>
          Passez en priorité au food truck : c’est chaud, c’est prêt, c’est
          pour vous !
        </li>
      </ul>
    </div>

    <div
      class="basis-1/2 flex justify-end p-2"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <img
  class="w-full md:w-4/5 max-h-[400px] md:max-h-[5050px] object-cover rounded-3xl md:rounded-[50px] transition-transform duration-400 hover:scale-105"
  src="~/assets/images/gallery/presentation.webp"
  alt="Produits faits maison et préparés minute au food truck La Frite Attaque"
/>

    </div>

    <Tag
      text="Bon app’ les gourmands !"
      class="absolute -rotate-8 transform left-1/2 -translate-x-1/2 -bottom-5 px-5 md:text-xl bg-clay-orange"
    />
  </div>
</template>

<script setup>
import Link from "../ui/Link.vue";
import Tag from "../ui/Tag.vue";
</script>
