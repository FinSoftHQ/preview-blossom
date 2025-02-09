<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.datahammapractice`,
});
const pageId = {
  page: 'datahammapractice',
};
</script>