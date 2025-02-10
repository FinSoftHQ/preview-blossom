<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.registered`,
});
const pageId = {
  page: 'registered',
};
</script>