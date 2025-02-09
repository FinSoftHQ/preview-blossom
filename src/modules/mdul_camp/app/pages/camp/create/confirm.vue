<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.create.confirm`,
});
const pageId = {
  page: 'confirm',
};
</script>