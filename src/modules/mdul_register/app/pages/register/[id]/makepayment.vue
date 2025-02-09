<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `register.each.makepayment`,
});
const pageId = {
  page: 'makepayment',
};
</script>