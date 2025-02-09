<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.nametagprint`,
});
const pageId = {
  page: 'nametagprint',
};
</script>