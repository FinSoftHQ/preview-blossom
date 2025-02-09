<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.each.root`,
});
const pageId = {
  page: 'root',
};
</script>