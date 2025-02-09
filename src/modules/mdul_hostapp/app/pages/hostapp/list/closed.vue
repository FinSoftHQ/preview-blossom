<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>