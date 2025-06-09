<template>
  <div class="bg-red py-10 px-5 xl:px-28">
    <!-- Logo + phrase d'accroche -->
    <div class="flex flex-col justify-center items-center space-y-4">
      <a href="/">
        <img class="object-cover" src="~/assets/images/logo.svg" alt="Logo La Frite Attaque" />
      </a>
      <p class="font-poppins text-white md:w-1/2 text-center text-sm font-normal">
        La Frite Attaque, votre traiteur & food truck de référence à Lyon, Roanne, Saint-Étienne, Mâcon, Bourg-en-Bresse… Partout en Rhône-Alpes et avec le sourire !
      </p>
    </div>

    <!-- Contenu structuré -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10">

      <!-- 📍 Où manger aujourd’hui ? -->
      <div class="space-y-2 md:col-span-2 text-center">
        <h3 class="text-white text-lg font-bold">📍 Où manger aujourd’hui ?</h3>

        <h3 v-if="currentEvent?.adresse" class="text-white text-lg font-normal">
          {{ currentEvent.adresse }} – {{ currentEvent.city }}
        </h3>

        <h3 v-else-if="nextLocation?.adresse" class="text-white text-lg leading-snug font-normal">
          <span class="block text-sm">Plus que</span>
          <span class="text-black font-extrabold text-xl">
            {{ timeUntil(nextLocation.time_start) }}
          </span>
          <span class="block text-sm">à attendre pour manger</span>
          <span class="italic font-bold">{{ nextLocation.adresse }} – {{ nextLocation.city }}</span>
        </h3>

        <h3 v-else class="text-white text-lg italic font-normal">
          Aujourd’hui, le food truck est en repos 😴
        </h3>
      </div>

      <!-- 🍔 Food truck & Privatisation -->
      <div class="space-y-2">
        <h3 class="text-white text-lg font-bold">🍔 Food truck & Privatisation</h3>
        <ul class="space-y-1 font-poppins">
          <li><a class="hover:text-orange text-white text-sm" href="/la-carte">Notre carte</a></li>
          <li><a class="hover:text-orange text-white text-sm" href="/la-privatisation">Privatisation</a></li>
          <li><a class="hover:text-orange text-white text-sm" href="/la-carte-privatisation">Carte événements</a></li>
          <li><a class="hover:text-orange text-white text-sm" href="/livret-de-presentation">Livret de présentation</a></li>
        </ul>
      </div>

      <!-- 🔎 Pages utiles & SEO -->
      <div class="space-y-2">
        <h3 class="text-white text-lg font-bold">🔎 Pages utiles</h3>
        <ul class="space-y-1 font-poppins">
          <li><a class="hover:text-orange text-white text-sm" href="/landing">QR Code – Bienvenue</a></li>
          <li><a class="hover:text-orange text-white text-sm" href="/legal">Mentions légales & CGV</a></li>
          <li><a class="hover:text-orange text-white text-sm" href="/contact">Page contact</a></li>
        </ul>
      </div>

      <!-- 📬 Contact + Réseaux sociaux -->
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-white text-lg font-bold">📬 Contact</h3>
          <ul class="space-y-2 text-sm font-poppins">
            <li>
              <a href="mailto:contact@lafriteattaque.fr" class="text-white flex items-center space-x-2">
                <Icon name="hugeicons:mail-open" width="20" height="20" style="color: #fff" />
                <span>contact@lafriteattaque.fr</span>
              </a>
            </li>
            <li>
              <a href="tel:+33656665981" class="text-white flex items-center space-x-2">
                <Icon name="tabler:phone-ringing" width="20" height="20" style="color: #fff" />
                <span>06 56 66 59 81</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="space-y-2">
          <h3 class="text-white text-lg font-bold">📱 Suivez-nous</h3>
          <ul class="flex space-x-3">
            <li
              v-for="(social, index) in $socials"
              :key="index"
              class="bg-orange rounded-full size-10 flex items-center justify-center hover:bg-blue transition"
            >
              <a :href="social.to" target="_blank" class="text-white text-xl">
                <Icon :name="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
