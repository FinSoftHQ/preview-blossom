<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.list.closed`,
});
const pageId = {
  page: 'closed',
};
</script>