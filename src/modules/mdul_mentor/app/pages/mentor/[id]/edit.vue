<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `mentor.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>