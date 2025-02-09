<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.each.close`,
});
const pageId = {
  page: 'close',
};
</script>