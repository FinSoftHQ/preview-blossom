<template>
  <BSideNavPage>
    <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-md mt-4">เอกสาร : World Peace Valley
      (เขาใหญ่)
      รุ่น 201</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="item in docmenu"
        :key="item.title"
        class="p-2 bg-white shadow-md dark:bg-gray-800 hover:bg-gray-100 hover:shadow-lg dark:hover:shadow-xl  cursor-pointer"
      >
        <NuxtLink :to="item.to">
          <div class="p-4 text-center items-center">
            <UIcon
              :name="item.icon"
              class="mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
            />
            <p class="text-lg text-gray-900 font-bold">{{ item.title }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </BSideNavPage>
</template>
<script setup lang="ts">
const docmenu = ref([
  {
    title: 'รายชื่อเจ้าภาพ',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.webprint' },
  },
  {
    title: 'เจ้าภาพผู้ใหญ่และคนเก่า+รูป',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.superiorphtprint' },
  },
  {
    title: 'เจ้าภาพผู้ใหญ่และคนเก่า',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.superiortbprint' },
  },
  {
    title: 'ป้ายชื่อกลุ่ม',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.nametagprint' },
  },
  {
    title: 'เช็คฝากโทรศัพท์',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.phonecheckprintdoc' },
  },
  {
    title: 'เอกสารเดินทางกลับ',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.returnprintdoc' },
  },
  {
    title: 'กลุ่มหลัก',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.superiortbprint' },
  },
  {
    title: 'กลุ่มติว',
    icon: 'i-mdi-paper-outline',
    to: { name: 'camp.each.superiortbprint' },
  },

])
</script>