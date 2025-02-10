<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `mentor.each.root`,
});
const pageId = {
  page: 'root',
};
</script>