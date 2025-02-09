<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.list.root`,
});
const pageId = {
  page: 'root',
};
</script>