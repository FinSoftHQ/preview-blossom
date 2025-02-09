export const useLocalStepsData = (module: string, realm: string) => defineStore(`local-${module}.${realm}`, () => {
  const data = ref<any>({});

  return { data };
})();