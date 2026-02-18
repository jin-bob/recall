export type PaginatedResponse<Item> = {
  total: number;
  data: Array<Item>;
};
