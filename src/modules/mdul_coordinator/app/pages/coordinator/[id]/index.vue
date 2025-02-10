<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.each.root`,
});
const pageId = {
  page: 'root',
};
</script>