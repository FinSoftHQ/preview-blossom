<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.each.root`,
});
const pageId = {
  page: 'root',
};
</script>