<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.personalinfo`,
});
const pageId = {
  page: 'personalinfo',
};
</script>