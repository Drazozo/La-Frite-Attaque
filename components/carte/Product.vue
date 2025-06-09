<template>
  <div
    class="relative border-t border-l border-4 border-orange bg-white px-2 py-3 md:py-5 md:px-6 rounded-2xl"
  >
    <!-- Tag produit (badge promo par exemple) -->
    <div
      v-if="product.tag"
      :style="{ backgroundColor: product.tag.color_hex }"
      class="absolute w-fit right-5 md:right-initial -top-5 md:-left-10 md:top-2 transform -rotate-10 md:-rotate-12 px-3 py-1 rounded-full"
    >
      <span class="text-white text-sm font-permanent">
        {{ product.tag.name }}
      </span>
    </div>

    <!-- Bloc image + contenu -->
    <div class="md:flex md:space-x-5 md:space-y-0 space-y-5 items-center">
      <!-- Image du produit -->
      <div class="md:w-1/3 flex justify-center md:justify-start">
        <img
          class="rounded-2xl w-full max-w-[260px] md:max-w-full"
          src="~/assets/images/products/bientot.jpg"
          alt=""
        />
      </div>

      <!-- Contenu texte -->
      <div class="md:w-2/3 space-y-4">
        <h3 class="text-azure text-xl text-center md:text-left">
          {{ product.title }}
        </h3>
        <p class="text-gray-500 font-poppins text-sm text-center md:text-left">
          {{ product.description }}
        </p>

        <!-- Labels (prix, calories, portion, etc.) -->
        <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
          <div
            v-for="(value, name) in product.labels"
            :key="name"
            class="flex flex-col items-center space-y-1.5"
          >
            <span class="bg-red font-permanent text-white py-1 px-4 rounded-full">
              {{ name }}
            </span>
            <span class="font-poppins font-bold">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>
