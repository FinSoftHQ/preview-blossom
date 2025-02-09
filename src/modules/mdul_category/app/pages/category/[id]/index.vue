<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `category.each.root`,
});
const pageId = {
  page: 'root',
};
</script>