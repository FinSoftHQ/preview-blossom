<template>
  <RealmPageEach :pageId>
    <template #default="{ wrapped, entries, resolver }">
      <EntitySection
          v-model="wrapped.data"
          :entries
          :resolver
          :pick="['mobilephoto', ]"
        ></EntitySection>
        <div class="mt-4 flex justify-center text-center items-center">
          <UButton @click="TakePhoto" color="primary">Take Photo</UButton>
        </div>
    </template>
  </RealmPageEach>
</template>

<script setup lang="ts">

definePageMeta({
  name: `officerapp.each.previewphoto`,
});
const pageId = {
  page: 'previewphoto',
};

const TakePhoto = () => {
  navigateTo( { name: 'officerapp.each.mobilephoto'});
};

</script>