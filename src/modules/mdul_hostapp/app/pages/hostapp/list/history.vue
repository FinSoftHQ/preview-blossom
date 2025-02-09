<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.history`,
});
const pageId = {
  page: 'history',
};
</script>