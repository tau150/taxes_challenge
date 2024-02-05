interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

export default async function fetcher<T>(url: string, options?: RequestOptions): Promise<T> {
  const response = await fetch(url, {
    ...options,
    ...(options?.body && { body: JSON.stringify(options.body) }),
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
}
