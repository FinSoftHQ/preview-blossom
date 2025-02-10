<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.editseat`,
});
const pageId = {
  page: 'editseat',
};
</script>