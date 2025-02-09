<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `category.create.root`,
});
const pageId = {
  page: 'root',
};
</script>