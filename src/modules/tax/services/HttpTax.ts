import type { Tax } from "../domain/Tax";
import type { Input } from "@/modules/form/domain/Input";

import { decodeInputs } from "@/modules/form/domain/Input";
import fetcher from "@/utils/fetcher";
import { HttpMethod } from "@/utils/fetcher";

type GetAllResponse = Tax[];

interface GetFormByIdResponse {
  id: string;
  inputFields: Input[];
}

interface GetFormByIdPartialResponse {
  id: string;
  inputFields: Record<string, unknown>[];
}

interface PostFormParams {
  id: string;
  data: Record<string, string>;
}

export const getAll = async (): Promise<GetAllResponse> => {
  return fetcher("/taxes");
};

export const find = async (id: string): Promise<Tax> => {
  return fetcher(`/taxes/${id}`);
};

export const getFormById = async (id: string): Promise<GetFormByIdResponse> => {
  const data: GetFormByIdPartialResponse = await fetcher(`/taxes/${id}/form`);

  const decodedInputFields = decodeInputs(data.inputFields);

  return { id: data.id, inputFields: decodedInputFields };
};

export const postForm = async ({ id, data }: PostFormParams): Promise<Tax> => {
  const tax = await find(id);

  const updatedTax = { ...tax, submissions: [...(tax.submissions ?? []), data] };

  return fetcher(`/taxes/${id}`, {
    method: HttpMethod.PUT,
    body: updatedTax,
  });
};
