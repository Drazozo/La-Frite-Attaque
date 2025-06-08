<template>
  <div>
    <!-- H1 masqué pour SEO -->
    <h1 class="sr-only">
      Carte & Privatisation – Food Truck La Frite Attaque à Lyon, Roanne, Rhône-Alpes
    </h1>

    <HeroPrivatization :data="data" />
    <Domains :link="link" />

    <!-- Section formulaire -->
    <main class="bg-light-black px-5 py-10 md:px-28 md:py-16">
      <WrapperPrivatisation />
    </main>

    <!-- Section produits -->
    <div class="px-5 md:px-28 pt-10 pb-20 bg-beige">
      <!-- Navigation par catégorie -->
      <div
        class="flex justify-center md:space-x-3 space-x-6 overflow-x-scroll md:overflow-x-hidden py-2"
        v-if="products && Object.keys(products).length"
      >
        <div v-for="(categoryProducts, categoryName) in products" :key="categoryName">
          <Link
            :text="categoryName"
            :to="`#${slugify(categoryName)}`"
            isolateClass="text-sm md:text-base text-nowrap text-azure border-orange"
          />
        </div>
      </div>

      <!-- Liste produits par catégorie -->
      <div class="mt-5" v-if="products && Object.keys(products).length">
        <div
          v-for="(categoryProducts, categoryName) in products"
          :key="categoryName"
          :id="slugify(categoryName)"
          class="flex flex-col"
        >
          <ProductList
            :categoryName="categoryName"
            :categoryProducts="categoryProducts"
          />
        </div>
      </div>
    </div>

    <WhyUs />
    <Testimonials />
    <Faq />
    <Contact />
  </div>
</template>

<script setup>
import HeroPrivatization from "~/components/privatization/HeroPrivatization.vue";
import Domains from "~/components/Domains.vue";
import WrapperPrivatisation from "~/components/privatization/WrapperPrivatisation.vue";
import ProductList from "~/components/carte/ProductList.vue";
import WhyUs from "~/components/carte/WhyUs.vue";
import Testimonials from "~/components/Testimonials.vue";
import Faq from "~/components/Faq.vue";
import Contact from "~/components/Contact.vue";
import Link from "~/components/ui/Link.vue";
import { get } from "~/utils/api";

// SEO
useHead({
  title: "Carte & Privatisation – La Frite Attaque | Food Truck en Rhône-Alpes",
  meta: [
    {
      name: "description",
      content:
        "Découvrez la carte gourmande de La Frite Attaque et privatisez notre food truck pour vos événements en Rhône-Alpes. Smash burgers, frites maison, kürtős et bubble waffles au menu !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

// Data SEO + CTA
const data = ref({
  title: `Découvrons la carte traiteur Lyon, Roanne...`,
  description: `Faites de votre événement en Auvergne Rhône-Alpes une célébration gourmande avec la privatisation du food truck La Frite Attaque. Smash burgers, crêpes, bubble waffles et convivialité au rendez-vous.`,
  link: {
    text: "DECOUVREZ NOTRE FACILITE DE PRIVATISATION",
    to: "/la-privatisation",
  },
});

const link = ref({
  text: "RESERVER LE TRAITEUR / FOOD TRUCK",
  to: "/la-privatisation",
});

// Slugify utilitaire pour les ancres
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

// Produits
const products = ref({});

onMounted(async () => {
  try {
    products.value = await get("products");
  } catch (e) {
    console.error(e);
  }
});
</script>
