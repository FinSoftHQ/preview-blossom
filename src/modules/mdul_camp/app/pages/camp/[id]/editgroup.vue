<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.editgroup`,
});
const pageId = {
  page: 'editgroup',
};
</script>