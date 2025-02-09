<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.userinfor`,
});
const pageId = {
  page: 'userinfor',
};
</script>