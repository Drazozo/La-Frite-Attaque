<template>
  <div>
    <!-- Balise SEO -->
    <h1 class="sr-only">
      Privatisation – Food truck La Frite Attaque pour vos événements en Rhône-Alpes
    </h1>

    <HeroPrivatization :data="data" />
    <Domains :link="link" />
    <CallToAction />
    <StepTitle />
    <BrandIntro :presentations="brandData.slice(0, 6)" />

    <!-- Brochure de présentation -->
    <div class="bg-white py-16 px-5 md:px-28">
      <h2 class="text-2xl md:text-4xl font-bold text-center mb-6 text-azure">
        📄 Découvrez notre brochure
      </h2>
      <p class="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Envie d’avoir toutes les infos en un clin d’œil ? Voici notre livret de présentation complet pour les événements privés, pros ou publics. À partager sans modération !
      </p>

      <!-- Version desktop avec iframe -->
<div class="hidden md:block">
  <div
    class="relative w-full"
    style="height: 600px; box-shadow: 0 2px 8px rgba(63,69,81,0.16); border-radius: 8px; overflow: hidden;"
  >
    <iframe
      loading="lazy"
      class="absolute w-full h-full top-0 left-0 border-none"
      src="https://www.canva.com/design/DAGmOluDOU0/44DVVi0_Svb-cAvKQhSMNg/view?embed"
      allowfullscreen
    ></iframe>
  </div>
<p class="text-sm text-gray-600 text-center mt-2">
  Cliquez sur l'affichage pour passer à la page suivante.
</p>

  <div class="text-center mt-4">
    <a
      href="https://www.canva.com/design/DAGmOluDOU0/44DVVi0_Svb-cAvKQhSMNg/view"
      target="_blank"
      rel="noopener"
      class="underline text-azure hover:text-red text-sm"
    >
      👉 Ouvrir dans un nouvel onglet
    </a>
  </div>
</div>


      <!-- Version mobile : lien seul -->
      <div class="md:hidden text-center mt-4">
        <a
          href="https://www.canva.com/design/DAGmOluDOU0/44DVVi0_Svb-cAvKQhSMNg/view"
          target="_blank"
          rel="noopener"
          class="underline text-azure hover:text-red text-base font-medium"
        >
          📄 Voir la plaquette de présentation
        </a>
      </div>
    </div>

    <ContactPrivatization />
    <BrandIntro :presentations="brandData.slice(6)" />
    <Testimonials />
  </div>
</template>

<script setup>
import HeroPrivatization from "~/components/privatization/HeroPrivatization.vue";
import Domains from "~/components/Domains.vue";
import CallToAction from "~/components/privatization/CallToAction.vue";
import StepTitle from "~/components/privatization/StepTitle.vue";
import BrandIntro from "~/components/BrandIntro.vue";
import ContactPrivatization from "~/components/privatization/ContactPrivatization.vue";
import Testimonials from "~/components/Testimonials.vue";
import { brandData } from "~/data/brandData.js";

useHead({
  title: "Privatisation – La Frite Attaque | Food Truck pour vos événements",
  meta: [
    {
      name: "description",
      content:
        "Envie de marquer les esprits ? Privatisez le food truck La Frite Attaque pour vos événements en Rhône-Alpes. Smash burgers, frites maison, crêpes et bubble waffles : tout est fait à la commande, avec le sourire et la frite croustillante !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

const data = ref({
  title: `Privatisez La Frite Attaque pour un événement qui déchire 🍟`,
  description: `Envie de marquer les esprits ? La Frite Attaque débarque avec son food truck 100 % street food pour régaler vos invités à Lyon, Roanne ou partout en Rhône-Alpes. Smash burgers, frites maison, crêpes et bubble waffles : tout est fait à la commande, avec le sourire et la frite croustillante !`,
  link: {
    text: "Voir la carte spéciale événements",
    to: "/la-carte-privatisation",
  },
});

const link = ref({
  text: "Voir la carte spéciale événements",
  to: "/la-carte-privatisation",
});
</script>
