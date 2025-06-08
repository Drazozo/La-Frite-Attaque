<template>
  <div>
    <!-- H1 masqué pour SEO -->
    <h1 class="sr-only">
      Carte Printemps 2025 – Smash burgers, frites maison et douceurs sucrées
    </h1>

    <div class="bg-beige pt-10 px-5 lg:px-28">
      <HeroCarte />
    </div>

    <div class="bg-beige pt-20">
      <h2 class="text-outline px-5 text-3xl text-center text-white">
        Notre proposition salée <br />
        Printemps 2025
      </h2>
      <p class="mt-2 px-5 text-base md:w-1/2 mx-auto font-poppins text-center">
      <br>  Bienvenue chez La Frite Attaque ! Parcourez notre carte alléchante composée de burgers artisanaux, de frites maison dorées à souhait et de desserts gourmands. Notre food truck sillonne la région Rhône-Alpes pour vous régaler.<br><br>

      </p>
<!---
      <div class="bg-beige-light px-5 md:px-28 py-10 mt-5">
        <ProductList
          categoryName="Nouveauté"
          :categoryProducts="filterProducts(products, 'Nouveauté')"
        />
      </div>-->
    </div>
    <div class="bg-beige-light py-12">
      <Overlay text="Notre proposition chaude" class="w-fit mx-auto" />
      <h2 class="text-outline text-3xl text-center text-white mt-3">Burger</h2>
      <div class="px-5 md:px-28 mt-5">
        <ProductList categoryName="Burger" :categoryProducts="products['Burger']" />
      </div>
    </div>

    <div class="bg-beige py-10">
      <Overlay text="Accompagnement" class="w-fit mx-auto" />
      <div
        class="flex flex-col lg:flex-row gap-y-5 items-center px-5 lg:px-44 xl:px-60 mt-5"
      >
        <div class="lg:w-2/3">
          <img class="rounded-2xl" src="~/assets/images/products/frites-maisons.jpg" alt="Frites maison" />
        </div>
        <div class="mx-auto">
          <h2 class="text-outline text-3xl text-center text-white">
            Frites Maison
          </h2>
          <p class="mt-4 text-base font-poppins text-center">
            Appréciez nos délicieuses frites maison croustillantes : les patates sont lavées, coupées, blanchies puis frites en direct.
          </p>
          <div class="flex justify-center space-x-4 mt-4">
            <div class="flex flex-col items-center space-y-1.5">
              <span class="bg-red font-permanent text-white py-1 px-4 rounded-full">60g</span>
              <span class="font-poppins font-bold">2.00€ </span>
            </div>
            <div class="flex flex-col items-center space-y-1.5">
              <span class="bg-red font-permanent text-white py-1 px-4 rounded-full">100g</span>
              <span class="font-poppins font-bold">2.50€ </span>
            </div>
            <div class="flex flex-col items-center space-y-1.5">
              <span class="bg-red font-permanent text-white py-1 px-4 rounded-full">250g</span>
              <span class="font-poppins font-bold">3.50€ </span>
            </div>
                        <div class="flex flex-col items-center space-y-1.5">
              <span class="bg-red font-permanent text-white py-1 px-4 rounded-full">400g</span>
              <span class="font-poppins font-bold">5.00€ </span>
            </div>
          </div>
        </div>
        <div class="lg:w-2/3">
          <img class="rounded-2xl" src="~/assets/images/products/frites-maisons-2.jpg" alt="Frites maison" />
        </div>
      </div>
    </div>

    <Location />
    <ScrollText :fill="false" />

    <div class="bg-beige-light py-12">
      <Overlay text="Rafraîchissement" class="w-fit mx-auto" />
      <h2 class="text-outline text-3xl text-center text-white mt-3">Boissons fraîches</h2>
      <div class="px-5 md:px-28 mt-5">
        <ProductList categoryName="Boissons" :categoryProducts="products['Boissons']" />
      </div>
    </div>

    <div class="bg-beige py-12">
      <Overlay text="Une douceur pour finir" class="w-fit mx-auto" />
      <h2 class="text-outline text-3xl text-center text-white mt-3">Desserts</h2>
      <div class="px-5 md:px-28 mt-5">
        <ProductList categoryName="Dessert" :categoryProducts="products['Dessert']" />
      </div>
    </div>

    <WhyUs />
    <Testimonials />
    <Faq />
    <Contact />
  </div>
</template>

<script setup>
import { filterProducts } from "~/utils/filterProducts";
import { get } from "~/utils/api";

useHead({
  title: "La Carte | Burgers, Frites Maison & Douceurs – La Frite Attaque Food Truck",
  meta: [
    {
      name: "description",
      content:
        "Découvrez la carte gourmande de La Frite Attaque : burgers artisanaux, frites maison et desserts irrésistibles. À déguster partout en Rhône-Alpes !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

import HeroCarte from "~/components/carte/HeroCarte.vue";
import ProductList from "~/components/carte/ProductList.vue";
import WhyUs from "~/components/carte/WhyUs.vue";
import Faq from "~/components/Faq.vue";
import Contact from "~/components/Contact.vue";
import Location from "~/components/Location.vue";
import ScrollText from "~/components/ScrollText.vue";
import Testimonials from "~/components/Testimonials.vue";
import Overlay from "~/components/ui/Overlay.vue";

const products = ref({});

onMounted(async () => {
  try {
    products.value = await get("products");
  } catch (e) {
    console.error(e);
  }
});
</script>
