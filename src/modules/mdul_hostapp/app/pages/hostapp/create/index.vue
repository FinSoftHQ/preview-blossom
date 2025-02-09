<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.create.root`,
});
const pageId = {
  page: 'root',
};
</script>