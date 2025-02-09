<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>