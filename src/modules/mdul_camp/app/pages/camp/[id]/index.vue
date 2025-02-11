<template>
  <RealmPageEach :pageId>
    <template
      v-if="$slots.default"
      #default="{ wrapped, entries, resolver }"
    >
      <slot
        :wrapped
        :entries
        :resolver
      ></slot>

    </template>
  </RealmPageEach>
  <FItemGrid col="x6">
    <NuxtLink
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
    >
      <UCard class="mt-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <UIcon
          :name="item.icon"
          class="text-gray-400 w-9 h-8"
        />
        <h3 class="mb-2 text-gray-500 dark:text-gray-400">{{ item.title }}</h3>
        <span class="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
          <span :class="item.statusClass">
            {{ item.status }}
          </span>
        </span>
        <p class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <UIcon
            name="i-heroicons-information-circle"
            class="me-1.5 h-4 w-4 text-yellow-500 dark:text-yellow-400"
          />150 คน
        </p>
      </UCard>
    </NuxtLink>
  </FItemGrid>


  <RealmCardList :pageId="pageMemDef.pageId">
    <template #default="{ wrapped, entries, resolver }">
      <UDashboardPage>
        <UDashboardPanel grow>
          <UDashboardNavbar
            title="รายชื่อผู้ลงทะเบียน"
            :badge="`${wrapped.data.length} คน`"
          >
            <template #badge>
              <div class="flex items-center gap-2">
                <UBadge
                  :label="`ทั้งหมด ${wrapped.data.length} คน`"
                  color="green"
                  variant="subtle"
                  class="capitalize"
                />
                <UBadge
                  :label="`ชาย ${wrapped.data.filter(item => item.sex === 'male').length} คน`"
                  color="blue"
                  variant="subtle"
                  class="capitalize"
                />
                <UBadge
                  :label="`หญิง ${wrapped.data.filter(item => item.sex === 'female').length} คน`"
                  color="pink"
                  variant="subtle"
                  class="capitalize"
                />
              </div>
            </template>
          </UDashboardNavbar>
          <UDashboardToolbar>
            <template #left>
              <USelectMenu
                v-model="selectedStatuses"
                icon="i-heroicons-check-circle"
                placeholder="สถานะ"
                multiple
                :ui-menu="{ option: { base: 'capitalize' } }"
              />
              <USelectMenu
                v-model="selectedRegions"
                icon="i-heroicons-map"
                placeholder="เลือกภาค"
                multiple
                :ui-menu="{ option: { base: 'capitalize' } }"
              />
            </template>

            <template #right>
              <USelectMenu
                v-model="selectedColumns"
                icon="i-heroicons-adjustments-horizontal-solid"
                :options="columns"
                multiple
                class="hidden lg:block"
              >
                <template #label>
                  แสดงผลตาราง
                </template>
              </USelectMenu>
            </template>
          </UDashboardToolbar>
          <UTable
            @select="selectMember"
            :rows="wrapped.data"
            :columns="selectedColumns"
          >
            <template #num-data="{ row, index }">
              <div class="flex items-center gap-3">
                <span class="text-gray-900 dark:text-white font-medium">{{ index + 1 }} </span>
              </div>
            </template>
            <template #name-data="{ row }">
              <div class="flex items-center gap-3">
                <span class="text-gray-900 dark:text-white font-medium">{{ row.firstname }} {{ row.surname }}</span>
              </div>
            </template>
            <template #birthdate-data="{ row }">
              <div class="flex items-center gap-3">
                <span class="text-gray-900 dark:text-white font-medium">{{ row.birthdate ? calculateAge(row.birthdate) :
                  0 }} ปี</span>
              </div>
            </template>
            <template #status-data="{ row }">
              <UBadge
                :label="row.status"
                :color="row.payment === 'full' ? 'primary' : row.payment === 'deposit' ? 'orange' : 'red'"
                variant="subtle"
                class="capitalize"
              > <span v-if="row.payment === 'full'">ชำระเเล้ว</span>
                <span v-else-if="row.payment === 'deposit'">มัดจำ</span>
                <span v-else-if="row.payment === 'installment'">ค่างชำระ</span>
              </UBadge>
            </template>
          </UTable>
        </UDashboardPanel>
      </UDashboardPage>
    </template>
  </RealmCardList>

</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.root`,
});
const pageId = {
  page: 'root',
};

const pageDef = usePageDefinition(pageId);
const pageFunctions = usePageFunctions(pageDef);



const columns = [{
  key: 'num',
  label: '#'
}, {
  key: 'name',
  label: 'ชื่อ-สกุล',
  sortable: true
}, {
  key: 'sex',
  label: 'เพศ',
  sortable: true
}, {
  key: 'birthdate',
  label: 'อายุ',
  sortable: true
}, {
  key: 'region',
  label: 'ภาค',
  sortable: true
}, {
  key: 'status',
  label: 'สถานะการชำระ'
},
]

const items = [
  {
    link: "",
    icon: "material-symbols:event-seat-outline-rounded",
    title: "จัดที่นั่ง",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-green-900 dark:text-green-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managebed' },
    icon: "fluent:bed-16-regular",
    title: "จัดที่พัก",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managecar' },
    icon: "hugeicons:user-group",
    title: "เจ้าภาพผู้ใหญ่",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: { name: 'camp.each.managecar' },
    icon: "i-heroicons-truck",
    title: "ที่นั่งรถ",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
  {
    link: "",
    icon: "i-heroicons-user-group",
    title: "จัดกลุ่มหลัก",
    statusClass: "inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
    status: "จัดแล้ว"
  },
  {
    link: "",
    icon: "i-heroicons-user-circle",
    title: "จัดกลุ่มติว",
    statusClass: "inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
    status: "ยังไม่ได้จัด"
  },
];


const calculateAge = (birthdate: string) => {
  const birthYear = parseInt(birthdate.substring(0, 4));
  const birthMonth = parseInt(birthdate.substring(4, 6));
  const birthDay = parseInt(birthdate.substring(6, 8));

  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const monthDifference = today.getMonth() - birthMonth;
  const dayDifference = today.getDate() - birthDay;

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};

const selectedColumns = ref(columns)
const selectedStatuses = ref([])
const selectedRegions = ref([])

const pageMemDef = usePageDefinition({ module: 'membership', realm: 'list', page: 'root' });

function selectMember(item: any) {
  navigateTo({ name: pageFunctions.relativeName({ module: 'membership', realm: 'each', page: 'root' }), params: { id: item.id } });
}
</script>