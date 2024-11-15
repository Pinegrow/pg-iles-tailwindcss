import { ref } from 'vue'
const isNavMenuOpen = ref(false)

const openNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value
}

export const useNavMenu = () => {
  return {
    isNavMenuOpen,
    openNavMenu,
  }
}
