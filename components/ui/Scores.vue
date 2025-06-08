<template>
  <div class="grid grid-cols-3">
    <div
      class="flex flex-col items-center text-white"
      v-for="(note, index) in notations"
      :key="index"
    >
      <span class="text-xs text-end"
        >+ de {{ note.testimonialsCount }} avis</span
      >
      <span class="text-2xl md:text-5xl text-end">{{ note.score }}/5</span>
      <span class="text-end">
        <Icon :name="note.socialIcon" class="text-sm mr-1" />
        <Icon
          class="text-orange text-xs"
          v-for="(item, index) in note.starsCount"
          :key="index"
          name="weui:star-filled"
        />
      </span>
    </div>
  </div>
</template>
<script setup>
const notations = ref([
  {
    testimonialsCount: 3,
    score: 5,
    socialIcon: "flat-color-icons:google",
    starsCount: 5,
  },
  {
    testimonialsCount: 2,
    score: 4.6,
    socialIcon: "logos:facebook",
    starsCount: 4,
  },
  {
    testimonialsCount: 1,
    score: 4,
    socialIcon: "simple-icons:trustpilot",
    starsCount: 4,
  },
]);
</script>
