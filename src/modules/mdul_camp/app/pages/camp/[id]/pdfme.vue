<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.pdfme`,
});
const pageId = {
  page: 'pdfme',
};
</script>