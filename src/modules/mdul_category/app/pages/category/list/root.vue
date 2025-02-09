<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `category.list.root`,
});
const pageId = {
  page: 'root',
};
</script>