<template>
  <dl>
    <dt class="text-sm text-gray-400">
      <UIcon
        v-if="props.icon"
        :name="props.icon"
        class="mr-1"
      />
      {{ label }}
    </dt>
    <dd class="text-md font-bold">{{ display }}</dd>
  </dl>
</template>

<script setup lang="ts">
const model = defineModel<any>();
const props = withDefaults(defineProps<{
  label: string,
  asIs?: boolean,
  dateFormat?: string,
  digit?: number,
  icon?: string,
  emptyLabel?: string
}>(),
  { emptyLabel: '-' });

const display = computed(() => {
  const data = model.value;
  if (props.asIs || !data) {
    return data ?? props.emptyLabel;
  }
  if (typeof data == 'number') {
    if (props.digit)
      return data.toLocaleString(undefined, { minimumFractionDigits: props.digit, maximumFractionDigits: props.digit });
    else
      return data.toLocaleString();
  }
  if (props.dateFormat) {
    return formatDate(data, props.dateFormat);
  }
  return data ?? props.emptyLabel;
});

// Function to get the formatted string from the Date object in DD/MM/YYYY format
const formatDate = (date: string, format: string) => {
  const dateObj = new Date(date);

  if (dateObj.toString() === 'Invalid Date') {
    // date string is expected to be in the format YYYYMMDD, converting it to 'DD/MM/YYYY' or 'YYYY-MM' based on the format
    if (format === 'date') {
      const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, (_, y, m, d) => `${d}/${m}/${y}`);
      return formattedDate;
    } else if (format === 'y-m') {
      const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2');
      return formattedDate;
    }

    return date ?? props.emptyLabel;
  }

  return dateObj.toLocaleDateString('en-GB');
}
</script>