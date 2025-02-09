<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `products.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>