<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.each.personalinfo`,
});
const pageId = {
  page: 'personalinfo',
};
</script>