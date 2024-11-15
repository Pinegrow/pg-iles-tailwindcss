<script setup lang="ts">
  import { useNavMenu } from '@/composables/nav-menu'
  const { isNavMenuOpen, openNavMenu } = useNavMenu()
</script>
<template>
  <BaseButton
    size="xl"
    :icon="
      isNavMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    "
    class="!py-2 !rounded-lg leading-none"
    @click="openNavMenu"
    ><span class="sr-only">Open main menu</span>
  </BaseButton>
</template>
<style scoped></style>
