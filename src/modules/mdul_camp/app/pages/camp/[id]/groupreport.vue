<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.groupreport`,
});
const pageId = {
  page: 'groupreport',
};
</script>