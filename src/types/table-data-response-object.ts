export type TableDataResponseObject = {
  id: number;
  name: string;
  status: string;
  description: string;
  budget: number;
  createdAt: string;
  updatedAt: string;
  type: string;
  startDate: string;
  endDate: string;
  images?: Array<{ id: number; src: string }>;
  categories: Array<{ id: number; name: string }>;
};
