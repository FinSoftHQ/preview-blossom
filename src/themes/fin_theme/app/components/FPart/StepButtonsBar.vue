<template>
  <FPartActionsBar>
    <template
      #left
      v-if="showBackButton"
    >
      <UButton
        color="white"
        icon="i-heroicons-chevron-left-16-solid"
        @click="$router.back()"
      >
        Back
      </UButton>
    </template>
    <template #right>
      <slot>
        <UButton type="submit">
          Save
        </UButton>
      </slot>
    </template>
  </FPartActionsBar>
</template>

<script setup lang="ts">
const props = defineProps<{
  showBackButton?: boolean,
}>();
</script>