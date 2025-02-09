<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `membership.each.makepayment`,
});
const pageId = {
  page: 'makepayment',
};
</script>