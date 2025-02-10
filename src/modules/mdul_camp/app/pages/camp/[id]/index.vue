<template>
  <RealmPageEach :pageId>
    <template
      v-if="$slots.default"
      #default="{ wrapped, entries, resolver }"
    >
      <slot
        :wrapped
        :entries
        :resolver
      ></slot>
    </template>
  </RealmPageEach>
  <FItemGrid col="x6">
    <NuxtLink
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
    >
      <UCard class="mt-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <UIcon
          :name="item.icon"
          class="text-gray-400 w-9 h-8"
        />
        <h3 class="mb-2 text-gray-500 dark:text-gray-400">{{ item.title }}</h3>
        <span class="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
          <span :class="item.statusClass">
            {{ item.status }}
          </span>
        </span>
        <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <UIcon
            name="i-heroicons-information-circle"
            class="me-1.5 h-4 w-4 text-yellow-500 dark:text-yellow-400"
          />
        </p>
      </UCard>
    </NuxtLink>
  </FItemGrid>

  <RealmCardList :pageId="pageMemDef.pageId">
  </RealmCardList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.root`,
});
const pageId = {
  page: 'root',
};


const items = [
  {
    link: "",
    icon: "material-symbols:event-seat-outline-rounded",
    title: "จัดที่นั่ง",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-green-900 dark:text-green-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managebed' },
    icon: "fluent:bed-16-regular",
    title: "จัดที่พัก",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managecar' },
    icon: "hugeicons:user-group",
    title: "เจ้าภาพผู้ใหญ่",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managecar' },
    icon: "i-heroicons-truck",
    title: "ที่นั่งรถ",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: "",
    icon: "i-heroicons-user-group",
    title: "จัดกลุ่มหลัก",
    statusClass: "inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
    status: "จัดแล้ว"
  },
  {
    link: "",
    icon: "i-heroicons-user-circle",
    title: "จัดกลุ่มติว",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
];
const pageMemDef = usePageDefinition({ module: 'membership', realm: 'list', page: 'root' });
</script>