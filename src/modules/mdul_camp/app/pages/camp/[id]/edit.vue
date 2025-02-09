<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>