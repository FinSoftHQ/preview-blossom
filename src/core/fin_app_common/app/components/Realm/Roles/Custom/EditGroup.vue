<template>
    <div>
      <FPartTitle icon="i-heroicons-pencil-square-20-solid">
        {{ title }}
      </FPartTitle>
      <RealmCardEdit
        :pageId="pageDef.pageId"
        :initial="data"
        :showBackButton="pageDef.hasPrevPage"
        @save="save"
      ></RealmCardEdit>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { PageIdParam } from '@finsoft/blueprint';
  
  const props = defineProps<{
    pageId: PageIdParam,
  }>()
  const pageDef = usePageDefinition(props.pageId);
  const pageFunctions = usePageFunctions(pageDef);
  
  const title = computed(() => pageDef.label || 'Edit Item');
  const { data: retrieved, status, error } = await pageFunctions.backendCaller.get();
  const data = ref<any>({});
  
  watchEffect(() => {
    if (status.value === 'success') {
      data.value = retrieved.value;
    }
  });
  
  async function save(data2save: any) {
    const result = await pageFunctions.backendCaller.update(data2save) as any;
    if (result.id)
      await navigateTo({ name: pageFunctions.relativeName({ realm: 'each', page: 'managegroup' }) });
  }
  
  useComponentResolver(BuiltInResolvers.Edit);
  </script>
  