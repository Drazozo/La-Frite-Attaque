<template>
  <span ref="element">{{ displayedValue }}{{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  suffix: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3700
  }
})

const displayedValue = ref(0)
const hasAnimated = ref(false)
const element = ref(null)

// easing : easeOutCubic
function easing(t) {
  return 1 - Math.pow(1 - t, 3)
}

const animate = () => {
  const startTime = performance.now()

  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = easing(progress)
    displayedValue.value = Math.floor(eased * props.target)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      displayedValue.value = props.target
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  if (element.value) observer.observe(element.value)
})
</script>
