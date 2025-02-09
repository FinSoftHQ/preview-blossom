<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.edit`,
});
const pageId = {
  page: 'edit',
};
</script>