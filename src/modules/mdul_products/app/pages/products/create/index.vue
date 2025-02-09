<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.create.root`,
});
const pageId = {
  page: 'root',
};
</script>