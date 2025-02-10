<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `coordinator.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>