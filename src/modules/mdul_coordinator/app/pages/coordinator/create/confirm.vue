<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.create.confirm`,
});
const pageId = {
  page: 'confirm',
};
</script>