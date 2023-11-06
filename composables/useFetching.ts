export const useFetching = () => {
  // config
  const config = useRuntimeConfig();

  // state
  const res = useState<any>("res", () => []);
  const loading = ref(true);
  const pagination = useState<any>("pagination", () => {});

  // function/action
  const fetchApi = async (path: string, method: any, body?: {}) => {
    try {
      const result = await $fetch(`${config.public.apiBase}/${path}`, {
        method: method,
        body: body,
      });
      loading.value = false;
      res.value = result.data;
      pagination.value = result.pagination;
    } catch (error: any) {
      res.value = error;
    }
  };

  // global state or function
  return {
    res, // state
    pagination,
    loading, // state
    fetchApi, // function
  };
};
