<template>
  <UForm
    @submit="save"
    :state="data"
    :schema="schema"
    class="flex-column space-y-4"
  >
    <slot
      :wrapped="{ data }"
      :entries="entries"
      :resolver="resolver"
    >
      <UCard class="flex-1">
        <EntitySection
          v-model="data"
          :entries="entries"
          :resolver="resolver"
        ></EntitySection>
      </UCard>
    </slot>
    <div class="flex-1">
      <FPartStepButtonsBar :showBackButton>
        <slot name="buttons"></slot>
      </FPartStepButtonsBar>
    </div>
  </UForm>
</template>

<script setup lang="ts">
import { safeSchemaParser, type PageIdParam } from '@finsoft/blueprint';

const props = defineProps<{
  pageId: PageIdParam,
  initial?: any,
  showBackButton?: boolean,
}>();
const emits = defineEmits(['save']);

const pageDef = usePageDefinition(props.pageId);

const data = computed(() => props.initial || {});
const { fields, schema: rawSchema } = useEntitySchema(pageDef);
const entries = ref(fields!);
const schema = computed(() => safeSchemaParser(rawSchema!));

const baseResolver = useBaseComponentsResolver();
const resolver = BuiltInResolvers(baseResolver).Edit
useComponentResolver(resolver);

function save() {
  emits('save', data.value);
}
</script>