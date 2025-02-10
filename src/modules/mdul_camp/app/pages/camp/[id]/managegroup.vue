<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.managegroup`,
});
const pageId = {
  page: 'managegroup',
};
</script>