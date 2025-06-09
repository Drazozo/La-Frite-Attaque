<template>
  <div class="bg-beige min-h-screen py-16 px-5 md:px-28">
<h1 class="text-3xl md:text-5xl font-bold text-center text-azure mb-6">
  📄 Notre Livret de Présentation
</h1>
<p class="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
  Que vous soyez organisateur d’événement, amateur de bonne bouffe, ou simplement curieux de découvrir qui se cache derrière La Frite Attaque 🍟 — ce livret est fait pour vous !
  <br /><br />
  On vous y raconte notre histoire, notre concept, ce qu’on propose, et pourquoi on fait tout ça avec passion (et frites croustillantes).
</p>

    <!-- Affichage desktop avec iframe -->
    <div class="hidden md:block max-w-5xl mx-auto">
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

    <!-- Affichage mobile : lien seul -->
    <div class="md:hidden text-center mt-8">
      <a
        href="https://www.canva.com/design/DAGmOluDOU0/44DVVi0_Svb-cAvKQhSMNg/view"
        target="_blank"
        rel="noopener"
        class="underline text-azure hover:text-red text-base font-medium"
      >
        📄 Voir la plaquette de présentation
      </a>
      <p class="text-xs text-gray-600 mt-2">(Redirige vers Canva dans un nouvel onglet)</p>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Livret de Présentation – La Frite Attaque",
  meta: [
    {
      name: "description",
      content:
        "Découvrez le livret de présentation de La Frite Attaque : notre concept, notre carte, nos prestations et notre vision de la street food événementielle.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>
