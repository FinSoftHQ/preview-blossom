<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.each.root`,
});
const pageId = {
  page: 'root',
};
</script>