<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.list.completed`,
});
const pageId = {
  page: 'completed',
};
</script>