<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const navigation = ref([]);
const headlinks = [{
  label: 'Category',
  to: '/category'
}]

const footers: any[] = []

const _files = setupAppNavigation(navigation, headlinks, footers);
// useAppExtraRolesAndComponents();
</script>
