<template>
  <!-- <pre>{{ data.editgrouptutor.group }}</pre> -->
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-4">
      <div class="flex justify-between mb-4">
        <UButton @click="link" color="white">ปริ้นตาราง</UButton>
        <UButton @click="autoGroupAll">จัดกลุ่ม Auto</UButton>
      </div>
      <div v-for="(group, index) in groups"
        :key="index"
        class="mb-4">
        <UCard>
          <div class="flex justify-between items-center">
            <div class="flex justify-start">
            <h2 class="text-md font-bold flex-grow">กลุ่มที่ {{ String.fromCharCode(65 + index) }}</h2>
            
          </div>
            <span class="text-sm text-gray-500">จำนวนคน: {{ group.length }}</span>
          </div>
          <div class="flex justify-between mt-3">
            <UButton @click="() => addToGroup(index)" class="mr-3"> + เพิ่ม</UButton>
            <UButton @click="() => addAllFilteredToGroup(index)" class="mr-3"> + เพิ่มทั้งระดับ</UButton>
            <div class="flex justify-between w-full space-x-4">
              <USelect v-model="groupMentors[index][0]" :options="availableMasters(index)" placeholder="เลือกพระอาจารย์" class="w-1/4" />
              <USelect v-model="groupMentors[index][1]" :options="availableMentors(index, 1)" placeholder="เลือกพี่เลี้ยง 1" class="w-1/4" />
              <USelect v-model="groupMentors[index][2]" :options="availableMentors(index, 2)" placeholder="เลือกพี่เลี้ยง 2" class="w-1/4" />
              <USelect v-model="groupMentors[index][3]" :options="availableMentors(index, 3)" placeholder="เลือกพี่เลี้ยง 3" class="w-1/4" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            <div v-for="person in group"
              :key="person.id"
              class="mt-2">
              <UCard @click="() => removeFromGroup(person, index)"
                class="hover:bg-red-100">
                <h3>{{ person.sex }}{{ person.name }} {{ person.Lname }}</h3>
                <p>อายุ: {{ person.age }}</p>
                <p>ภาค: {{ person.sector }}</p>
                <p>ผู้ประสานงาน: {{ person.coordinator }}</p>
              </UCard>
            </div>
          </div>
        </UCard>
      </div>
    </div>
    <div>
      <div class="mb-4">
        <div>
          <p>เลือกภาค</p>
          <USelect v-model="selectedRegion"
            :options="['แสดงทั้งหมด', ...regions]"
            placeholder="เลือกภาค"
            class="mt-2" />
        </div>
        <p class="mt-4">เลือกระดับการติว</p>
        <USelect v-model="selectedLevel"
          :options="['แสดงทั้งหมด', 'ระดับ 1 (มาปฏิบัติธรรม 10 ครั้ง ขึ้นไป)', 'ระดับ 2 (มาปฏิบัติธรรม 6 ถึง 9 ครั้ง)', 'ระดับ 3 (มาปฏิบัติธรรม 3 ถึง 5 ครั้ง)', 'ระดับ 4 (มาปฏิบัติธรรม 1 ถึง 2 ครั้ง)', 'ระดับ 5 (อายุไม่เกิน 35)']"
          placeholder="เลือกระดับการติว"
          class="mt-2" />
        <p class="mt-4">ค้นหารายชื่อ</p>
        <div class="mt-2">
          <input v-model="searchQuery"
            type="text"
            placeholder="กรอกรายชื่อ"
            class="w-full p-2 border rounded" />
        </div>
      </div>
      <h1 class="text-red-500 font-bold">รายชื่อที่ยังไม่ได้จัดทั้งหมด {{ totalUngroupedCount }}</h1>
      <div v-for="(person, index) in filteredPeople"
        :key="person.id"
        class="mt-2">
        <UCard :class="{ 'bg-green-100': selectedPerson === person || (!selectedPerson && index === 0) }"
          @click="selectPerson(person)">
          <div>
            <span class="inline text-sm font-bold">{{ person.name }} {{ person.Lname }} </span>
            <Icon v-if="person.sex === 'นาย'"
              class="w-[4mm] h-[4mm] ml-1 text-blue-500 dark:text-grayblue-400"
              name="icon-park-outline:male"></Icon>
            <Icon v-else
              class="w-[4mm] h-[4mm] ml-1 text-pink-500 dark:text-grayblue-400"
              name="icon-park-outline:female"></Icon>
            <!-- <span class="inline text-sm font-bold ml-1">{{ person.age }} ปี</span> -->
            <span class="inline text-sm font-bold ml-1">{{ person.age }} ปี</span>
            <p class="inline text-sm font-bold ml-1">เคยมาแล้ว {{ person.join }} ครั้ง</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PageIdParam } from '@finsoft/blueprint';

const props = defineProps<{
  pageId: PageIdParam,
}>()
const pageDef = usePageDefinition(props.pageId);
const pageFunctions = usePageFunctions(pageDef);

const title = computed(() => pageDef.label || 'Show Item');
const { data, status, error } = await pageFunctions.backendCaller.get();

interface Person {
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
  join: string;
}

const member2 = ref<Person[]>([
  { id: '1', sex: 'นาง', name: 'ธรรมภณ', Lname: ' จุลพัฒน์', phone: '0699593636', position: '', group: '1', sector: 'น.1', coordinator: 'นางมณี ใจงาม', age: '23', join: '1' },
  { id: '2', sex: 'นาย', name: 'ฐิติกร', Lname: ' ศิริธารา', phone: '0983593636', position: '', group: '3', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23', join: '3' },
  { id: '3', sex: 'นาย', name: 'ณัฏฐกานต์', Lname: ' สุวรรณ', phone: '0883593636', position: '', group: '3', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23', join: '2' },
  { id: '4', sex: 'นาย', name: 'ปัถย์', Lname: ' ปานประกอบ', phone: '0968593636', position: '', group: '4', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23', join: '2' },
  { id: '5', sex: 'นาง', name: 'โสรัตน์ ', Lname: ' วัฒนศักดิ์', phone: '0683593636', position: '', group: '1', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23', join: '7' },
  { id: '6', sex: 'นาง', name: 'ภาสกร', Lname: ' เกษมทรัพย์', phone: '0683593636', position: '', group: '2', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '23', join: '4' },
  { id: '7', sex: 'นาย', name: 'ปิติภูมิ', Lname: ' ศิริภาพันธ์', phone: '0683593636', position: '', group: '4', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '54', join: '11' },
  { id: '8', sex: 'นาง', name: 'ภาสกร', Lname: ' เกษมทรัพย์', phone: '0936593636', position: '', group: '2', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '65', join: '11' },
  { id: '10', sex: 'นาง', name: 'ปิติภูมิ', Lname: ' ศิริภาพันธ์', phone: '0869593636', position: '', group: '1', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '70', join: '12' },
  { id: '11', sex: 'นาย', name: 'กิตติพงษ์', Lname: ' วงศ์', phone: '0812345678', position: '', group: '3', sector: 'น.2', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '25', join: '6' },
  { id: '12', sex: 'นาง', name: 'จิราภรณ์', Lname: ' ศรีสวัสดิ์', phone: '0823456789', position: '', group: '2', sector: 'น.3', coordinator: 'นายชยา ชัยเจริญ', age: '30', join: '1' },
  { id: '13', sex: 'นาย', name: 'ณัฐพล', Lname: ' ทองดี', phone: '0834567890', position: '', group: '4', sector: 'น.4', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '28', join: '2' },
  { id: '14', sex: 'นาง', name: 'ธนพร', Lname: ' แซ่ลี้', phone: '0845678901', position: '', group: '1', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '22', join: '1' },
  { id: '15', sex: 'นาย', name: 'ปริญญา', Lname: ' ศรีสุข', phone: '0856789012', position: '', group: '3', sector: 'น.2', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '27', join: '8' },
  { id: '16', sex: 'นาง', name: 'พัชรินทร์', Lname: ' วัฒนชัย', phone: '0867890123', position: '', group: '2', sector: 'น.3', coordinator: 'นายชยา ชัยเจริญ', age: '29', join: '5' },
  { id: '17', sex: 'นาย', name: 'ภูมิพัฒน์', Lname: ' แก้วมณี', phone: '0878901234', position: '', group: '3', sector: 'น.4', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '26', join: '5' },
  { id: '18', sex: 'นาง', name: 'มณีรัตน์', Lname: ' ศรีทอง', phone: '0889012345', position: '', group: '1', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '24', join: '1' },
  { id: '19', sex: 'นาย', name: 'วรพล', Lname: ' จันทร์เพ็ญ', phone: '0890123456', position: '', group: '3', sector: 'น.2', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '31', join: '1' },
  { id: '20', sex: 'นาง', name: 'ศิริพร', Lname: ' ทองคำ', phone: '0901234567', position: '', group: '2', sector: 'น.3', coordinator: 'นายชยา ชัยเจริญ', age: '32', join: '2' },
  { id: '21', sex: 'นาย', name: 'สมชาย', Lname: ' แซ่ตั้ง', phone: '0912345678', position: '', group: '4', sector: 'น.4', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '33', join: '9' },
  { id: '22', sex: 'นาง', name: 'อรทัย', Lname: ' ศรีสมบัติ', phone: '0923456789', position: '', group: '2', sector: 'น.1', coordinator: 'นางนรีรัตน์ ศรีสดุดี', age: '34', join: '9' },
  { id: '23', sex: 'นาย', name: 'อาทิตย์', Lname: ' วงศ์วาน', phone: '0934567890', position: '', group: '3', sector: 'น.2', coordinator: 'นายฉัตรธร ตรีวุฒิ', age: '35', join: '2' },
  { id: '24', sex: 'นาง', name: 'อารีย์', Lname: ' ศรีสวัสดิ์', phone: '0945678901', position: '', group: '1', sector: 'น.3', coordinator: 'นายชยา ชัยเจริญ', age: '36', join: '7' },
  { id: '25', sex: 'นาย', name: 'อำนาจ', Lname: ' ทองดี', phone: '0956789012', position: '', group: '3', sector: 'น.4', coordinator: 'นางนภัสสร รุ่งทิพย์', age: '37', join: '6' }
]);

const mentors: Mentor[] = [
  { name: "สมสวย เจริญใจธนะกุล หน.กอง", nickname: "จิ๋ม", generation: "นครหลวง 1", age: 45 },
  { name: "วศินี หุ่นโพธิ์", nickname: "โบตั๋น", generation: "นครหลวง 1", age: 40 },
  { name: "ศรีวิไล ชัยวงศ์เหล็ก", nickname: "อ๊อด", generation: "นครหลวง 2", age: 50 },
  { name: "โกลัญญา อุดร", nickname: "ดุย", generation: "นครหลวง 3", age: 35 },
  { name: "จินตนา ศรีลี", nickname: "จิน", generation: "นครหลวง 3", age: 38 },
  { name: "อนงค์ทิพย์ ตั้งวราวุธ", nickname: "ไก่", generation: "นครหลวง 3", age: 42 },
  { name: "อมรรัตร์ เศรษฐนันท์", nickname: "หนุ่ย", generation: "นครหลวง 3", age: 39 },
  { name: "ไพลิน สุนทรานุสรณ์", nickname: "กระต่าย", generation: "นครหลวง 3", age: 37 },
  { name: "กนกพร กู้เกียรติกาญจน์", nickname: "นุ่ม", generation: "นครหลวง 3", age: 36 },
  { name: "วราภรณ์ ต้นสอน", nickname: "ปุ้ย", generation: "นครหลวง 3", age: 41 },
  { name: "ปิยะวรรณ กลิ่นจันทร์", nickname: "ปุ้ม", generation: "นครหลวง 3", age: 43 },
];

const master = [
  { name: "พระครูใบฎีกาสันทัด รวิวณโณ", age: "37" },
  { name: "พระครูธรรมธรอารักษ์ ญาณารักโข", age: "32" },
  { name: "พระดุลวินิจ วิชชามงคโล", age: "13" },
  { name: "พระมหาสันติราษฎร์ อุปสนโต", age: "12" },
  { name: "พระมหาวีระพงษ์ วีรว์โส", age: "11" },
];


const regions = ['น.1', 'น.2', 'น.3', 'น.4'];
const selectedRegion = ref('แสดงทั้งหมด');
const groupRegions = ref(['น.1', 'น.2', 'น.3', 'น.4']);

const groups = ref<Person[][]>(Array(19).fill([]).map(() => []));

const selectedPerson = ref<Person | null>(null);

const selectPerson = (person: Person) => {
  selectedPerson.value = person;
};

const addToGroup = (groupIndex: number) => {
  if (filteredPeople.value.length > 0) {
    const person = selectedPerson.value || filteredPeople.value[0];
    if (person) {
      const index = member2.value.indexOf(person);
      if (index > -1) {
        if (groups.value[groupIndex]) {
          const personToAdd = member2.value.splice(index, 1)[0];
          if (personToAdd) {
            groups.value[groupIndex].push(personToAdd);
            selectedPerson.value = null; // Clear the selection after adding
          }
        }
      }
    }
  }
};

const addAllFilteredToGroup = (groupIndex: number) => {
  filteredPeople.value.forEach(person => {
    const idx = member2.value.indexOf(person);
    if (idx > -1 && groups.value[groupIndex]) {
      groups.value[groupIndex].push(member2.value.splice(idx, 1)[0]);
    }
  });
};

const autoGroupAll = () => {
  groups.value.forEach((group, index) => {
    const selectedRegion = groupRegions.value[index];
    const peopleToAdd = member2.value.filter(person => person.sector === selectedRegion);
    peopleToAdd.forEach(person => {
      const personIndex = member2.value.indexOf(person);
      if (personIndex > -1) {
        groups.value[index].push(member2.value.splice(personIndex, 1)[0]);
      }
    });
  });
};

const removeFromGroup = (person, groupIndex) => {
  const index = groups.value[groupIndex].indexOf(person);
  if (index > -1) {
    groups.value[groupIndex].splice(index, 1);
    member2.value.push(person);
  }
};


const sortedPeople = computed(() => {
  return member2.value.slice().sort((a, b) => {
    if (a.name !== b.name) return a.name.localeCompare(b.name);
    return b.age - a.age;
  });
});

const searchQuery = ref('');
const selectedLevel = ref('แสดงทั้งหมด');

const filteredPeople = computed(() => {
  return sortedPeople.value.filter(person => {
    const matchesRegion = selectedRegion.value === 'แสดงทั้งหมด' || person.sector === selectedRegion.value;
    const matchesSearch = person.name.includes(searchQuery.value);
    const matchesLevel = selectedLevel.value === 'แสดงทั้งหมด' || (
      (selectedLevel.value === 'ระดับ 1 (มาปฏิบัติธรรม 10 ครั้ง ขึ้นไป)' && parseInt(person.join) >= 10) ||
      (selectedLevel.value === 'ระดับ 2 (มาปฏิบัติธรรม 6 ถึง 9 ครั้ง)' && parseInt(person.join) >= 6 && parseInt(person.join) <= 9) ||
      (selectedLevel.value === 'ระดับ 3 (มาปฏิบัติธรรม 3 ถึง 5 ครั้ง)' && parseInt(person.join) >= 3 && parseInt(person.join) <= 5) ||
      (selectedLevel.value === 'ระดับ 4 (มาปฏิบัติธรรม 1 ถึง 2 ครั้ง)' && parseInt(person.join) >= 1 && parseInt(person.join) <= 2) ||
      (selectedLevel.value === 'ระดับ 5 (อายุไม่เกิน 35)' && parseInt(person.age) <= 35)
    );
    return matchesRegion && matchesSearch && matchesLevel;
  });
});

const totalUngroupedCount = computed(() => member2.value.length);

const availableMentors = (groupIndex: number, mentorIndex: number) => {
  const selectedMentors = groupMentors.value;
  return mentorOptions.filter(mentor => !selectedMentors.includes(mentor) || groupMentors.value[groupIndex][mentorIndex] === mentor);
};

const availableMasters = (groupIndex: number) => {
  const selectedMasters = groupMentors.value.map(g => g[0]);
  return masterOptions.filter(m =>
    !selectedMasters.includes(m) ||
    groupMentors.value[groupIndex][0] === m
  );
};

const link = () => {
  const groupsWithMentors = groups.value.map((group, index) => {
    return group.map(person => ({
      ...person,
      mentors: groupMentors.value[index].filter(mentor => mentor) // Filter out empty selections
    }));
  });

  navigateTo({
    path: 'groupreporttutor',
    query: { groups: JSON.stringify(groupsWithMentors) }
  });
};

const mentorOptions = mentors.map(mentor => mentor.name);
const masterOptions = master.map(m => m.name);
const groupMentors = ref<string[][]>(Array(groups.value.length).fill([]).map(() => Array(3).fill('')));
</script>
