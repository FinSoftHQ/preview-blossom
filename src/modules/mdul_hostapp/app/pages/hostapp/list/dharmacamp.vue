<template>
  <!-- <RealmPageList :pageId></RealmPageList> -->
  <RealmCardList :pageId="pageMemDef.pageId">
    <template #default="{ wrapped, entries, resolver }">
      <div v-for="item in wrapped.data"
        :key="item.id">
        <UCard>
          <div class="flex-1 justify-between space-y-2">
            <div>
              <h1 class="text-lg text-gray-900 font-bold flex items-center">
                <UIcon class="mr-2 text-primary"
                  name="i-mdi-format-list-numbered" /> รุ่นที่ {{ item.generation }}
              </h1>
              <div class="flex items-center space-x-2">
                <UIcon class="mr-2 text-primary"
                  name="i-mdi-map-marker" />
                <p class="text-gray-500">สถานที่ :</p>
                <p class="text-gray-900 font-bold">{{ formatName(item.name) }}</p>
              </div>
              <div class="flex items-center space-x-2">
                <UIcon class="mr-2 text-primary"
                  name="i-mdi-calendar-range" />
                <p class="text-gray-500">วันที่ :</p>
                <p class="text-gray-900 font-bold">{{ formatThaiDate(item.startDate) }} - {{
                  formatThaiDate(item.endDate) }}</p>
              </div>
            </div>
            <div>
              <UButton @click="Selection(item)"
                block>ลงทะเบียน</UButton>
            </div>
          </div>
        </UCard>
      </div>

    </template>
  </RealmCardList>
</template>

<script setup lang="ts">
definePageMeta({
  name: `hostapp.list.dharmacamp`,
});
const pageId = {
  page: 'dharmacamp',
};
const pageMemDef = usePageDefinition({ module: 'camp', realm: 'list', page: 'root' });

function formatName(name: string): string {
  const nameMap: Record<string, string> = {
    WPV: 'World Peace Valley (เขาใหญ่)',
    PNW: 'พนาวัฒน์ (เชียงใหม่)',
    HFP: 'สวนป่าหิมวันต์ (ภูเรือ)'
  };
  return nameMap[name] || name;
}

function formatThaiDate(dateString: string): string {
  const thaiMonths = [
    "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
    "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
  ];

  const year = parseInt(dateString.slice(0, 4), 10) + 543; // แปลงเป็น พ.ศ.
  const month = parseInt(dateString.slice(4, 6), 10) - 1; // หาว่าเป็นเดือนอะไร
  const day = parseInt(dateString.slice(6, 8), 10); // วันที่

  return `${day}/${thaiMonths[month]}/${year}`;
}

const Selection = (item: any) => {
  navigateTo({
    name: 'membership.create.root',
    params: {
      id: item.id,
    },
  });
}

</script>