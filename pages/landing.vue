<template>
  <div class="min-h-screen bg-beige-light text-black px-5 py-8 flex flex-col items-center space-y-10 relative overflow-x-hidden">
    <!-- SEO -->
    <h1 class="sr-only">La Frite Attaque – Emplacement du jour & infos pratiques</h1>

    <!-- Logo -->
    <img src="~/assets/images/logo.svg" alt="La Frite Attaque" class="w-40 fade-in" />

    <!-- Intro -->
    <div class="text-center space-y-2 fade-in delay-200">
      <h2 class="text-2xl font-bold">La Frite Attaque</h2>
      <p class="text-sm font-poppins">Découvrez notre univers salé comme sucré</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="https://www.facebook.com/lafriteattaque" target="_blank"><Icon name="mdi:facebook" class="text-orange text-2xl" /></a>
        <a href="https://www.instagram.com/lafriteattaque" target="_blank"><Icon name="mdi:instagram" class="text-orange text-2xl" /></a>
        <a href="https://www.linkedin.com/company/lafriteattaque" target="_blank"><Icon name="mdi:linkedin" class="text-orange text-2xl" /></a>
      </div>
    </div>

    <!-- Emplacement du jour (via store) -->
    <div v-if="location" class="bg-white border-4 border-blue rounded-xl p-5 shadow-md w-full max-w-md fade-in delay-400">
      <div class="flex items-center justify-between mb-2">
        <span class="bg-red text-white px-3 py-1 rounded-full text-xs font-bold">Aujourd’hui</span>
        <span class="bg-orange text-white px-2 py-1 text-xs rounded-full">{{ location.city }}</span>
      </div>
      <h2 class="font-bold">📍 {{ location.adresse }}</h2>
      <p class="text-sm mt-2" v-html="location.text_top_time" />
      <p class="text-sm font-poppins">
        {{ location.time_start.slice(0, 5) }} – {{ location.time_end.slice(0, 5) }}
      </p>
      <p class="text-sm mt-2" v-html="location.commande" />
      <a :href="location.link_itinerary" target="_blank" class="text-sm underline text-blue mt-2 block">📍 Itinéraire →</a>
    </div>

    <div v-else class="text-center text-sm text-gray-600 fade-in delay-400">
      Aucun emplacement prévu aujourd’hui. Revenez bientôt ! 🍟
    </div>

    <!-- Liens utiles -->
    <div class="space-y-4 w-full max-w-md fade-in delay-600">
      <h3 class="text-sm font-bold bg-red text-white px-3 py-1 rounded-full inline-block">Notre truck du quotidien</h3>
      <ul class="space-y-2">
        <li><a class="btn-link" href="/nos-emplacements">📅 Où on frit(e) les prochains jours ?</a></li>
        <li><a class="btn-link" href="/avis">💬 Laissez une note qui nous chauffe !</a></li>
        <li><a class="btn-link" href="/la-carte">🍔 On mange quoi de bon ?</a></li>
        <li><a class="btn-link" href="/kurtos">🍩 Papoter autour d’un kürtős ?</a></li>
      </ul>

      <h3 class="text-sm font-bold bg-orange text-white px-3 py-1 rounded-full inline-block mt-6">Privatisation & Événements</h3>
      <ul class="space-y-2">
        <li><a class="btn-link" href="/la-privatisation">🎉 Découvrir la privatisation</a></li>
        <li><a class="btn-link" href="/la-carte#privatisation">📜 La carte traiteur</a></li>
        <li><a class="btn-link" href="/contact">✉️ Faire une demande de devis</a></li>
      </ul>
    </div>

    <!-- Bouton Appel sticky -->
    <a
      href="tel:06 56 66 59 81"
      class="fixed bottom-3 left-1/2 -translate-x-1/2 bg-red text-white px-6 py-3 rounded-full shadow-lg text-sm font-bold z-50"
    >
      📞 Appeler maintenant
    </a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useLocationStore } from '~/stores/locationStore';

const location = useLocationStore().location;
</script>

<style scoped>
.btn-link {
  @apply block w-full text-left bg-white border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-orange hover:text-white transition-all;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}
.fade-in.delay-200 { animation-delay: 0.2s; }
.fade-in.delay-400 { animation-delay: 0.4s; }
.fade-in.delay-600 { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
