<template>
  <RealmPageList :pageId>
    <RealmCardList :pageId="{ module: 'membership', realm: 'list', page: 'root' }">
      <template #default="{ wrapped, error, loading }">
        <FItemGrid col="x2">
          <div
            v-for="(row, index) in wrapped.data"
            :key="row.id"
            class="border-b border-black border-r p-2"
          >
            <h1 class="text-center text-2xl font-semibold mt-8 mb-4 text-blue-700">{{ row.firstname }}</h1>
            <h3 class="text-center text-md text-blue-700">{{ row.surname }}</h3>
            <div class="flex justify-between">
              <p class="text-md font-semibold text-red-700">กลุ่ม {{ row.group }}</p>
              <p class="text-md font-semibold text-red-700">ภาค {{ row.region }}</p>
            </div>
          </div>
        </FItemGrid>
      </template>
    </RealmCardList>
  </RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.nametagprint`,
});
const pageId = {
  page: 'nametagprint',
};

</script>