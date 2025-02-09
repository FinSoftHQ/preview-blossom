<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>