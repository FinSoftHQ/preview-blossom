<template>
  <RealmPageEach :pageId></RealmPageEach>
</template>

<script setup lang="ts">
definePageMeta({
  name: `camp.each.evaluationformprint`,
});
const pageId = {
  page: 'evaluationformprint',
};

useAppExtraRolesAndComponents();
usePdfPrint({
  templatePath: '/evaluation_form.json',
  basePdfPath: '/evaluation_form.pdf',
  // blankBasePdfPath: false,
  dataTransformer: (data) => {
    return {
      ...data,
      fullname: data.firstname + ' ' + data.surname,
      age: 'อายุ',
      region: 'ภาค',
      group: 'กลุ่ม',
      campdate: '01/01/2564',
      image: 'photo',
    }
  },
});
const pageMemDef = usePageDefinition({ module: 'membership', realm: 'list', page: 'root' });

</script>