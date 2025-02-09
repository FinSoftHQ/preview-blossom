<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>