<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.dharmacamp`,
});
const pageId = {
  page: 'dharmacamp',
};
</script>