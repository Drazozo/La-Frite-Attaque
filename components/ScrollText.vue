<template>
  <div ref="containerRef" class="relative overflow-hidden bg-beige py-4 md:py-6">
    <img
      v-if="fill"
      class="absolute z-50 -top-3"
      src="~/assets/images/svg/beigeBottomTopBlack.svg"
      alt=""
    />
    <div class="flex will-change-transform" ref="trackRef">
      <div
        v-for="n in 6"
        :key="n"
       class="font-permanent text-3xl md:text-6xl whitespace-nowrap px-8 shrink-0"

      >
        🍔 food truck 🍟 truck gourmand 🥔 Frites maison 🎉 Événements, mariages, festivals 🎯 Privatisable partout en Rhône-Alpes
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({ fill: Boolean });

const containerRef = ref(null);
const trackRef = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const trackWidth = trackRef.value.scrollWidth;
  const wrapWidth = trackWidth / 2;

  let scrollVal = { x: 0 }; // valeur alimentée par le scroll
  let proxy = { x: 0 };     // valeur animée avec inertie

  // Mise à jour du scroll en fonction du mouvement
  ScrollTrigger.create({
    trigger: containerRef.value,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      scrollVal.x = self.progress * wrapWidth;
    },
  });

  // Animation réelle du track avec inertie
  gsap.ticker.add(() => {
    proxy.x += (scrollVal.x - proxy.x) * 0.08; // facteur d’inertie
    gsap.set(trackRef.value, {
      x: -(proxy.x % wrapWidth),
    });
  });

  setTimeout(() => ScrollTrigger.refresh(), 500);
});
</script>

<style scoped>
.will-change-transform {
  will-change: transform;
}
.shrink-0 {
  flex-shrink: 0;
}
</style>
