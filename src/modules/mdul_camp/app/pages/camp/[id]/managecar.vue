<template>
 <RealmPageEach :pageId>
    <template v-if="$slots.default"
      #default="{ wrapped, entries, resolver }">
      <slot :wrapped
        :entries
        :resolver></slot>
    </template>
  </RealmPageEach>
  <RealmCardList :pageId="pageMemDef.pageId">

  </RealmCardList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.managecar`,
});
const pageId = {
  page: 'managecar',
};

const pageMemDef = usePageDefinition({ module: 'membership', realm: 'list', page: 'root' });

</script>