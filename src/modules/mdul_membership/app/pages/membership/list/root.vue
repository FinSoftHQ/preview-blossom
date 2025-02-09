<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.list.root`,
});
const pageId = {
  page: 'root',
};
</script>