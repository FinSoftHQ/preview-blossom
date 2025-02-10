<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `mentor.create.confirm`,
});
const pageId = {
  page: 'confirm',
};
</script>