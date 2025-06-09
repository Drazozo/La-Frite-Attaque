<template>
  <div class="bg-beige px-5 lg:px-28 py-20">
    <div class="flex justify-center">
      <Overlay
        text="J’espère que vous avez encore faim après dégusté autant d’image savoureuse !"
      />
    </div>

    <div class="space-y-4 mt-5">
      <h2 class="text-outline text-2xl lg:text-4xl text-white text-center">
        Questions Fréquentes
      </h2>
    </div>

    <div class="flex justify-center mt-10 gap-5">
      <div
        class="md:w-3/5 mx-auto px-4 md:px-8 py-4 border-t border-l border-4 border-orange rounded-xl"
      >
        <div v-for="(item, index) in faq" :key="index" class="border-b py-4">
          <div class="flex justify-between space-x-5 items-center">
            <h4
              @click="openQuestion(index)"
              class="text-sm md:text-base cursor-pointer"
            >
              {{ item.question }}
            </h4>
            <span
              @click="openQuestion(index)"
              class="cursor-pointer rounded-full flex items-center justify-center py-1 px-2 bg-red"
            >
              <b
                v-if="activeIndex == index"
                class="text-white font-permanent md:text-lg"
                >-</b
              >
              <b v-else class="text-white font-permanent md:text-lg">+</b>
            </span>
          </div>

          <transition name="accordion">
            <p
              v-if="activeIndex == index"
              class="font-poppins text-sm md:text-base mt-2 text-gray-600"
              v-html="item.answer"
            ></p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Overlay from "./ui/Overlay.vue";

const activeIndex = ref(-1);

const faq = ref([
  {
    question: "Où peut-on vous trouver avec le food truck ?",
    answer:
      'Nous sillonnons la région selon les événements du moment. Pour connaître notre emplacement du jour, rendez-vous sur notre page dédiée : <a href="https://lafriteattaque.fr/nos-emplacements" target="_blank">lafriteattaque.fr/nos-emplacements</a> ou suivez-nous sur les réseaux sociaux !',
  },
  {
    question: "Proposez-vous des plats végétariens ?",
    answer:
      "Pas pour le moment. Mais c’est en réflexion ! En attendant, certaines gourmandises sucrées comme les crêpes, bubble waffles ou kürtős peuvent convenir aux végétariens selon la garniture choisie. Restez connectés !",
  },
  {
    question: "Peut-on privatiser le food truck pour un événement ?",
    answer:
      'Absolument ! Mariages, anniversaires, événements d\'entreprise... nous vous proposons une formule clé en main. Plus d\'infos ici : <a href="https://lafriteattaque.fr/la-privatisation" target="_blank">lafriteattaque.fr/la-privatisation</a> et découvrez nos offres traiteur sur <a href="https://lafriteattaque.fr/la-carte-privatisation" target="_blank">lafriteattaque.fr/la-carte-privatisation</a>.',
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      'Nos horaires dépendent des lieux et événements. Ils sont mis à jour en temps réel sur nos réseaux sociaux et sur notre page des emplacements : <a href="https://lafriteattaque.fr/nos-emplacements" target="_blank">lafriteattaque.fr/nos-emplacements</a>.',
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, en espèces, sans contact, ainsi que les tickets restaurants papier. Les cartes titres-restaurants (type Swile, Edenred…) ne sont pas encore disponibles.",
  },
  {
    question: "Quels types de plats proposez-vous ?",
    answer:
      "Des smash burgers maison, des frites croustillantes, des kürtős sucrés et salés, ainsi que des donuts ultra gourmands. Tout est préparé à la minute avec des produits frais, locaux et pleins de goût.",
  },
]);

function openQuestion(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index;
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
