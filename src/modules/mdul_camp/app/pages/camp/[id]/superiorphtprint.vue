<template>
  <RealmPageList :pageId>
    <RealmCardList :pageId="{ module: 'membership', realm: 'list', page: 'root' }">
      <template #default="{ wrapped, error, loading }">
        <div class="overflow-x-auto p-4">
          <h2 class="text-xl font-bold text-center mb-2">รายชื่อ เจ้าภาพผู้ใหญ่ และ คนเก่า </h2>
          <h2 class="text-xl font-bold text-center mb-2">ระหว่างวันที่ 1-7 กุมภาพันธ์</h2>
          <div class="mb-4">
            <div class="space-y-4">
              <div
                v-for="(row) in wrapped.data"
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
  </RealmPageList>

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
</script>