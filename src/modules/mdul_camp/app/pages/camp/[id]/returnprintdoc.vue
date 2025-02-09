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
        <div class="overflow-x-auto p-4 text-xs">
          <h2 class="text-xl font-bold text-center py-2">
            ระบุการเดินทางกลับของเจ้าภาพ
          </h2>
          <h3 class="text-md font-semibold text-center py-1">
            รหัสโครงการ 1321 รุ่น 170
          </h3>
          <p class="text-sm font-semibold text-end py-1">
            ดูแลเจ้าภาพในโควต้าของ..........................................
          </p>
          <div class="flex gap-8 py-1">
            <p class="text-sm font-semibold text-start">
              กลุ่ม 01
            </p>
            <p class="text-sm font-semibold text-start">
              พี่เลี้ยง
            </p>
          </div>
          <table class="border-collapse border w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-center">
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >ลำดับ</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >ชื่อ - สกุล</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >เพศ</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >อายุ</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >มีรูป</th>
                <th
                  class="border px-2 py-1"
                  colspan="4"
                >การเดินทางกลับ</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >มาปธ กี่ครั้ง</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >เคยมาติว</th>
                <th
                  class="border px-2 py-1"
                  rowspan="2"
                >หมายเหตุ</th>
              </tr>
              <tr class="bg-gray-200 text-center">
                <th class="border px-2 py-1">รถวัด</th>
                <th class="border px-2 py-1">อยู่ต่อรุ่น</th>
                <th class="border px-2 py-1">บขส</th>
                <th class="border px-2 py-1">กลับเอง</th>
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
                <td class="border px-2 py-1">{{ row.birthdate }}</td>
                <td class="border px-2 py-1">{{ row.photo }}</td>
                <td class="border px-2 py-1">{{ row.departureend }}</td>
                <td class="border px-2 py-1">{{ row.departureend }}</td>
                <td class="border px-2 py-1">{{ row.departureend }}</td>
                <td class="border px-2 py-1">{{ row.departureend }}</td>
                <td class="border px-2 py-1"></td>
                <td class="border px-2 py-1"></td>
              </tr>
            </tbody>
          </table>
          <div class="mt-4 text-start">
            <p class="font-semibold">
              รวมสมาชิก กลุ่ม 01 {{ wrapped.data.length }} คน
            </p>
            <p>
              อุบาสก {{ wrapped.data.filter(member => member.sex === 'ชาย').length }} คน | อุบาสิกา {{
                wrapped.data.filter(member => member.sex === 'หญิง').length }} คน
            </p>
          </div>
        </div>
      </template>
    </RealmCardList>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.returnprintdoc`,
});
const pageId = {
  page: 'returnprintdoc',
};

interface Member {
  id: number;
  name: string;
  gender: string;
  age?: number;
  hasPhoto: boolean;
  transport: {
    bus: boolean;
    stayExtraNight: boolean;
    ownVehicle: boolean;
    returnBus: boolean;
  };
  meals: {
    count: number;
    note?: string;
  };
}


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