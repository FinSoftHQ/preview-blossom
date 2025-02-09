<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.address`,
});
const pageId = {
  page: 'address',
};
</script>