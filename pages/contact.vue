<template>
  <div>
    <HeroContact />

    <!-- h1 caché pour le SEO, placé dans le template -->
    <h1 class="sr-only">
      Contact – Food truck La Frite Attaque à Roanne et en Auvergne Rhône-Alpes
    </h1>

    <main class="pt-20 bg-beige-light">
      <Contact />
    </main>
  </div>
</template>

<script setup>
import Contact from "~/components/Contact.vue";
import HeroContact from "~/components/contact/HeroContact.vue";

useHead({
  title: "Contact – La Frite Attaque | Une question, une privatisation ?",
  meta: [
    {
      name: "description",
      content:
        "Besoin d’un food truck pour un événement ? Contactez La Frite Attaque pour une privatisation (mariage, pro, festival), nos horaires, emplacements ou infos gourmandes. Réponse rapide garantie !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "preload", href: "/favicon.png", as: "image" },
  ],
});
</script>
