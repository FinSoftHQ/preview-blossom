<template>
  <RealmPageCreate :pageId></RealmPageCreate>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.create.travel`,
});
const pageId = {
  page: 'travel',
};
</script>