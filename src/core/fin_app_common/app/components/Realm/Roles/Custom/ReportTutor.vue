<template>
    <div>
        <div class="flex justify-end items-center">
            <button @click="printPage"
                class="mb-4 p-2 bg-blue-500 text-white rounded">Print</button>
        </div>
        <div class="a4-page" ref="printableArea">
            <div v-for="(letter, index) in letters"
                :key="index"
                class="mb-4 page-break">
                <h2 v-if="groups[index] && groups[index].length" class="text-center text-red-500 text-4xl font-bold">กลุ่ม {{ letter }}</h2>
                <table v-if="groups[index] && groups[index].length"
                    class="mt-5 table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th class="border border-gray-200 px-4 py-2">ลำดับ</th>
                            <th class="border border-gray-200 px-4 py-2">ชื่อ-สกุล</th>
                            <th class="border border-gray-200 px-4 py-2">อายุ</th>
                            <th class="border border-gray-200 px-4 py-2">กลุ่ม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person, personindex) in groups[index]"
                            :key="person.id">
                            <td class="text-center border border-gray-200 px-4 py-2">{{ personindex + 1 }}</td>
                            <td class="border border-gray-200 px-4 py-2">{{ person.sex }}{{ person.name }} {{
                                person.Lname }}</td>
                            <td class="text-center border border-gray-200 px-4 py-2">{{ person.age }}</td>
                            <td class="text-center border border-gray-200 px-4 py-2">{{ person.group }}</td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="groups[index] && groups[index].length > 0 && groups[index][0].mentors.length > 0">
                    <table class="mt-5 table-auto w-full border-collapse border border-gray-200 mb-4">
                        <thead>
                            <tr>
                            <th class="border border-gray-200 px-4 py-2">ลำดับ</th>
                                <th class="border border-gray-200 px-4 py-2">รายชื่อพี่เลี้ยง</th>
                                <!-- <th class="border border-gray-200 px-4 py-2">ชื่อเล่น</th> -->
                                <th class="border border-gray-200 px-4 py-2">อายุ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(mentor, mentorindex) in getOrderedMentors(index)" :key="mentor">
                            <td class="text-center border border-gray-200 px-4 py-2">{{ mentorindex + 1 }}</td>
                                <td class="border border-gray-200 px-4 py-2">{{ mentor }}</td>
                                <td class="text-center border border-gray-200 px-4 py-2">{{ getMentorAge(mentor) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Person {
    id: string;
    sex: string;
    name: string;
    Lname: string;
    age: string;
    sector: string;
    coordinator: string;
    group: string;
    mentors: string[];
}

const route = useRoute();
const groups = ref<Person[][]>([]);
const printableArea = ref<HTMLDivElement | null>(null);
const letters = [...'ABCDEFGHIJKLMNOPQRS']; // กลุ่ม A ถึง S

onMounted(() => {
    const groupsData = route.query.groups as string;
    if (groupsData) {
        groups.value = JSON.parse(groupsData);
    }
});

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

const getMentorGeneration = (mentorName: string) => {
    const mentor = mentors.find(m => m.name === mentorName);
    return mentor ? mentor.generation : '';
};

const getMentorNickname = (mentorName: string) => {
    const mentor = mentors.find(m => m.name === mentorName);
    return mentor ? mentor.nickname : '';
};

const getMentorAge = (mentorName: string) => {
    const mentor = mentors.find(m => m.name === mentorName);
    return mentor ? mentor.age : '';
};

const getOrderedMentors = (groupIndex: number) => {
  if (!groups.value[groupIndex] || groups.value[groupIndex].length === 0) return [];
  const mentorsList = groups.value[groupIndex][0].mentors;
  return mentorsList.slice(1); // Exclude the mentor at index 0
};

const mentors = [
{ name: "สมสวย เจริญใจธนะกุล หน.กอง", nickname: "จิ๋ม", generation: "นครหลวง 1",age: "25" },
  { name: "วศินี หุ่นโพธิ์", nickname: "โบตั๋น", generation: "นครหลวง 1",age: "24" },
  { name: "ศรีวิไล ชัยวงศ์เหล็ก", nickname: "อ๊อด", generation: "นครหลวง 2",age: "26" },
  { name: "โกลัญญา อุดร", nickname: "ดุย", generation: "นครหลวง 3",age: "23" },
  { name: "จินตนา ศรีลี", nickname: "จิน", generation: "นครหลวง 3",age: "23" },
  { name: "อนงค์ทิพย์ ตั้งวราวุธ", nickname: "ไก่", generation: "นครหลวง 3",age: "25" },
  { name: "อมรรัตร์ เศรษฐนันท์", nickname: "หนุ่ย", generation: "นครหลวง 3",age: "24" },
  { name: "ไพลิน สุนทรานุสรณ์", nickname: "กระต่าย", generation: "นครหลวง 3",age: "24" },
  { name: "กนกพร กู้เกียรติกาญจน์", nickname: "นุ่ม", generation: "นครหลวง 3",age: "23" },
  { name: "วราภรณ์ ต้นสอน", nickname: "ปุ้ย", generation: "นครหลวง 3",age: "24" },
  { name: "ปิยะวรรณ กลิ่นจันทร์", nickname: "ปุ้ม", generation: "นครหลวง 3",age: "23" },
];
</script>

<style scoped>
.a4-page {
    width: 210mm;
    min-height: 297mm;
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
    .page-break {
        page-break-after: always;
    }
}
</style>