<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.each.close`,
});
const pageId = {
  page: 'close',
};
</script>