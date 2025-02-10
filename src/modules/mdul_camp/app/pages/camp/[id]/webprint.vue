<template>
  <RealmPageList :pageId>
    <RealmCardList :pageId="{ module: 'membership', realm: 'list', page: 'root' }">
      <template #default="{ wrapped, error, loading }">
        <div class="overflow-x-auto p-4">
          <h2 class="text-lg font-bold text-center mb-2">เขาใหญ่ รุ่น 190 | 5 - 11 พ.ค. 67</h2>
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
                <td class="border px-2 py-1 text-center">{{ row.sex }}</td>
                <td class="border px-2 py-1 text-center">{{ row.birthdate }}</td>
                <td class="border px-2 py-1 text-center">{{ row.region }}</td>
                <td class="border px-2 py-1">{{ row.coordinator }}</td>
                <td class="border px-2 py-1">{{ row.departurestart }}</td>
                <td class="border px-2 py-1">{{ row.car }}</td>
                <td class="border px-2 py-1">{{ row.bed }}</td>
                <td class="border px-2 py-1">{{ row.seat }}</td>
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
  name: `camp.each.webprint`,
});
const pageId = {
  page: 'webprint',
};

const columns = [
  {
    key: 'num',
    label: 'ลำดับ'
  },
  {
    key: 'firstname',
    label: 'ชื่อ'
  },
  {
    key: 'sex',
    label: 'เพศ'
  },
  {
    key: 'birthdate',
    label: 'อายุ'
  },
  {
    key: 'region',
    label: 'ภาค'
  },
  {
    key: 'coordinator',
    label: 'ผู้ประสานงาน'
  },
  {
    key: 'departurestart',
    label: 'เดินทาง'
  },
  {
    key: 'car',
    label: 'ที่นั่งรถ'
  },
  {
    key: 'bed',
    label: 'บ้านพัก'
  },
  {
    key: 'seat',
    label: 'ที่นั่งสมาชิก'
  },
];
</script>
