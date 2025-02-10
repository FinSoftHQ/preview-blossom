<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.manageseat`,
});
const pageId = {
  page: 'manageseat',
};
</script>