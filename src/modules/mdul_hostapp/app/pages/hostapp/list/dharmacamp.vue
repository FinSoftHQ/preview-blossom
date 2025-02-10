<template>
  <!-- <RealmPageList :pageId></RealmPageList> -->
  <RealmCardList @select="Selection" :pageId="pageMemDef.pageId">

</RealmCardList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.dharmacamp`,
});
const pageId = {
  page: 'dharmacamp',
};
const pageMemDef = usePageDefinition({ module: 'camp', realm: 'list', page: 'root' });

const Selection = (selected: any) => {
  navigateTo({
    name: 'register.create.root',
    params: {
      id: selected.id,
    },
  });
}

</script>