<template>
  <div class="flex justify-end items-center">
    <UButton @click="printPage">Print</UButton>
  </div>
  <div
    class="a4-page"
    ref="printableArea"
  >
    <RealmCardList :pageId="pageMemDef.pageId">
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
              </tr>

            </tbody>
          </table>

          <div class="mt-4 text-start">
            <p>
              รวมสมาชิก {{ members.length }} คน
            </p>
            <p>
              อนุสาสก {{ maleCount }} คน | อนุอภิวัด {{ femaleCount }} คน
            </p>
          </div>
        </div>
      </template>
    </RealmCardList>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.phonecheckprintdoc`,
});
const pageId = {
  page: 'phonecheckprintdoc',
};

interface Member {
  id: number;
  name: string;
  gender: string;
  phoneDeposit?: string;
  depositSignature?: string;
  receiveSignature?: string;
  note?: string;
}

const members = ref<Member[]>([
  { id: 1, name: "ธนศ จินดาโกศลวิทย์", gender: "ช" },
  { id: 2, name: "รัตพันธุ์ อภิธิตปิติพงศ์", gender: "ช" },
  { id: 3, name: "กันย์รัตน์ เพิ่มพิบูลธรรม", gender: "ญ" },
  { id: 4, name: "พ.ญ. กาญจนา ชัชดิกิตติวี", gender: "ญ" },
  { id: 5, name: "นริศา จินดาโกศลวิทย์", gender: "ญ" },
]);

const maleCount = members.value.filter(m => m.gender === "ช").length;
const femaleCount = members.value.filter(m => m.gender === "ญ").length;
const printableArea = ref<HTMLDivElement | null>(null);

const printPage = () => {
  const printContents = printableArea.value?.innerHTML;
  const originalContents = document.body.innerHTML;

  if (printContents) {
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }
};

const pageMemDef = usePageDefinition({ module: 'membership', realm: 'list', page: 'root' });
</script>


<style scoped>
.a4-page {
  width: 297mm;
  min-height: 210mm;
  padding: 20mm;
  margin: 10mm auto;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media print {
  .a4-page {
    margin: 0;
    box-shadow: none;
    page-break-after: always;
  }
}
</style>