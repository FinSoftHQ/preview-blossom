<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `category.each.close`,
});
const pageId = {
  page: 'close',
};
</script>