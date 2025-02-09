<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.managebed`,
});
const pageId = {
  page: 'managebed',
};
</script>