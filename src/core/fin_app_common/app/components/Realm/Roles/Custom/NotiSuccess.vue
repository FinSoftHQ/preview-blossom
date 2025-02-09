<template>
  <div class="mt-4 success-page flex flex-col items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
      <!-- <UIcon class="text-green-500 w-16 h-16 mb-4" name="i-line-md-confirm-circle" /> -->
      <h1 class="text-2xl font-bold mb-4">ลงทะเบียนสำเร็จแล้ว</h1>
      <p class="text-lg mb-4">หากท่านต้องการชำระเงินสามารถกดที่ปุ่ม 'ไปที่หน้าชำระ' ได้.</p>
      <div class="flex justify-center gap-4">
        <UButton color="white" to="/mobile">ไม่ใช่ตอนนี้</UButton>
        <UButton :to="{ name: makepaymentPageName }">ไปที่หน้าชำระ</UButton>
      </div>
    </div>
  </div>
  <!-- <div>
    <FPartTitle
      icon="i-heroicons-document"
      :actions
    >
      {{ title }}
    </FPartTitle>
    <RealmCardView
      :pageId="pageDef.pageId"
      :initial="data"
    ></RealmCardView>
  </div> -->
</template>

<script setup lang="ts">
import type { PageIdParam } from '@finsoft/blueprint';

const props = defineProps<{
  pageId: PageIdParam,
}>()
const pageDef = usePageDefinition(props.pageId);
const pageFunctions = usePageFunctions(pageDef);

const title = computed(() => pageDef.label || 'Show Item');
const { data, status, error } = await pageFunctions.backendCaller.get();

// const moduleInfo = useContextualModuleInfo();
const actions = computed(() => pageDef.actions || []);
const makepaymentPageName = pageFunctions.relativeName({ page: 'makepayment' });
</script>