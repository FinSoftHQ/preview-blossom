<template>
    <div>
        <div class="flex justify-end items-center">
            <button @click="printPage"
                class="mb-4 p-2 bg-blue-500 text-white rounded">Print</button>
        </div>
        <div class="a4-page"
            ref="printableArea">
            <div class="text-center mb-4">
                <h1 class="text-2xl font-bold">รายชื่อ เจ้าภาพรายใหญ่ และ คนเก่า {{ data.generation }}</h1>
                <p>ระว่างวันที่ {{ formatDateToThai(data.startDate) }} - {{ formatDateToThai(data.endDate) }}</p>
            </div>
            <div v-for="(group, index) in groups"
                :key="index"
                class="mb-4">
                <div v-for="(person, personindex) in group"
                    :key="person.id" class="space-y-4">
                    <UCard>
                        <div class="flex justify-between items-center ">
                            <div>
                                <p class="text-lg font-bold">ชื่อ-สกุล {{ person.name }} {{ person.Lname }}</p>
                                <p class="text-lg font-bold">อายุ {{ person.age }} ปี สังกัดภาค{{ person.sector }}</p>
                                <p class="text-lg font-bold">วันที่ {{ formatDateToThai(data.startDate) }} - {{ formatDateToThai(data.endDate) }}
                                </p>
                            </div>
                            <div>
                                <UIcon name="i-mdi-person-box" class="w-[20mm] h-[20mm]" ></UIcon>
                            </div>
                        </div>
                    </UCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { PageIdParam } from '@finsoft/blueprint';

const props = defineProps<{
    pageId: PageIdParam,
}>()
const pageDef = usePageDefinition(props.pageId);
const pageFunctions = usePageFunctions(pageDef);
const { data, status, error } = await pageFunctions.backendCaller.get();

const formatDateToThai = (dateString: string) => {
    const months = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const year = parseInt(dateString.substring(0, 4)) + 543;
    const month = parseInt(dateString.substring(4, 6)) - 1;
    const day = parseInt(dateString.substring(6, 8));

    return `${day} ${months[month]} ${year}`;
};

interface Person {
    id: string;
    sex: string;
    name: string;
    Lname: string;
    age: string;
    sector: string;
    coordinator: string;
    mentors: string[];
}

const route = useRoute();
const groups = ref<Person[][]>([]);
const printableArea = ref<HTMLDivElement | null>(null);

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

const mentors = [
    { name: "สมสวย เจริญใจธนะกุล หน.กอง", nickname: "จิ๋ม", generation: "นครหลวง 1", age: "25" },
    { name: "วศินี หุ่นโพธิ์", nickname: "โบตั๋น", generation: "นครหลวง 1", age: "24" },
    { name: "ศรีวิไล ชัยวงศ์เหล็ก", nickname: "อ๊อด", generation: "นครหลวง 2", age: "26" },
    { name: "โกลัญญา อุดร", nickname: "ดุย", generation: "นครหลวง 3", age: "23" },
    { name: "จินตนา ศรีลี", nickname: "จิน", generation: "นครหลวง 3", age: "23" },
    { name: "อนงค์ทิพย์ ตั้งวราวุธ", nickname: "ไก่", generation: "นครหลวง 3", age: "25" },
    { name: "อมรรัตร์ เศรษฐนันท์", nickname: "หนุ่ย", generation: "นครหลวง 3", age: "24" },
    { name: "ไพลิน สุนทรานุสรณ์", nickname: "กระต่าย", generation: "นครหลวง 3", age: "24" },
    { name: "กนกพร กู้เกียรติกาญจน์", nickname: "นุ่ม", generation: "นครหลวง 3", age: "23" },
    { name: "วราภรณ์ ต้นสอน", nickname: "ปุ้ย", generation: "นครหลวง 3", age: "24" },
    { name: "ปิยะวรรณ กลิ่นจันทร์", nickname: "ปุ้ม", generation: "นครหลวง 3", age: "23" },
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
}
</style>