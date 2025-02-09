<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.each.code`,
});
const pageId = {
  page: 'code',
};
</script>