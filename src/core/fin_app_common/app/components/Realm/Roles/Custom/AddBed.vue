<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-4">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-3">
          <p class="flex justify-center mb-2">อาคารบ้านพักหญิง 9</p>
          <UCard>
            <div>
              <div class="grid grid-cols-3 gap-2">
                <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400 mt-2">บน</p>
                <div
                  v-for="i in 2"
                  :key="i"
                >
                  <div
                    @click="handClick(i, `อาคารบ้านพักหญิง (ล่าง) ห้อง 90${i}`)"
                    :class="{ 'bg-blue-100': room.selected === i, 'bg-white': room.selected !== i }"
                    class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div>
                      <p class="font-normal text-gray-700 dark:text-gray-400 ml-5 mt-2 mb-2">ห้อง 90{{ i }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
          <UCard>
            <div>
              <div class="grid grid-cols-3 gap-2">
                <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400 mt-2">ล่าง</p>
                <div
                  v-for="i in 2"
                  :key="i + 2"
                >
                  <div
                    @click="handClick(i + 2, `อาคารบ้านพักหญิง (บน) ห้อง 90${i + 2}`)"
                    :class="{ 'bg-blue-100': room.selected === i + 2, 'bg-white': room.selected !== i + 2 }"
                    class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div>
                      <p class="font-normal text-gray-700 dark:text-gray-400 ml-5 mt-2 mb-2">ห้อง 90{{ i + 2 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
        <div class="col-span-3">
          <p class="flex justify-center mb-2">อาคารบ้านพักหญิง 10</p>
          <UCard>
            <div>
              <div class="grid grid-cols-3 gap-2">
                <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400 mt-2">บน</p>
                <div
                  v-for="i in 2"
                  :key="i + 4"
                >
                  <div
                    @click="handClick(i + 4, `อาคารบ้านพักหญิง (ล่าง) ห้อง 10${i}`)"
                    :class="{ 'bg-blue-100': room.selected === i + 4, 'bg-white': room.selected !== i + 4 }"
                    class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div>
                      <p class="font-normal text-gray-700 dark:text-gray-400 ml-5 mt-2 mb-2">ห้อง 10{{ i }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
          <UCard>
            <div>
              <div class="grid grid-cols-3 gap-2">
                <p class="flex justify-center font-normal text-gray-700 dark:text-gray-400 mt-2">ล่าง</p>
                <div
                  v-for="i in 2"
                  :key="i + 6"
                >
                  <div
                    @click="handClick(i + 6, `อาคารบ้านพักหญิง (บน) ห้อง 10${i + 2}`)"
                    :class="{ 'bg-blue-100': room.selected === i + 6, 'bg-white': room.selected !== i + 6 }"
                    class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div>
                      <p class="font-normal text-gray-700 dark:text-gray-400 ml-5 mt-2 mb-2">ห้อง 10{{ i + 2 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-12 gap-2">
          <div class="col-span-12 w-full flex justify-between mt-2">
            <h1><b>{{ room.detail }}</b></h1>
            <div>
              <div class="flex justify-end">
                <UButton
                  class="mb-3"
                  @click="autosort()"
                >จัดที่พักอัตโนมัติ</UButton>
              </div>
              <div class="flex gap-4">
                <h1><b>แก้ไขที่นั่ง</b></h1>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="selected"
                    class="sr-only peer"
                  >
                  <div
                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ toggleText }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="col-span-9">
            <div class="grid grid-cols-12 gap-2">
              <div class="col-span-12 text-center">ปีกซ้าย จำนวนคน: {{ member1.length }}</div>
              <div class="grid grid-rows-2 grid-flow-col gap-3">
                <div
                  v-for="(pos, index) in position"
                  :key="index"
                  :class="{ 'bg-green-100': index === 0 }"
                >
                  <UCard
                    :class="{ 'bg-blue-100': pos.member, 'bg-pink-100': selected && pos.member }"
                    style="width: 110px; height: 80px"
                    @click="handleCardClick(pos.member, index)"
                  >
                    <div class="flex items-center justify-center flex-col">
                      <!-- <span
                        :class="['-mt-2 w-2 h-2 me-5 rounded-full', pos.member ? getColorClass(pos.member.group - 1) : 'bg-white']"
                      ></span> -->
                      <p
                          v-if="pos.member"
                          class="-mt-2 text-xs truncate overflow-hidden w-6/6"
                        >
                          {{ pos.member.sector }} 
                        </p>
                      <div class="flex items-center justify-center flex-col text-xs">
                        <p>{{ pos.name }}</p>
                        <Icon
                          v-if="selected && pos.member"
                          class="w-[4mm] h-[4mm] text-red-500"
                          name="i-mi-delete"
                        ></Icon>
                        <p
                          v-if="pos.member"
                          :class="pos.member.sex === 'นาย' ? 'text-blue-500' : 'text-pink-500'"
                          class="text-xs truncate overflow-hidden w-6/6"
                        >
                          {{ pos.member.name }} {{ pos.member.Lname }}
                        </p>
                        <Icon
                          v-if="!pos.member"
                          class="w-[4mm] h-[4mm]"
                          name="fluent:bed-16-filled"
                        ></Icon>                       
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>
            </div>
            <div class="flex justify-between font-bold mt-8 mb-4">
              <p>ประตูห้องน้ำ</p>
              <p>ประตูทางเข้า</p>
            </div>
            <div class="grid grid-cols-12 gap-2">
              <div class="col-span-12 text-center">ปีกขวา</div>
              <div class="grid grid-rows-2 grid-flow-col gap-3">
                <div
                  v-for="(pos, index) in position2"
                  :key="index"
                  :class="{ 'bg-green-100': index === 0 }"
                >
                  <UCard
                    :class="{ 'bg-blue-100': pos.member, 'bg-pink-100': selected && pos.member }"
                    style="width: 110px; height: 80px;"
                    @click="handleCardClick(pos.member, index, true)"
                  >
                    <div class="flex items-center justify-center flex-col">
                      <!-- <span
                        :class="['w-2 h-2 -mt-2 me-5 rounded-full', pos.member ? getColorClass(pos.member.group - 1) : 'bg-white']"
                      ></span> -->
                      <p
                        v-if="pos.member"
                        class="-mt-2 text-xs truncate overflow-hidden w-6/6"
                      >
                        {{ pos.member.sector }}
                      </p>
                      <div class="flex items-center justify-center flex-col">
                        <p class="text-xs">{{ pos.name }}</p>
                        <Icon
                          v-if="selected && pos.member"
                          class="w-[4mm] h-[4mm] text-red-500"
                          name="i-mi-delete"
                        ></Icon>
                        <p
                          v-if="pos.member"
                          :class="pos.member.sex === 'นาย' ? 'text-blue-500' : 'text-pink-500'"
                          class="text-xs truncate overflow-hidden w-6/6"
                        >
                          {{ pos.member.name }} {{ pos.member.Lname }}
                        </p>
                        <Icon
                          v-if="!pos.member"
                          class="w-[4mm] h-[4mm]"
                          name="fluent:bed-16-filled"
                        ></Icon>
                       
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UModal v-model="isOpen">
        <div class="p-4">
          <p>ชื่อ: {{ selectedMember.name }} {{ selectedMember.Lname }}</p>
          <p>เพศ: {{ selectedMember.sex }}</p>
          <p>อายุ: {{ selectedMember.age }}</p>
          <p>เบอร์โทร: {{ selectedMember.phone }}</p>
        </div>
      </UModal>
    </div>
    <div>
      <div class="mt-4 flex flex-col justify-between gap-4">
        <USelect
          v-model="country"
          :options="countries"
        />
        <USelect
          v-model="country2"
          :options="countries2"
        />
        <UInput
          v-model="searchQuery"
          placeholder="ค้นหา"
          class="mb-4"
        />
      </div>
      <div class="mt-2 mb-4 flex justify-between font-bold text-red-500 dark:text-red-400">
        ยังไม่ได้จัดที่นั่ง ({{ member2.length }} คน)
      </div>
      <div
        v-for="(person, index) in sortedMembers(country, member2)"
        :key="index"
        :class="{ 'bg-green-100': selectedMemberIndex === index || (selectedMemberIndex === null && index === 0) }"
        class="mb-2"
        @click="selectUnassignedMember(index)"
      >
        <div
          class="p-2 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="flex justify-between">
            <div>
              <p class="font-bold text-gray-500">
                <Icon
                  v-if="person.sex === 'นาย'"
                  class="w-[4mm] h-[4mm] text-blue-500 dark:text-grayblue-400 mb-1"
                  name="icon-park-outline:male"
                ></Icon>
                <Icon
                  v-else
                  class="w-[4mm] h-[4mm] text-pink-500 dark:text-grayblue-400 mb-1"
                  name="icon-park-outline:female"
                ></Icon>
                <span class="inline text-md font-bold ml-8">{{ person.name }} {{ person.Lname }}</span>
              </p>
              <p class="text-gray-500 font-bold ml-12">{{ person.phone }} {{ person.age }} ปี</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 mb-4 flex justify-between font-bold text-green-500 dark:text-green-400">
        จัดแล้ว ({{ member1.length }} คน)
      </div>
      <div
        v-for="(person, index) in sortedMembers(country, member1)"
        :key="index"
        class="mb-2"
      >
        <div
          class="p-2 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="flex justify-between">
            <div>
              <p class="font-bold text-gray-500">
                <Icon
                  v-if="person.sex === 'นาย'"
                  class="w-[4mm] h-[4mm] text-blue-500 dark:text-grayblue-400 mb-1"
                  name="icon-park-outline:male"
                ></Icon>
                <Icon
                  v-else
                  class="w-[4mm] h-[4mm] text-pink-500 dark:text-grayblue-400 mb-1"
                  name="icon-park-outline:female"
                ></Icon>
                <span class="inline text-md font-bold ml-8">{{ person.name }} {{ person.Lname }}</span>
              </p>
              <p class="text-gray-500 font-bold ml-12">{{ person.phone }} {{ person.age }} ปี</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const selected = ref(false);
const countries = ['เลือกภาค', 'ภาคเหนือ', 'ภาคกลาง', 'ภาคใต้', 'ภาคอีสาน'];
const countries2 = ['เลือกผู้ประสานงาน', 'นายฉัตรธร ตรีวุฒิ', 'นายชยา ชัยเจริญ', 'นางนรีรัตน์ ศรีสดุดี', 'นางนภัสสร รุ่งทิพย์'];
const country = ref(countries[0]);
const country2 = ref(countries2[0]);

watch(country, (newValue) => {
  const coordinatorMap = {
    'ภาคเหนือ': 'นายฉัตรธร ตรีวุฒิ',
    'ภาคกลาง': 'นายชยา ชัยเจริญ',
    'ภาคใต้': 'นางนรีรัตน์ ศรีสดุดี',
    'ภาคอีสาน': 'นางนภัสสร รุ่งทิพย์'
  };
  country2.value = coordinatorMap[newValue] || countries2[0];
});

watch(country2, (newValue) => {
  const sectorMap = {
    'นายฉัตรธร ตรีวุฒิ': 'ภาคเหนือ',
    'นายชยา ชัยเจริญ': 'ภาคกลาง',
    'นางนรีรัตน์ ศรีสดุดี': 'ภาคใต้',
    'นางนภัสสร รุ่งทิพย์': 'ภาคอีสาน'
  };
  country.value = sectorMap[newValue] || countries[0];
});

const room = ref({
  selected: 5,
  detail: 'อาคารบ้านพักหญิง ชั้น 1 ฝังซ้าย'
});

const handClick = (selected: number, detail: string) => {
  room.value.selected = selected;
  room.value.detail = detail;
  console.log(room.value.selected);
};

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

const getColorClass = (index) => colors[index % colors.length];

interface Member {
  id: string;
  sex: string;
  name: string;
  Lname: string;
  phone: string;
  position: string;
  group: string;
  sector: string;
  coordinator: string;
  age: string;
}

const position = ref(Array.from({ length: 16 }, (_, i) => ({ name: `E${i + 1}`, member: null as Member | null })));
const position2 = ref(Array.from({ length: 16 }, (_, i) => ({ name: `D${i + 1}`, member: null as Member | null })));

const member1 = ref([]);
const member2 = ref([
  { id: '1', sex: 'นาง', name: 'ธรรมภณ', Lname: ' จุลพัฒน์', phone: '0699593636', position: '', group: '1', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '2', sex: 'นาย', name: 'ฐิติกร', Lname: ' ศิริธารา', phone: '0983593636', position: '', group: '3', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '3', sex: 'นาย', name: 'ณัฏฐกานต์', Lname: ' สุวรรณโชติ', phone: '0883593636', position: '', group: '3', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '4', sex: 'นาย', name: 'ปัถย์', Lname: ' ปานประกอบ', phone: '0968593636', position: '', group: '4', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '5', sex: 'นาง', name: 'โสรัตน์ ', Lname: ' วัฒนศักดิ์สกุล', phone: '0683593636', position: '', group: '1', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '6', sex: 'นาง', name: 'ภาสกร', Lname: ' เกษมทรัพย์', phone: '0683593636', position: '', group: '2', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '7', sex: 'นาย', name: 'ปิติภูมิ', Lname: ' ศิริภาพันธ์', phone: '0683593636', position: '', group: '4', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '8', sex: 'นาง', name: 'ภาสกร', Lname: ' เกษมทรัพย์', phone: '0936593636', position: '', group: '2', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '10', sex: 'นาง', name: 'ปิติภูมิ', Lname: ' ศิริภาพันธ์', phone: '0869593636', position: '', group: '1', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23' },
  { id: '11', sex: 'นาย', name: 'กิตติพงษ์', Lname: ' วงศ์สุวรรณ', phone: '0812345678', position: '', group: '3', sector: 'ภาคเหนือ', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '25' },
  { id: '12', sex: 'นาง', name: 'จิราภรณ์', Lname: ' ศรีสวัสดิ์', phone: '0823456789', position: '', group: '2', sector: 'ภาคกลาง', coordinator: 'นายชยา ชัยเจริญ', age: '30' },
  { id: '13', sex: 'นาย', name: 'ณัฐพล', Lname: ' ทองดี', phone: '0834567890', position: '', group: '4', sector: 'ภาคอีสาน', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '28' },
  { id: '14', sex: 'นาง', name: 'ธนพร', Lname: ' แซ่ลี้', phone: '0845678901', position: '', group: '1', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '22' },
  { id: '15', sex: 'นาย', name: 'ปริญญา', Lname: ' ศรีสุข', phone: '0856789012', position: '', group: '3', sector: 'ภาคเหนือ', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '27' },
  { id: '16', sex: 'นาง', name: 'พัชรินทร์', Lname: ' วัฒนชัย', phone: '0867890123', position: '', group: '2', sector: 'ภาคกลาง', coordinator: 'นายชยา ชัยเจริญ', age: '29' },
  { id: '17', sex: 'นาย', name: 'ภูมิพัฒน์', Lname: ' แก้วมณี', phone: '0878901234', position: '', group: '3', sector: 'ภาคอีสาน', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '26' },
  { id: '18', sex: 'นาง', name: 'มณีรัตน์', Lname: ' ศรีทอง', phone: '0889012345', position: '', group: '1', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '24' },
  { id: '19', sex: 'นาย', name: 'วรพล', Lname: ' จันทร์เพ็ญ', phone: '0890123456', position: '', group: '3', sector: 'ภาคเหนือ', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '31' },
  { id: '20', sex: 'นาง', name: 'ศิริพร', Lname: ' ทองคำ', phone: '0901234567', position: '', group: '2', sector: 'ภาคกลาง', coordinator: 'นายชยา ชัยเจริญ', age: '32' },
  { id: '21', sex: 'นาย', name: 'สมชาย', Lname: ' แซ่ตั้ง', phone: '0912345678', position: '', group: '4', sector: 'ภาคอีสาน', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '33' },
  { id: '22', sex: 'นาง', name: 'อรทัย', Lname: ' ศรีสมบัติ', phone: '0923456789', position: '', group: '2', sector: 'ภาคใต้', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '34' },
  { id: '23', sex: 'นาย', name: 'อาทิตย์', Lname: ' วงศ์วาน', phone: '0934567890', position: '', group: '3', sector: 'ภาคเหนือ', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '35' },
  { id: '24', sex: 'นาง', name: 'อารีย์', Lname: ' ศรีสวัสดิ์', phone: '0945678901', position: '', group: '1', sector: 'ภาคกลาง', coordinator: 'นายชยา ชัยเจริญ', age: '36' },
  { id: '25', sex: 'นาย', name: 'อำนาจ', Lname: ' ทองดี', phone: '0956789012', position: '', group: '3', sector: 'ภาคอีสาน', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '37' }
]);

const searchQuery = ref('');

const sortedMembers = (country, members) => {
  return (country === 'เลือกภาค' ? members : members.filter(member => member.sector === country))
    .filter(member => member.name.includes(searchQuery.value) || member.Lname.includes(searchQuery.value))
    .sort((a, b) => {
      if (a.group !== b.group) return a.group.localeCompare(b.group);
      if (a.age !== b.age) return b.age - a.age;
      if (a.name !== b.name) return a.name.localeCompare(b.name);
      if (a.sex !== b.sex) return a.sex.localeCompare(b.sex);
      return a.name.localeCompare(b.name);
    });
};

const toggleDeleteMode = ref(false);
const toggleText = computed(() => selected.value ? 'เปิดแก้ไข' : 'ปิด');

const selectMember = (index) => {
  if (toggleDeleteMode.value) {
    if (position.value[index].member) {
      const removedPerson = position.value[index].member;
      member2.value.push(removedPerson);
      member1.value = member1.value.filter(person => person !== removedPerson);
      position.value[index].member = null;
      console.log(`Removed ${removedPerson.name} ${removedPerson.Lname} from position ${position.value[index].name}`);
    }
  } else {
    const filteredMembers = country.value === 'เลือกภาค' ? member2.value : member2.value.filter(member => member.sector === country.value);
    if (filteredMembers.length > 0 && !position.value[index].member) {
      const selectedPerson = filteredMembers.shift();
      member1.value.push(selectedPerson);
      position.value[index].member = selectedPerson;
      member2.value = member2.value.filter(member => member !== selectedPerson);
      console.log(`Selected ${selectedPerson.name} ${selectedPerson.Lname} for position ${position.value[index].name}`);
    }
  }
};

watch(selected, (newValue) => {
  toggleDeleteMode.value = newValue;
});

const selectMemberForPosition2 = (index) => {
  if (toggleDeleteMode.value) {
    if (position2.value[index].member) {
      const removedPerson = position2.value[index].member;
      member2.value.push(removedPerson);
      member1.value = member1.value.filter(person => person !== removedPerson);
      position2.value[index].member = null;
      console.log(`Removed ${removedPerson.name} ${removedPerson.Lname} from position ${position2.value[index].name}`);
    }
  } else {
    const filteredMembers = country.value === 'เลือกภาค' ? member2.value : member2.value.filter(member => member.sector === country.value);
    if (filteredMembers.length > 0 && !position2.value[index].member) {
      const selectedPerson = filteredMembers.shift();
      member1.value.push(selectedPerson);
      position2.value[index].member = selectedPerson;
      member2.value = member2.value.filter(member => member !== selectedPerson);
      console.log(`Selected ${selectedPerson.name} ${selectedPerson.Lname} for position ${position2.value[index].name}`);
    }
  }
};

const autosort = () => {
  let index = 0;
  const filteredMembers = country.value === 'เลือกภาค' ? member2.value : member2.value.filter(member => member.sector === country.value);

  while (filteredMembers.length > 0 && index < position.value.length) {
    if (!position.value[index].member) {
      const selectedPerson = filteredMembers.shift();
      member1.value.push(selectedPerson);
      position.value[index].member = selectedPerson;
      member2.value = member2.value.filter(member => member !== selectedPerson);
    }
    index++;
  }

  index = 0;
  while (filteredMembers.length > 0 && index < position2.value.length) {
    if (!position2.value[index].member) {
      const selectedPerson = filteredMembers.shift();
      member1.value.push(selectedPerson);
      position2.value[index].member = selectedPerson;
      member2.value = member2.value.filter(member => member !== selectedPerson);
    }
    index++;
  }
  console.log('Autosort completed');
};

const isOpen = ref(false);
const selectedMember = ref(null);

const selectedMemberIndex = ref(null);

const selectUnassignedMember = (index) => {
  selectedMemberIndex.value = index;
};

const handleCardClick = (member, index, isPosition2 = false) => {
  if (toggleDeleteMode.value) {
    if (member) {
      removeMember(index, isPosition2);
    }
  } else {
    if (selectedMemberIndex.value !== null) {
      const selectedPerson = member2.value[selectedMemberIndex.value];
      if (isPosition2) {
        position2.value[index].member = selectedPerson;
      } else {
        position.value[index].member = selectedPerson;
      }
      member1.value.push(selectedPerson);
      member2.value.splice(selectedMemberIndex.value, 1);
      selectedMemberIndex.value = null;
    } else if (member) {
      showMemberInfo(member);
    }
  }
};

const showMemberInfo = (member) => {
  if (member) {
    selectedMember.value = member;
    isOpen.value = true;
  }
};

const removeMember = (index, isPosition2) => {
  const posArray = isPosition2 ? position2 : position;
  if (posArray.value[index].member) {
    const removedPerson = posArray.value[index].member;
    member2.value.push(removedPerson);
    member1.value = member1.value.filter(person => person !== removedPerson);
    posArray.value[index].member = null;
    console.log(`Removed ${removedPerson.name} ${removedPerson.Lname} from position ${posArray.value[index].name}`);
  }
};
</script>
<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
</style>