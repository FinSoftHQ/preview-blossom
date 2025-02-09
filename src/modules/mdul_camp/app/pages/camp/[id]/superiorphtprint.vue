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
            <h2 class="text-xl font-bold text-center mb-2">รายชื่อ เจ้าภาพผู้ใหญ่ และ คนเก่า </h2>
            <h2 class="text-xl font-bold text-center mb-2">ระหว่างวันที่ 1-7 กุมภาพันธ์</h2>
            <div class="mb-4">
            <div class="space-y-4">
              <div
            v-for="(row, index) in wrapped.data"
            :key="row.id"
            class="border py-4 px-8"
              >

            <div class="flex justify-between items-center ">
            <div>
              <p class="text-xl font-bold">ชื่อ-สกุล {{ row.firstname }} {{ row.surname }}</p>
              <p class="text-xl font-bold">อายุ {{ row.birthdate }} {{ row.region }}</p>
              <p class="text-xl font-bold">วันที่
              </p>
            </div>
            <div>
              <UIcon
              name="i-mdi-person-box"
              class="w-[20mm] h-[20mm]"
              ></UIcon>
            </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </RealmCardList>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.superiorphtprint`,
});

const pageId = {
  page: 'superiorphtprint',
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