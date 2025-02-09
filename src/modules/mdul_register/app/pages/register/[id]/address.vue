<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.each.address`,
});
const pageId = {
  page: 'address',
};
</script>