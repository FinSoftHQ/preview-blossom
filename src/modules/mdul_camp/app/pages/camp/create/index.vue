<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.create.root`,
});
const pageId = {
  page: 'root',
};
</script>