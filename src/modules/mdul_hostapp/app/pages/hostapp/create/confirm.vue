<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.create.confirm`,
});
const pageId = {
  page: 'confirm',
};
</script>