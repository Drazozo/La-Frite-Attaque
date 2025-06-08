<template>
  <div>
    <!-- Balise SEO -->
    <h1 class="sr-only">
      Privatisation – Food truck La Frite Attaque pour événements en Rhône-Alpes
    </h1>

    <HeroPrivatization :data="data" />
    <Domains :link="link" />
    <CallToAction />
    <StepTitle />
    <BrandIntro :presentations="brandData.slice(0, 6)" />
    <ContactPrivatization />
    <BrandIntro :presentations="brandData.slice(6)" />
    <Testimonials />
    <!-- On garde un seul formulaire -->
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
        "Privatisez le food truck La Frite Attaque pour vos événements privés ou professionnels en Rhône-Alpes. Smash burgers, frites maison, crêpes et bubble waffles au menu !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

const data = ref({
  title: `Découvrons la carte traiteur Lyon, Roanne...`,
  description: `Faites de votre événement en Auvergne Rhône-Alpes une célébration gourmande avec la privatisation de votre food truck de burgers, crêpes et Bubble Waffle. Découvrez une cuisine de rue créative et savoureuse, parfaite pour impressionner vos invités.`,
  link: {
    text: "Découvrir la carte traiteur",
    to: "/la-carte",
  },
});

const link = ref({
  text: "Découvrir la carte traiteur",
  to: "/la-carte",
});
</script>
