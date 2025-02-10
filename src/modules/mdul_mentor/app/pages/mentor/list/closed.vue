<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `mentor.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>