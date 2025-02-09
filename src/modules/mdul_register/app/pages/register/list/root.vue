<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.list.root`,
});
const pageId = {
  page: 'root',
};
</script>