<template>
  <component :is="currentRoleComponent" :pageId>
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
  </component>
  <RealmRolesMissing v-if="!currentRoleComponent"></RealmRolesMissing>
</template>

<script setup lang="ts">
import type { PageIdParam } from '@finsoft/blueprint';
import RealmRolesEachEdit from '../Roles/Each/Edit.vue';
import RealmRolesSharedStepEdit from '../Roles/Shared/StepEdit.vue';
import RealmRolesSharedStepConfirm from '../Roles/Shared/StepConfirm.vue';
import RealmRolesEachModalEdit from '../Roles/Each/ModalEdit.vue';
import RealmRolesEachDefault from '../Roles/Each/Default.vue';
import RealmRolesSharedCustomView from '../Roles/Shared/CustomView.vue';
import RealmRolesSharedResult from '../Roles/Shared/Result.vue';
// เก้า
import RealmRolesEachCamp from '../Roles/Each/Camp.vue';
import RealmRolesCustomAddCar from '../Roles/Custom/AddCar.vue';
import RealmRolesCustomAddBed from '../Roles/Custom/AddBed.vue';
import RealmRolesCustomDocument  from '../Roles/Custom/Document.vue';
import RealmRolesWebPrint from '../Roles/Custom/WebPrint.vue';
import RealmRolesEachTakePhoto from '../Roles/Each/TakePhoto.vue';
// กี้

// เจน
const baseRoles = useBaseRoles();
const roles: Record<string, any> = {
  ...baseRoles,
  edit: RealmRolesEachEdit,
  stepedit: RealmRolesSharedStepEdit,
  stepconfirm: RealmRolesSharedStepConfirm,
  modaledit: RealmRolesEachModalEdit,
  result: RealmRolesSharedResult,
  customview: RealmRolesSharedCustomView,
  default: RealmRolesEachDefault,
   // เก้า
   camp: RealmRolesEachCamp,
  addcar: RealmRolesCustomAddCar,
  addbed: RealmRolesCustomAddBed,
  document: RealmRolesCustomDocument,
  webprint: RealmRolesWebPrint,
  takephoto: RealmRolesEachTakePhoto,
  // กี้

  // เจน
};

const props = defineProps<{
  pageId: PageIdParam,
  role?: string,
}>();
const pageDef = usePageDefinition(props.pageId);

const role = computed<string>(() => props.role || pageDef.role || 'default');
const currentRoleComponent = computed(() => roles[role.value] || null);
</script>