<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.payment`,
});
const pageId = {
  page: 'payment',
};
</script>