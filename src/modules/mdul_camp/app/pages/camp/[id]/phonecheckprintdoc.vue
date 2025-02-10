<template>
  <RealmPageList :pageId>
    <RealmCardList :pageId="{ module: 'membership', realm: 'list', page: 'root' }">
      <template #default="{ wrapped, error, loading }">
        <div class="overflow-x-auto p-4 text-sm">
          <h2 class="text-lg font-bold text-center bg-yellow-300 py-2">
            ใบเซ็ตรับฝากโทรศัพท์
          </h2>
          <h3 class="text-md font-semibold text-center py-1">
            รุ่น 170
          </h3>
          <p class="text-right text-xs">ดูแลเจ้าภาพในโควต้าของ..........................................</p>

          <h3 class="text-md font-bold text-center mt-2">
            กลุ่ม 01 พี่เลี้ยง
          </h3>

          <table class="border-collapse border w-full mt-2 text-xs">
            <thead>
              <tr class="bg-gray-200 text-center">
                <th class="border px-2 py-1">ลำดับ</th>
                <th class="border px-2 py-1">ชื่อ - สกุล</th>
                <th class="border px-2 py-1 bg-orange-200">เพศ</th>
                <th class="border px-2 py-1">รุ่นโทรศัพท์</th>
                <th class="border px-2 py-1">รับฝาก<br /><span class="text-xs">(ลายเซ็นเจ้าของ)</span></th>
                <th class="border px-2 py-1">รับคืน<br /><span class="text-xs">(ลายเซ็นเจ้าของ)</span></th>
                <th class="border px-2 py-1 bg-blue-100">หมายเหตุ<br /><span class="text-xs">(เฉพาะเจ้าหน้าที่)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in wrapped.data"
                :key="row.id"
              >
                <td class="border px-2 py-1 text-center">{{ index + 1 }}</td>
                <td class="border px-2 py-1">{{ row.firstname }} {{ row.surname }}</td>
                <td class="border px-2 py-1 text-center bg-orange-100">{{ row.sex }}</td>
                <td class="border px-2 py-1 "></td>
                <td class="border px-2 py-1 "></td>
                <td class="border px-2 py-1 "></td>
                <td class="border px-2 py-1 "></td>
              </tr>
            </tbody>
          </table>

          <div class="mt-4 text-start">
            <p>
              รวมสมาชิก คน
            </p>
            <p>
              อนุสาสก คน | อนุอภิวัด คน
            </p>
          </div>
        </div>
      </template>
    </RealmCardList>
  </RealmPageList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.phonecheckprintdoc`,
});
const pageId = {
  page: 'phonecheckprintdoc',
};
</script>
