<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.create.root`,
});
const pageId = {
  page: 'root',
};
</script>