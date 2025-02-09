<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.close`,
});
const pageId = {
  page: 'close',
};
</script>