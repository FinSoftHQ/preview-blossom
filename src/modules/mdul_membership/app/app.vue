<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const navigation = ref([]);
const headlinks = [{
  label: 'ลงทะเบียนเจ้าภาพ',
  to: '/membership'
}]

const footers: any[] = []

const _files = setupAppNavigation(navigation, headlinks, footers);
</script>
