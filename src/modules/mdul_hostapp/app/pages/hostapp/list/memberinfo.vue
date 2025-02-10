<template>
  <RealmPageList :pageId></RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.memberinfo`,
});
const pageId = {
  page: 'memberinfo',
};
</script>