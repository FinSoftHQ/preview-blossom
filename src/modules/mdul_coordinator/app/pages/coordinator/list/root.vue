<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.list.root`,
});
const pageId = {
  page: 'root',
};
</script>