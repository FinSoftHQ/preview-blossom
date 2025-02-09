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
        <div class="overflow-x-auto p-4">
          <h2 class="text-lg font-bold text-center mb-2">รายชื่อ เจ้าภาพผู้ใหญ่ และ คนเก่า </h2>
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
                <td class="border px-2 py-1">{{ row.firstname }}  {{ row.surname }}</td>
                <td class="border px-2 py-1 text-center">{{ row.birthdate }}</td>
 
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </RealmCardList>
  </div>
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