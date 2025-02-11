<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `officerapp.each.mobilephoto`,
});
const pageId = {
  page: 'mobilephoto',
};
</script>