// src/stores/locationStore.js
import { defineStore } from "pinia"
import { ref } from "vue"

export const useLocationStore = defineStore("location", () => {
  const location = ref(null)
  const nextTodayLocation = ref(null)

  const setLocation = (newLocation) => {
    location.value = newLocation
  }

  const fetchTodayLocation = async () => {
    try {
      const today = new Date().toISOString().split("T")[0]
      const res = await fetch(`https://api.lafriteattaque.fr/planning-date?date=${today}`)
      const data = await res.json()

      location.value = Array.isArray(data) && data.length > 0 ? data[0] : null
    } catch (err) {
      console.error("Erreur lors de la récupération du planning :", err)
      location.value = null
    }
  }

  const fetchNextTodayLocation = async () => {
    try {
      const today = new Date().toISOString().split("T")[0]
      const res = await fetch(`https://api.lafriteattaque.fr/planning-next-today?date=${today}`)
      const data = await res.json()

      nextTodayLocation.value = data && data.adresse ? data : null
    } catch (err) {
      console.error("Erreur de récupération de l’événement suivant :", err)
      nextTodayLocation.value = null
    }
  }

  const currentEvent = ref(null)

const fetchCurrentEvent = async () => {
  try {
    const today = new Date().toISOString().split("T")[0]
    const res = await fetch(`https://api.lafriteattaque.fr/planning-now?date=${today}`)
    const data = await res.json()
    currentEvent.value = data && data.adresse ? data : null
  } catch (err) {
    console.error("Erreur récupération event en cours :", err)
    currentEvent.value = null
  }
}


  return {
  location,
  nextTodayLocation,
  currentEvent,
  setLocation,
  fetchTodayLocation,
  fetchNextTodayLocation,
  fetchCurrentEvent
}

})
