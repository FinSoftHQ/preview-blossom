<template>
  <FAppModuleLayout>
    <NuxtPage />
  </FAppModuleLayout>
</template>

<script setup lang="ts">
const _current_ctx_blueprint = setBlueprintContext({
  module: 'membership',
  realm: 'list',
}, true);

useComponentResolver(BuiltInResolvers.List);
</script>