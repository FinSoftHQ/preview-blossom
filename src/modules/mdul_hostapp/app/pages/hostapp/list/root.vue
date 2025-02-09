<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.root`,
});
const pageId = {
  page: 'root',
};
</script>