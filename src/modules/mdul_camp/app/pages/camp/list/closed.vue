<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>