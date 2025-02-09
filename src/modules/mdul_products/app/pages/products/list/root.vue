<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.list.root`,
});
const pageId = {
  page: 'root',
};
</script>