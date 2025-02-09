<template>
  <EntityInfoField
    v-model="selected"
    as-is
  ></EntityInfoField>
</template>

<script setup lang="ts">
// const inputModel = defineModel<string>();
const props = defineProps<{
  modelValue: any;
  icon?: string;
  placeholder?: string;
  link: any;
  emptyLabel?: string;
  labelField?: string;
}>();
const emits = defineEmits(['update:modelValue']);
const selected = ref<any>(null);

const pageDef = usePageDefinition({ module: props.link.module, realm: 'each', page: props.link.list });
const pageFunctions = usePageFunctions(pageDef);
const optionLabel = computed(() => {
  const labels = props.link?.labels || ['name'];
  return labels[0];
});
const linkid = computed(() => props.modelValue);
const { data: _data, status, error } = pageFunctions.backendCaller.get(linkid);

watchEffect(() => {
  const matchedItem = _data.value as any;
  selected.value = matchedItem ? matchedItem[optionLabel.value] : props.emptyLabel || '';
});
</script>