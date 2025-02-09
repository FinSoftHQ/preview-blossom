<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.create.confirm`,
});
const pageId = {
  page: 'confirm',
};
</script>