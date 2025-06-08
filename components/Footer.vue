<template>
  <div class="bg-red py-10 px-5 xl:px-28">
    <div class="flex flex-col justify-center items-center">
      <a href="/">
        <img class="object-cover" src="~/assets/images/logo.svg" alt="" />
      </a>
      <p class="font-poppins text-white md:w-1/2 text-center text-sm">
        La Frite Attaque, votre traiteur & food truck de référence à Lyon,
        Roanne, Saint-Etienne, Macon, Bourg en Bresse... chez vous : en Rhône
        Alpes
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between w-full gap-8 mt-10"
    >
      <!-- Adresse du jour -->
      <div class="space-y-2 md:col-span-2 text-center">
        <p class="font-poppins text-white">Notre adresse du jour (pour manger)</p>

        <!-- ✅ Événement en cours -->
        <h3 v-if="currentEvent?.adresse" class="text-white text-lg">
          {{ currentEvent.adresse }} – {{ currentEvent.city }}
        </h3>

        <!-- ⏳ Prochain événement du jour -->
        <h3 v-else-if="nextLocation?.adresse" class="text-center leading-snug">
            <span class="text-white text-sm not-italic font-normal">
              Plus que
            </span>
            <span class="text-black font-extrabold text-lg">
              {{ timeUntil(nextLocation.time_start) }}
            </span>
            <span class="text-white text-sm not-italic font-normal">
              à attendre pour manger
            </span>
            <br />
            <span class="text-white italic font-extrabold text-lg">
              {{ nextLocation.adresse }} – {{ nextLocation.city }}
            </span>
          </h3>



        <!-- 😴 Rien du tout -->
        <h3 v-else class="text-white text-lg italic">
          Aujourd’hui, le food truck est en repos 😴
        </h3>

        <div class="flex justify-center py-4">
          <a
            class="hidden bg-white px-6 rounded-full text-sm text-azure py-2.5"
            href=""
          >
            Commander
          </a>
        </div>
      </div>

      <!-- Infos -->
      <div class="space-y-2">
        <h3 class="text-white text-lg">Infos</h3>
        <div class="flex">
          <ul class="space-y-2">
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-carte">Notre carte</a></li>
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-privatisation">La Privatisation</a></li>
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-carte-privatisation">Carte pour la privatisation</a></li>
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="/landing">Bienvenue</a></li>
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="/landing">Page contact</a></li>
         <!----   <li><a class="hover:text-orange transition-all text-white font-poppins" href="#">Mentions Légales</a></li>
            <li><a class="hover:text-orange transition-all text-white font-poppins" href="#">Politique de confidentialité</a></li>-->
          </ul>
        </div>
      </div>

      <!-- Contact -->
      <div class="space-y-2">
        <h3 class="text-white text-lg">Contact</h3>
        <div class="flex">
          <ul class="space-y-2">
            <li>
              <a class="text-white font-poppins flex items-center space-x-1" href="">
                <Icon name="hugeicons:mail-open" width="24" height="24" style="color: #fff" />
                <span>contact@lafriteattaque.fr</span>
              </a>
            </li>
            <li>
              <a class="text-white font-poppins flex items-center space-x-1" href="">
                <Icon name="tabler:phone-ringing" width="24" height="24" style="color: #fff" />
                <span>06.56.66.59.81</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="space-y-2">
        <h3 class="text-white text-lg">Suivez-nous</h3>
        <div class="flex">
          <ul class="flex space-x-2">
            <li
              v-for="(social, index) in $socials"
              :key="index"
              class="transform transition duration-500 hover:bg-blue size-10 aspect-square text-white bg-orange rounded-full"
            >
              <a
                class="text-xl flex items-center justify-center w-full h-full"
                :href="social.to"
                target="_blank"
              >
                <Icon :name="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useLocationStore } from '~/stores/locationStore'

const locationStore = useLocationStore()

const currentEvent = computed(() => locationStore.currentEvent)
const nextLocation = computed(() => locationStore.nextTodayLocation)

onMounted(() => {
  locationStore.fetchCurrentEvent()
  locationStore.fetchNextTodayLocation()
})

const { $socials } = useNuxtApp()

const timeUntil = (timeStr) => {
  if (!timeStr) return ''
  const [h, m] = timeStr.split(':').map(Number)
  const now = new Date()
  const target = new Date()
  target.setHours(h, m, 0, 0)

  const diffSec = Math.floor((target - now) / 1000)
  if (diffSec <= 0) return "quelques instants"

  const hours = Math.floor(diffSec / 3600)
  const minutes = Math.floor((diffSec % 3600) / 60)

  return `${hours > 0 ? `${hours}h` : ''}${minutes > 0 ? `${minutes}min` : ''}`
}
</script>
