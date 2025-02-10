<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.each.close`,
});
const pageId = {
  page: 'close',
};
</script>