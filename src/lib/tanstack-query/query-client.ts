import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const queryCache = new QueryCache();

const mutationCache = new MutationCache();

export default new QueryClient({
  queryCache,
  mutationCache,
});
