<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.root`,
});
const pageId = {
  page: 'root',
};
</script>