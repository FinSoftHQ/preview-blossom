<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `category.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>