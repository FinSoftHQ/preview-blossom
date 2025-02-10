<template>
  <RealmPageList :pageId>
    <RealmCardList :pageId="{ module: 'membership', realm: 'list', page: 'root' }">
      <template #default="{ wrapped }">
        <div class="overflow-x-auto p-4">
          <h2 class="text-lg font-bold text-center mb-2">ชื่อโครงการ</h2>
          <h2 class="text-lg font-bold text-center mb-2">ระหว่างวันที่ 1-7 กุมภาพันธ์</h2>
          <table class="border-collapse border w-full text-sm">
            <thead>
              <tr class="bg-gray-100">
                <th
                  v-for="column in columns"
                  :key="column.key"
                  class="border px-2 py-1"
                >{{ column.label }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in wrapped.data"
                :key="row.id"
              >
                <td class="border px-2 py-1 text-center">{{ index + 1 }}</td>
                <td class="border px-2 py-1">{{ row.firstname }} {{ row.surname }}</td>
                <td class="border px-2 py-1 text-center">{{ row.birthdate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </RealmCardList>
  </RealmPageList>

</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.superiortbprint`,
});
const pageId = {
  page: 'superiortbprint',
};

const columns = [
  {
    key: 'num',
    label: 'ลำดับ'
  },
  {
    key: 'firstname',
    label: 'ชื่อ-สกุล'
  },
  {
    key: 'birthdate',
    label: 'อายุ'
  },
];
</script>
