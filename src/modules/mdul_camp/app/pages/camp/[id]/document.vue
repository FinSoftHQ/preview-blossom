<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.document`,
});
const pageId = {
  page: 'document',
};
</script>