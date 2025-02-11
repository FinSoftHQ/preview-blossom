<template>
  <RealmPageEach :pageId>
    <template #default="{ wrapped, entries, resolver }">
      <EntitySection v-if="wrapped.data.mobilephoto"
        v-model="wrapped.data"
        :entries
        :resolver
        :pick="['mobilephoto',]">
      </EntitySection>
      <div v-if="!wrapped.data.mobilephoto" class="flex justify-center text-center items-center bg-gray-200">
        <UIcon 
          name="i-mdi-person"
          class="w-[50mm] h-[50mm]" />
      </div>
      <div class="mt-4 flex justify-center text-center items-center">
        <UButton icon="i-mdi-photo-camera"
          @click="TakePhoto"
          color="primary">ถ่ายรูป</UButton>
      </div>
    </template>
  </RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `officerapp.each.root`,
});
const pageId = {
  page: 'root',
};

const TakePhoto = () => {
  navigateTo({ name: 'officerapp.each.mobilephoto' });
};
</script>