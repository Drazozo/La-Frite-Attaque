<template>
  <section class="bg-white py-16 px-4 md:px-28">
    <!-- H1 caché pour SEO -->
    <h1 class="sr-only">Fiche produit – {{ product.title }} | La Frite Attaque</h1>

    <!-- Titre + Image + Description -->
    <div class="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10 max-w-7xl mx-auto">
      <!-- Image produit -->
      <div class="md:w-1/2 text-center">
        <img
          :src="`/images/products/${product.image || 'bientot.jpg'}`"
          :alt="`Image du produit ${product.title}`"
          class="max-w-xs mx-auto"
          @error="e => e.target.src = '/images/bientot.jpg'"
        />
      </div>

      <!-- Infos produit -->
      <div class="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 class="text-4xl font-bold">{{ product.title }}</h2>
        <p class="text-gray-600 text-lg">{{ product.description }}</p>
        <p v-if="product.tag" class="text-sm text-gray-500">
          Tag du produit : {{ product.tag.name }}
        </p>
        <!-- Tarifs -->
<div v-if="product.labels && Object.keys(product.labels).length" class="text-gray-800 text-base space-y-1">
  <div
    v-for="(price, label) in product.labels"
    :key="label"
  >
    <span>{{ label }} :</span> {{ price }}
  </div>
</div>

        <!--
        <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded shadow">
          Commander
        </button>
        -->
      </div>
    </div>

    <!-- À propos -->
    <div class="mt-20 max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">
        À propos du {{ product.title }}
      </h2>
      <hr class="mb-8 border-gray-300" />

      <!-- Ingrédients -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-3">Les ingrédients</h3>
        <ul class="divide-y border rounded-md overflow-hidden">
          <li
            v-for="ing in product.ingredients"
            :key="ing"
            class="flex items-center gap-3 px-4 py-3"
          >
            <img
              :src="`/images/ingredients/${slugify(ing)}.png`"
              :alt="`Ingrédient : ${ing}`"
              class="w-10 h-10"
              @error="e => e.target.src = '/images/bientot.jpg'"
            />
            <span class="text-gray-800 text-base">{{ ing }}</span>
          </li>
        </ul>
      </div>

      <!-- Allergènes -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Allergènes</h3>
        <ul class="divide-y border rounded-md overflow-hidden">
          <li
            v-for="all in product.allergenes"
            :key="all"
            class="flex items-center gap-3 px-4 py-3"
          >
            <img
              :src="`/images/allergenes/${slugify(all)}.png`"
              :alt="`Allergène : ${all}`"
              class="w-12 h-12"
              @error="e => e.target.src = '/images/bientot.jpg'"
            />
            <span class="text-gray-800">{{ all }}</span>
          </li>
        </ul>
      </div>

      <div class="text-sm text-gray-700">
  <span><strong>Peut contenir des traces de :</strong> Soja, Graines de sésame, Sulfites</span><br /><br />
</div>
      <!-- Mentions légales -->
      <p class="text-xs leading-snug text-neutral-500 font-normal">
Cette information concerne les 14 allergènes majeurs définis par le Décret n°2008-1153 du 7 novembre 2008 : Arachides, Céleri, Crustacés, Céréales contenant du gluten (Avoine, Blé, Épeautre, Kamut et leurs souches hybridées, Orge, Seigle), Fruits à coque (Amande, Noisette, Noix, Noix de Brésil, Cajou, Macadamia, Pécan, Queensland, Pistaches), Lait, Lupin, Œufs, Poissons, Mollusques, Moutarde, Graines de sésame, Soja, Anhydride sulfureux et sulfites.<br>
<br>
Chez <strong>La Frite Attaque</strong>, on prend ça au sérieux ! Les infos sur les allergènes présents dans nos produits sont établies selon les données transmises par nos fournisseurs. Mais comme les recettes évoluent parfois (et que nos fournisseurs ne nous disent pas toujours tout...), on vous conseille de jeter un coup d'œil régulièrement à nos mises à jour.<br>
<br>
💡 Même si un allergène n’est pas mentionné, des traces accidentelles peuvent toujours se glisser dans nos préparations – à cause de la fabrication, de la manip' dans notre camion, ou du lavage de notre matériel. On pense notamment aux graines de sésame qui peuvent traîner sur certains de nos pains.<br>
<br>
👉 Si vous avez la moindre allergie, <strong> avant de commander</strong>, on préférera toujours éviter un drame plutôt que de devoir vous faire un câlin avec une trousse de secours.


      </p>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const { data: product, error } = await useFetch(
  `https://api.lafriteattaque.fr/products/${route.params.slug}`
)

if (error.value) {
  throw createError({ statusCode: 404, message: 'Produit introuvable' })
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
}
</script>

<!-- Balises SEO -->
<script>
export default {
  head() {
    return {
      title: `${this.product?.title || 'Produit'} - La Frite Attaque`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.product?.description ||
            'Découvrez nos burgers maison, frites croustillantes et recettes uniques avec La Frite Attaque 🍔',
        },
      ],
    }
  },
}
</script>

<style>
/* screen-reader only (accessibilité & SEO) */
.sr-only {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
</style>
