import type { Tax } from "../domain/Tax";

import fetcher from "@/utils/fetcher";

type GetAllResponse = Tax[];

export const getAll = async (): Promise<GetAllResponse> => {
  return fetcher("/taxes");
};

export const getFormById = async (id: string): Promise<GetAllResponse> => {
  return fetcher(`/taxes/${id}/form`);
};
