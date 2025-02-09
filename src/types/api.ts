import { z } from "zod";

export type ApiResponse<T = any> = {
  data?: T;
  error?: string | z.ZodError;
};

export type PaginatedResult<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
};